(function () {
  "use strict";

  var METRICS_URL = "https://api.tecnocooperativa.cl/";
  var HEALTHZ_URL = "https://api.tecnocooperativa.cl/healthz";
  var CACHE_KEY = "tecnocoop:estado-cache:v2";

  function readCache() {
    try {
      var raw = window.localStorage.getItem(CACHE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (err) {
      return null;
    }
  }

  function writeCache(snapshot) {
    try {
      window.localStorage.setItem(CACHE_KEY, JSON.stringify(snapshot));
    } catch (err) {
      /* localStorage puede no estar disponible (modo privado, cuota, etc.) */
    }
  }

  function bytesToGb(bytes) {
    return Math.round((bytes / 1e9) * 10) / 10;
  }

  // "2026-09-20" -> "20 de septiembre de 2026". Se arma en UTC para que la zona
  // horaria del navegador no corra la fecha un día.
  function formatLongDate(iso) {
    var parts = String(iso).split("-").map(Number);
    var date = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2]));
    if (isNaN(date.getTime())) return iso;
    return new Intl.DateTimeFormat("es-CL", { dateStyle: "long", timeZone: "UTC" }).format(date);
  }

  // La API informa en una sola respuesta si todo está sano (`healthy`), qué
  // máquinas (`nodes`) y cuántos servicios (`services`) hay.
  async function fetchLive() {
    var metricsRes = await fetch(METRICS_URL, { cache: "no-store" });
    if (!metricsRes.ok) throw new Error("metrics endpoint returned " + metricsRes.status);
    var metrics = await metricsRes.json();

    var healthy = metrics.healthy;
    if (typeof healthy !== "boolean") {
      // Una API más vieja no trae `healthy`: se pregunta a /healthz.
      healthy = false;
      try {
        var healthRes = await fetch(HEALTHZ_URL, { cache: "no-store" });
        if (healthRes.ok) healthy = (await healthRes.text()).trim().toLowerCase() === "ok";
      } catch (err) {
        healthy = false;
      }
    }

    return { metrics: metrics, healthy: healthy, fetchedAt: Date.now() };
  }

  function setNavStatus(state, label) {
    var dots = document.querySelectorAll("[data-status-dot]");
    dots.forEach(function (dot) {
      dot.classList.remove("status-dot--ok", "status-dot--down", "status-dot--unknown");
      dot.classList.add("status-dot--" + state);
      dot.setAttribute("role", "img");
      dot.setAttribute("aria-label", label);
      dot.setAttribute("title", label);
    });
  }

  function setField(name, value) {
    document.querySelectorAll('[data-field="' + name + '"]').forEach(function (el) {
      el.textContent = value;
    });
  }

  function plural(n, uno, varios) {
    return n + " " + (n === 1 ? uno : varios);
  }

  // Qué decir cuando algo anda mal: lo concreto, no solo «hay problemas».
  function problemLabel(metrics) {
    var caidas = (metrics.nodes || []).filter(function (n) { return !n.up && !n.on_demand; }).length;
    var fallas = metrics.services ? metrics.services.failing : 0;
    var partes = [];
    if (caidas) partes.push(caidas === 1 ? "Una máquina no responde" : caidas + " máquinas no responden");
    if (fallas) partes.push(plural(fallas, "servicio con fallas", "servicios con fallas"));
    return partes.length ? partes.join(" y ") : "Hay problemas con la infraestructura";
  }

  // Cada máquina: operativa, durmiendo (se enciende cuando se necesita) o sin respuesta.
  function renderNodes(nodes) {
    var lista = document.querySelector('[data-field="nodes"]');
    if (!lista || !Array.isArray(nodes)) return;
    var nombres = {};
    try {
      nombres = JSON.parse(lista.getAttribute("data-node-names") || "{}");
    } catch (err) {
      nombres = {};
    }
    var textos = { ok: "Operativa", sleeping: "Durmiendo", down: "No responde" };
    lista.textContent = "";
    nodes.forEach(function (n) {
      var estado = n.up ? "ok" : n.on_demand ? "sleeping" : "down";
      var info = nombres[n.id] || {};

      var card = document.createElement("div");
      card.className = "status-card status-card--" + estado;

      var header = document.createElement("div");
      header.className = "status-card__header";
      var h3 = document.createElement("h3");
      h3.textContent = info.nombre || "Máquina";
      var badge = document.createElement("span");
      badge.className = "status-badge status-badge--" + (estado === "sleeping" ? "disabled" : estado);
      badge.textContent = textos[estado];
      header.appendChild(h3);
      header.appendChild(badge);
      card.appendChild(header);

      var p = document.createElement("p");
      p.textContent = info.detalle || "";
      card.appendChild(p);
      lista.appendChild(card);
    });
  }

  function renderServices(services) {
    if (!services) return;
    setField("services-running", services.running + " de " + services.enabled);
    setField("services-failing", String(services.failing));
    var badge = document.querySelector('[data-field="services-badge"]');
    if (!badge) return;
    var estado = services.failing > 0 ? "down" : services.running < services.enabled ? "degraded" : "ok";
    var texto = { ok: "Operativos", degraded: "Degradados", down: "Con fallas" };
    badge.classList.remove("status-badge--disabled", "status-badge--ok", "status-badge--degraded", "status-badge--down");
    badge.classList.add("status-badge--" + estado);
    badge.textContent = texto[estado];
  }

  function applyToPage(snapshot, fromCache) {
    var metrics = snapshot.metrics;
    var healthy = snapshot.healthy;

    var navLabel = healthy
      ? "Estado: todo operativo" + (fromCache ? " (dato en caché)" : "")
      : "Estado: hay problemas" + (fromCache ? " (dato en caché)" : "");
    setNavStatus(healthy ? "ok" : "down", navLabel);

    if (!document.querySelector("[data-estado-page]")) return;

    var usedGb = bytesToGb(metrics.used_space_bytes);
    var totalGb = bytesToGb(metrics.total_space_bytes);
    var freeGb = bytesToGb(metrics.free_space_bytes);
    var usedPct = totalGb > 0 ? Math.round((usedGb / totalGb) * 1000) / 10 : 0;

    setField("date", formatLongDate(metrics.date));
    setField("overall-label", healthy ? "Todos los sistemas operativos" : problemLabel(metrics));
    var banner = document.querySelector('[data-field="overall-banner"]');
    if (banner) {
      banner.classList.remove("status-banner--ok", "status-banner--down", "status-banner--degraded", "status-banner--unknown");
      banner.classList.add(healthy ? "status-banner--ok" : "status-banner--down");
    }
    renderNodes(metrics.nodes);
    renderServices(metrics.services);

    setField("storage-used", usedGb + " GB");
    setField("storage-free", freeGb + " GB");
    setField("storage-total", totalGb + " GB");
    var bar = document.querySelector('[data-field="storage-bar"]');
    if (bar) {
      bar.setAttribute("aria-label", usedGb + " GB usados de " + totalGb + " GB");
    }
    var fill = document.querySelector('[data-field="storage-bar-fill"]');
    if (fill) {
      fill.style.width = usedPct + "%";
    }

    setField("pod-count", metrics.pod_count);
    // kwh es el acumulado desde la primera lectura; kwh_month, el del mes en curso.
    setField("kwh-month", metrics.kwh_month + " kWh");
    setField("kwh-total", metrics.kwh + " kWh");

    var note = document.querySelector('[data-field="source-note"]');
    if (note) {
      note.textContent = fromCache
        ? "Mostrando el último dato disponible en caché; no se pudo contactar api.tecnocooperativa.cl."
        : "Datos en vivo desde api.tecnocooperativa.cl.";
    }
  }

  function markUnreachable() {
    setNavStatus("unknown", "Estado: no se pudo contactar api.tecnocooperativa.cl");
    var banner = document.querySelector('[data-field="overall-banner"]');
    if (banner) {
      banner.classList.remove("status-banner--ok", "status-banner--down", "status-banner--unknown");
      banner.classList.add("status-banner--degraded");
    }
    setField("overall-label", "No se pudo obtener el estado en vivo");
    var note = document.querySelector('[data-field="source-note"]');
    if (note) {
      note.textContent =
        "No se pudo contactar api.tecnocooperativa.cl y no hay datos en caché. Mostrando la última información conocida en el sitio.";
    }
  }

  // Cada plataforma (Música, Audioteca, Academia) se comprueba pidiendo su
  // portada: no tienen /healthz, pero responden con CORS abierto.
  var PLATFORM_TIMEOUT_MS = 8000;

  async function checkPlatform(url) {
    var controller = typeof AbortController === "function" ? new AbortController() : null;
    var timer = controller ? setTimeout(function () { controller.abort(); }, PLATFORM_TIMEOUT_MS) : null;
    try {
      var res = await fetch(url, {
        cache: "no-store",
        signal: controller ? controller.signal : undefined,
      });
      return res.ok;
    } catch (err) {
      return false;
    } finally {
      if (timer) clearTimeout(timer);
    }
  }

  async function checkPlatforms() {
    var cards = Array.prototype.slice.call(document.querySelectorAll("[data-plataforma]"));
    if (!cards.length) return;

    var results = await Promise.all(
      cards.map(function (card) {
        return checkPlatform(card.getAttribute("data-plataforma")).then(function (up) {
          var badge = card.querySelector("[data-plataforma-badge]");
          if (badge) {
            badge.classList.remove("status-badge--disabled", "status-badge--ok", "status-badge--down");
            badge.classList.add(up ? "status-badge--ok" : "status-badge--down");
            badge.textContent = up ? "Operativo" : "No responde";
          }
          return up;
        });
      })
    );

    return results.filter(function (up) { return !up; }).length;
  }

  // Si la infraestructura está bien pero alguna plataforma no responde, el
  // aviso general lo dice en vez de quedar en verde. Se llama después de
  // aplicar la API, que es la que pone el aviso en verde o rojo.
  function applyPlatformsToBanner(down) {
    var banner = document.querySelector('[data-field="overall-banner"]');
    if (down && banner && banner.classList.contains("status-banner--ok")) {
      banner.classList.remove("status-banner--ok");
      banner.classList.add("status-banner--degraded");
      setField(
        "overall-label",
        down === 1 ? "Una plataforma no responde" : down + " plataformas no responden"
      );
    }
  }

  async function init() {
    var platforms = document.querySelector("[data-estado-page]") ? checkPlatforms() : null;
    var cached = readCache();
    if (cached) {
      applyToPage(cached, true);
    } else {
      setNavStatus("unknown", "Estado: cargando…");
    }

    try {
      var fresh = await fetchLive();
      writeCache(fresh);
      applyToPage(fresh, false);
    } catch (err) {
      if (!cached) {
        markUnreachable();
      }
    }

    if (platforms) {
      applyPlatformsToBanner(await platforms);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

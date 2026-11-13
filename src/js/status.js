(function () {
  "use strict";

  var METRICS_URL = "https://status-tc.aebn.cl/";
  var HEALTHZ_URL = "https://status-tc.aebn.cl/healthz";
  var CACHE_KEY = "tecnocoop:estado-cache:v1";

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

  async function fetchLive() {
    var metricsRes = await fetch(METRICS_URL, { cache: "no-store" });
    if (!metricsRes.ok) throw new Error("metrics endpoint returned " + metricsRes.status);
    var metrics = await metricsRes.json();

    var healthy = false;
    try {
      var healthRes = await fetch(HEALTHZ_URL, { cache: "no-store" });
      if (healthRes.ok) {
        var text = (await healthRes.text()).trim().toLowerCase();
        healthy = text === "ok";
      }
    } catch (err) {
      healthy = false;
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
    setField(
      "overall-label",
      healthy ? "Todos los sistemas operativos" : "Hay problemas con la infraestructura"
    );
    var banner = document.querySelector('[data-field="overall-banner"]');
    if (banner) {
      banner.classList.remove("status-banner--ok", "status-banner--down");
      banner.classList.add(healthy ? "status-banner--ok" : "status-banner--down");
    }

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
        ? "Mostrando el último dato disponible en caché; no se pudo contactar status-tc.aebn.cl."
        : "Datos en vivo desde status-tc.aebn.cl.";
    }
  }

  function markUnreachable() {
    setNavStatus("unknown", "Estado: no se pudo contactar status-tc.aebn.cl");
    var banner = document.querySelector('[data-field="overall-banner"]');
    if (banner) {
      banner.classList.remove("status-banner--ok", "status-banner--down");
      banner.classList.add("status-banner--degraded");
    }
    setField("overall-label", "No se pudo obtener el estado en vivo");
    var note = document.querySelector('[data-field="source-note"]');
    if (note) {
      note.textContent =
        "No se pudo contactar status-tc.aebn.cl y no hay datos en caché. Mostrando la última información conocida en el sitio.";
    }
  }

  async function init() {
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
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

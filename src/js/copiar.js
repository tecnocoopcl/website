(function () {
  "use strict";

  // Un enlace «mailto:» no hace nada si el computador no tiene un programa de
  // correo configurado (lo normal cuando se usa Gmail u otro correo web). Por
  // eso, junto al botón hay otro que copia la dirección: pega y escribe desde
  // donde prefieras. Sin JavaScript el botón queda oculto y la dirección se ve
  // igual en el texto.
  function copiar(texto) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(texto);
    }
    return new Promise(function (resolve, reject) {
      var area = document.createElement("textarea");
      area.value = texto;
      area.setAttribute("readonly", "");
      area.style.position = "absolute";
      area.style.left = "-9999px";
      document.body.appendChild(area);
      area.select();
      var ok = false;
      try {
        ok = document.execCommand("copy");
      } catch (err) {
        ok = false;
      }
      document.body.removeChild(area);
      ok ? resolve() : reject(new Error("no se pudo copiar"));
    });
  }

  document.querySelectorAll("[data-copiar]").forEach(function (boton) {
    var texto = boton.getAttribute("data-copiar");
    var original = boton.textContent;
    var volver = null;
    boton.hidden = false;

    boton.addEventListener("click", function () {
      copiar(texto).then(
        function () {
          boton.textContent = "Copiado";
          clearTimeout(volver);
          volver = setTimeout(function () { boton.textContent = original; }, 2000);
        },
        function () {
          boton.textContent = "Selecciona y copia la dirección";
          clearTimeout(volver);
          volver = setTimeout(function () { boton.textContent = original; }, 3000);
        }
      );
    });
  });
})();

// Datos de la última versión de espacio, leídos de los mismos feeds que usa la app para actualizarse.
const latest = require("../espacio/updates/latest.json");
const beta = require("../espacio/updates/beta.json");

// El .deb y el .exe viven junto a los dmg en el pod; el feed firmado solo describe los dmg.
function descargas(feed) {
  const versiones = feed.dmg.url.slice(0, feed.dmg.url.lastIndexOf("/") + 1);
  return {
    version: feed.version,
    // `dmg` es el de Apple Silicon; el de Intel (`dmgX64`) llega con espacio 1.14.0.
    dmgUrl: feed.dmg.url,
    dmgIntelUrl: feed.dmgX64 ? feed.dmgX64.url : null,
    ubuntuUrl: `${versiones}espacio-${feed.version}-amd64.deb`,
    windowsUrl: `${versiones}espacio-${feed.version}-setup-x64.exe`,
  };
}

module.exports = {
  ...descargas(latest),
  // La beta solo se muestra si es más nueva que la estable (si no, ya se publicó).
  beta: beta.version === latest.version || beta.version.startsWith(`${latest.version}-`) ? null : descargas(beta),
};

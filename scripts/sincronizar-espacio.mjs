#!/usr/bin/env node
// Trae al sitio el lenguaje visual de espacio (ADR-034 en el repo de espacio):
//
//   packages/sdk/src/tema.css      → src/css/espacio/tema.css   (paleta y medidas)
//   apps/shell/src/icons/*.svg     → src/static/iconos/apps/    (ícono de cada app)
//   apps/shell/build/icon.png      → src/static/iconos/espacio-180.png (la «e», solo donde se habla de espacio)
//
// Los archivos copiados se commitean: el deploy no tiene el repo de espacio.
// Se corre a mano cuando espacio cambia su tema o sus íconos.
//
// Uso:  npm run sincronizar:espacio            (busca ../espacio)
//       ESPACIO_DIR=/ruta/a/espacio npm run sincronizar:espacio

import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const sitio = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const espacio = resolve(process.env.ESPACIO_DIR ?? join(sitio, "..", "espacio"));
if (!existsSync(join(espacio, "packages/sdk/src/tema.css"))) {
  console.error(`No encuentro el repo de espacio en ${espacio}. Usa ESPACIO_DIR=/ruta/a/espacio.`);
  process.exit(1);
}

const version = (() => {
  try {
    return execFileSync("git", ["-C", espacio, "describe", "--tags", "--always"], { encoding: "utf8" }).trim();
  } catch {
    return "sin versión";
  }
})();

// 1. Paleta y medidas, tal cual, con una cabecera que dice de dónde salen.
const tema = readFileSync(join(espacio, "packages/sdk/src/tema.css"), "utf8");
mkdirSync(join(sitio, "src/css/espacio"), { recursive: true });
writeFileSync(
  join(sitio, "src/css/espacio/tema.css"),
  `/* Copiado de espacio (${version}), packages/sdk/src/tema.css.\n * No se edita aquí: corre \`npm run sincronizar:espacio\`. */\n\n${tema}`
);
console.log("✓ src/css/espacio/tema.css");

// 2. Íconos de las apps.
const origenIconos = join(espacio, "apps/shell/src/icons");
const destinoIconos = join(sitio, "src/static/iconos/apps");
mkdirSync(destinoIconos, { recursive: true });
const svgs = readdirSync(origenIconos).filter((f) => f.endsWith(".svg"));
for (const svg of svgs) copyFileSync(join(origenIconos, svg), join(destinoIconos, svg));
console.log(`✓ src/static/iconos/apps/ (${svgs.length} íconos)`);

// 3. El ícono de espacio, en los tamaños que pide la web (sips viene con macOS).
const icono = join(espacio, "apps/shell/build/icon.png");
const destino = join(sitio, "src/static/iconos");
for (const lado of [180]) {
  const salida = join(destino, `espacio-${lado}.png`);
  execFileSync("sips", ["-z", String(lado), String(lado), icono, "--out", salida], { stdio: "ignore" });
  console.log(`✓ src/static/iconos/espacio-${lado}.png`);
}

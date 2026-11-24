module.exports = function (eleventyConfig) {
  // Versión del sitio en el enlace al CSS, para que cada release no quede tapada por la caché.
  eleventyConfig.addGlobalData("pkg", { version: require("./package.json").version });

  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
  eleventyConfig.addPassthroughCopy({ "src/static": "static" });
  // Feed de actualizaciones de espacio: latest.json + su firma, tal cual.
  eleventyConfig.addPassthroughCopy({ "src/espacio/updates": "espacio/updates" });

  // Lo que se publica es el build; con `npm run dev` se ve todo. Las partes marcadas
  // `pronto` (menús) o con `borrador: true` (páginas) solo salen en dev.
  eleventyConfig.addGlobalData("produccion", () => process.env.ELEVENTY_RUN_MODE === "build");

  // Entradas del blog con `borrador: true`: se ven con `npm run dev`, pero no
  // salen en `npm run build`, que es lo que se publica.
  eleventyConfig.addPreprocessor("borradores", "*", (data) => {
    if (data.borrador && process.env.ELEVENTY_RUN_MODE === "build") {
      return false;
    }
  });

  // `autor: alejandro-bustos-nunez` en una entrada -> su ficha en src/_data/socios.js.
  eleventyConfig.addFilter("socio", (slug, socios) => {
    const s = socios.find((x) => x.slug === slug);
    if (!s) throw new Error(`Socio desconocido: ${slug} (agrégalo en src/_data/socios.js)`);
    return { ...s, url: `/socios/${s.slug}/` };
  });

  // Para el feed: los enlaces relativos del contenido pasan a absolutos, porque
  // un lector de RSS no sabe de qué sitio vienen.
  eleventyConfig.addFilter("absolutos", (html, base) =>
    String(html).replace(/(href|src)="\/(?!\/)/g, `$1="${base}/`)
  );

  // "2026-09-20" (o un Date, como page.date) -> "20 de septiembre de 2026".
  // Mismo formato que src/js/status.js.
  eleventyConfig.addFilter("fechaIso", (fecha) => new Date(fecha).toISOString().slice(0, 10));
  eleventyConfig.addFilter("fechaLarga", (fecha) => {
    const iso = fecha instanceof Date ? fecha.toISOString().slice(0, 10) : fecha;
    const [y, m, d] = String(iso).split("-").map(Number);
    return new Intl.DateTimeFormat("es-CL", { dateStyle: "long", timeZone: "UTC" }).format(
      new Date(Date.UTC(y, m - 1, d))
    );
  });

  // Entradas del blog que se publican: el blog, las fichas de socios y el feed
  // usan esta lista, así que los borradores no aparecen ni en dev. Un borrador
  // se revisa abriendo su dirección con `npm run dev`.
  eleventyConfig.addCollection("publicadas", (collectionApi) =>
    collectionApi.getFilteredByTag("blog").filter((e) => !e.data.borrador)
  );

  eleventyConfig.addCollection("docsSections", (collectionApi) => {
    const docs = collectionApi
      .getFilteredByTag("docs")
      .sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0));

    const sections = [];
    for (const doc of docs) {
      const name = doc.data.section || "Documentación";
      let section = sections.find((s) => s.name === name);
      if (!section) {
        section = { name, items: [] };
        sections.push(section);
      }
      section.items.push({ title: doc.data.title, url: doc.url });
    }
    return sections;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    pathPrefix: "/",
  };
};

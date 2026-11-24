module.exports = {
  name: "Tecnocooperativa",
  legalName: "Cooperativa para el Espacio Público Digital",
  // Etapa previa a la constitución legal; se explica en /sobre/#estado.
  etapa: "en etapa de organización inicial",
  tagline: "Construyendo espacio público digital",
  url: "https://tecnocooperativa.cl",
  correo: "correo@tecnocooperativa.cl",
  github: "https://github.com/tecnocoopcl",
  // Los ítems con `pronto: true` solo se ven en dev: todavía no se publican.
  // Ordenada por lo que viene a hacer quien visita, no por cómo se organiza
  // la cooperativa por dentro. «Inicio» no va: el nombre ya lleva a la portada.
  nav: [
    { text: "Cómo funciona", url: "/como-funciona/" },
    { text: "Aplicaciones", url: "/aplicaciones/" },
    { text: "Plataformas", url: "/plataformas/" },
    {
      text: "Cooperativa",
      dropdown: [
        { text: "Sobre la cooperativa", url: "/sobre/" },
        { text: "Casos de uso", url: "/casos-de-uso/", pronto: true },
        { text: "Blog", url: "/blog/", pronto: true },
        { text: "Notas de versión", url: "/notas-de-version/" },
      ],
    },
    { text: "Documentación", url: "/docs/comenzando/entrar/" },
  ],
  // Siempre se renderiza al final del nav, ver partials/nav.njk.
  statusNavItem: { text: "Estado", url: "/estado/" },
  // El botón destacado al final del nav.
  ctaNavItem: { text: "Súmate", url: "/sumate/" },
  // El pie de página es el mapa del sitio.
  footer: [
    {
      titulo: "Usar",
      enlaces: [
        { text: "Empieza aquí", url: "/empieza/" },
        { text: "Cómo funciona", url: "/como-funciona/" },
        { text: "Aplicaciones", url: "/aplicaciones/" },
        { text: "Plataformas", url: "/plataformas/" },
        { text: "Documentación", url: "/docs/comenzando/entrar/" },
        { text: "Glosario", url: "/docs/glosario/" },
      ],
    },
    {
      titulo: "Cooperativa",
      enlaces: [
        { text: "Sobre la cooperativa", url: "/sobre/" },
        { text: "Casos de uso", url: "/casos-de-uso/", pronto: true },
        { text: "Blog", url: "/blog/", pronto: true },
        { text: "Notas de versión", url: "/notas-de-version/" },
        { text: "Súmate", url: "/sumate/" },
      ],
    },
    {
      titulo: "Transparencia",
      enlaces: [
        { text: "Estado", url: "/estado/" },
        { text: "Privacidad", url: "/privacidad/" },
        { text: "Accesibilidad", url: "/docs/accesibilidad/" },
        { text: "Código en GitHub", url: "https://github.com/tecnocoopcl" },
        { text: "Blog por RSS", url: "/feed.xml", pronto: true },
      ],
    },
  ],
};

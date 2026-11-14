module.exports = {
  name: "Tecnocooperativa",
  legalName: "Cooperativa para el Espacio Público Digital",
  // Etapa previa a la constitución legal; se explica en /sobre/#estado.
  etapa: "en etapa de organización inicial",
  tagline: "Construyendo espacio público digital",
  url: "https://tecnocooperativa.cl",
  nav: [
    { text: "Inicio", url: "/" },
    {
      text: "Servicios",
      dropdown: [
        { text: "WebID", url: "/webid/" },
        { text: "Pods", url: "/pods/" },
      ],
    },
    { text: "Plataformas", url: "/plataformas/" },
    { text: "Aplicaciones", url: "/aplicaciones/" },
    { text: "Sobre nosotros", url: "/sobre/" },
    { text: "Documentación", url: "/docs/comenzando/crear-pod/" },
  ],
  // Siempre se renderiza al final del nav, ver partials/nav.njk.
  statusNavItem: { text: "Estado", url: "/estado/" },
};

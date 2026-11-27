// Testimonios de la página Casos de uso (/casos-de-uso/) y de la portada.
// PROVISORIO: el de Alejandro es un primer borrador.
// Reemplázalo por sus palabras antes de publicar.
module.exports = [
  {
    nombre: "Alejandro",
    rol: "Socio",
    titulo: "Una estructura descentralizada para mis datos",
    cita: "Necesitaba dejar de depender de un solo proveedor para todo. Con la cooperativa levantamos una estructura descentralizada: mis datos viven en mi Pod, en un servidor que conocemos, y no en la nube de una empresa.",
    texto: [
      "De paso se me solucionaron los respaldos, que siempre dejaba para después: ahora hay una copia que no depende de que yo me acuerde.",
      "Y tuve dónde guardar los datos de algunas aplicaciones que usaba en esa época, sin montar un servidor distinto para cada una. Las aplicaciones cambian; el lugar donde guardo mis cosas, no.",
    ],
    usa: [
      { text: "Pods", url: "/pods/" },
      { text: "WebID", url: "/webid/" },
      { text: "espacio", url: "/aplicaciones/espacio/" },
    ],
  },
  {
    nombre: "Raúl",
    rol: "Socio, antropólogo",
    titulo: "Construir la herramienta también fue analizar",
    cita: "Tenía mi corpus etnográfico repartido entre un disco externo, Obsidian y distintos documentos. Con Trenzador pude reunir pequeñas unidades alrededor de una pregunta sin perder la relación con las fuentes originales.",
    texto: [
      "La primera unidad fue sobre unas semillas. Al poner juntos un diario de campo, una entrevista y un expediente administrativo, pude comparar las tres versiones de un mismo episodio y reconocer qué preguntas todavía necesitaban nuevas fuentes.",
      "La aplicación fue creciendo a partir de esos problemas reales. Programarla con ayuda de IA y revisarla con otro socio hizo que desarrollar la herramienta se volviera también una forma de comprometerme con el análisis.",
    ],
    usa: [
      { text: "Trenzador", url: "/aplicaciones/trenzador/" },
      { text: "espacio", url: "/aplicaciones/espacio/" },
      { text: "Pods", url: "/como-funciona/#pods" },
    ],
  },
];

// Testimonios de la página Casos de uso (/casos-de-uso/) y de la portada.
// PROVISORIOS: el de Raúl es de relleno y el de Alejandro un primer borrador.
// Reemplázalos por sus palabras antes de publicar.
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
    rol: "Socio, músico",
    titulo: "Mis canciones siguen siendo mías",
    cita: "Grabo en la casa, y antes subía todo a plataformas que se quedaban con mis canciones y decidían a quién le llegaban. Ahora las publico desde mi Pod y aparecen en Música.",
    texto: [
      "Armo cada disco con Estudio, en espacio: portada, orden de los temas y créditos. Cuando lo publico, cualquiera lo puede escuchar sin crearse una cuenta.",
      "Si mañana quiero sacar un disco, lo saco y no queda copiado en ningún otro lado. Eso, para alguien que vive de lo que hace, no es un detalle.",
    ],
    usa: [
      { text: "Música", url: "/plataformas/musica/" },
      { text: "Estudio", url: "/aplicaciones/estudio/" },
      { text: "Pods", url: "/pods/" },
    ],
  },
];

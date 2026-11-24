// Socios de la cooperativa (/socios/). Cada uno tiene su ficha en
// /socios/<slug>/, y las entradas del blog lo nombran con `autor: <slug>`.
//
// `sitio` (opcional) es su página personal: la ficha cierra invitando a
// visitarla, en primera persona como la `bio`.
// `bio` es una lista de párrafos que escribe cada socio, en primera persona; mientras esté vacía,
// la ficha muestra solo el nombre, el rol y lo que ha escrito en el blog.
module.exports = [
  {
    slug: "alejandro-bustos-nunez",
    nombre: "Alejandro Bustos Nuñez",
    rol: "Socio fundador",
    sitio: "https://aebn.cl",
    bio: [
      "Soy ingeniero en informática y estudiante de magíster. Crecí rodeado de tecnologías digitales y llevo más de 15 años desarrollando software industrial para distintos sectores de la economía. Fundé esta tecnocooperativa para construir un espacio digital público donde podamos relacionarnos de otra forma con la tecnología.",
      "La cooperativa también me permite asumir un rol transversal, que va desde la arquitectura de software y la configuración de servidores hasta la reflexión ética sobre lo que construimos. Allí donde la industria tiende a la especialización vertical, aquí cruzamos saberes y prácticas.",
    ],
  },
];

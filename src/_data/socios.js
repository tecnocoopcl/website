// Socios de la cooperativa (/socios/). Cada uno tiene su ficha en
// /socios/<slug>/, y las entradas del blog lo nombran con `autor: <slug>`.
//
// `sitio` (opcional) es su página personal: la ficha cierra invitando a
// visitarla, en primera persona como la `bio`.
// `bio` es una lista de párrafos que escribe cada socio, en primera persona; mientras esté vacía,
// la ficha muestra solo el nombre, el rol y lo que ha escrito en el blog.
const socios = [
  {
    slug: "alejandro-bustos-nunez",
    nombre: "Alejandro Bustos Nuñez",
    rol: "Socio",
    sitio: "https://aebn.cl",
    bio: [
      "Soy ingeniero en informática y estudiante de magíster. Crecí rodeado de tecnologías digitales y llevo más de 15 años desarrollando software industrial para distintos sectores de la economía. Impulsé esta tecnocooperativa para construir un espacio público digital donde podamos relacionarnos de otra forma con la tecnología.",
      "La cooperativa también me permite asumir un rol transversal, que va desde la arquitectura de software y la configuración de servidores hasta la reflexión ética sobre lo que construimos. Allí donde la industria tiende a la especialización vertical, aquí cruzamos saberes y prácticas.",
    ],
  },
  // Fichas en blanco: cada socio escribe su `bio` en primera persona
  // y, si quiere, agrega `sitio`. El `rol` es «Socio» o «Socia».
  {
    slug: "raul-zuleta",
    nombre: "Raúl Zuleta",
    rol: "Socio",
    sitio: "https://razc.cl",
    bio: [
      "Soy investigador y educador. Mi trayectoria articula psicología, sociología y antropología para estudiar cómo experiencias, organismos y ambientes son traducidos en categorías, datos, instrumentos y formas de acción. Actualmente desarrollo una etnografía doctoral sobre producción de conocimiento en laboratorios de biotecnología vegetal en Chile.",
      "Mi trabajo también cruza pedagogía y experimentación material mediante guías, dispositivos, datos y software. En la cooperativa convierto problemas concretos de investigación en herramientas abiertas que puedo construir y revisar junto con otros socios. Me interesa que quienes usan una tecnología también puedan intervenirla, adaptarla y decidir colectivamente qué debería hacer.",
    ],
  },
  { slug: "daphne-vial", nombre: "Daphne Vial", rol: "Socia", bio: [] },
  { slug: "gonzalo-pincheira", nombre: "Gonzalo Pincheira", rol: "Socio", bio: [] },
  {
    slug: "tomas-reyes-ramirez",
    nombre: "Tomás Reyes Ramírez",
    rol: "Socio",
    bio: [
      "Estoy interesado en formar parte de iniciativas que promuevan la colaboración, la autonomía tecnológica y el desarrollo colectivo. Me motiva la posibilidad de aportar mis conocimientos y experiencia en tecnología a un proyecto que busca construir herramientas libres, abiertas y accesibles, donde el conocimiento, las decisiones y los beneficios se compartan. Creo en el valor de la cooperación como una forma de construir alternativas más justas y sostenibles.",
    ],
  },
];

// Orden alfabético por nombre.
module.exports = socios.sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));

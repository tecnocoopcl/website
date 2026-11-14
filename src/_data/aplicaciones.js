// Todas las aplicaciones de la cooperativa, para /aplicaciones/ y /espacio/.
// Las nativas salen de LOCAL_APPS (apps/shell/src/App.tsx) del repo de espacio,
// y las del catálogo de packages/catalog/apps/: esas se usan en el navegador y
// también dentro de espacio, así que son nativas y web a la vez.
//
// Cada app tiene su landing en /aplicaciones/<id>/ y su guía en
// /docs/aplicaciones/<id>/. `temprana` marca las que están en etapa temprana.
const apps = [
  { id: "archivos", name: "Archivos", tipos: ["nativa", "web"], url: "https://archivos.aebn.cl", description: "Navega, sube y descarga los archivos y carpetas de tu Pod, y compártelos con otras personas." },
  { id: "escribir", name: "Escribir", tipos: ["nativa"], description: "Procesador de texto en Markdown. Tus documentos quedan en la carpeta Documentos de tu Pod." },
  { id: "estudio", name: "Estudio", tipos: ["nativa"], description: "Publica desde tu Pod tu música, que se escucha en musica.tecnocooperativa.cl, y tus charlas o relatos para la Audioteca." },
  { id: "arbol", name: "Árbol", tipos: ["nativa"], temprana: true, description: "Tus enlaces en una página pública, servida en arbol.aebn.cl." },
  { id: "calendario", name: "Calendario", tipos: ["nativa"], temprana: true, description: "Tus eventos guardados en tu Pod, con vistas de mes, semana y día." },
  { id: "encuestador", name: "Encuestador", tipos: ["nativa"], temprana: true, description: "Crea encuestas, compártelas con un enlace público y revisa las respuestas, que quedan en tu Pod." },
  { id: "hojas", name: "Hojas", tipos: ["nativa"], temprana: true, description: "Tablas enlazadas por fórmulas, guardadas junto a tus documentos." },
  { id: "por-hacer", name: "Por Hacer", tipos: ["nativa", "web"], url: "https://por-hacer.aebn.cl", description: "Lista de tareas que se sincroniza con tu Pod." },
  { id: "notas", name: "Notas", tipos: ["nativa", "web"], url: "https://notas.aebn.cl", description: "Notas en Markdown enlazadas entre sí con [[corchetes dobles]]." },
  { id: "musica", name: "Música", tipos: ["nativa", "web"], url: "https://musica.tecnocooperativa.cl", description: "Escucha la música de la cooperativa; tus playlists y artistas favoritos quedan en tu Pod." },
  { id: "archivador", name: "Archivador", tipos: ["nativa", "web"], temprana: true, url: "https://archivador.aebn.cl", description: "Referencias y PDF al estilo de Zotero, con destacados y notas." },
  { id: "audioteca", name: "Audioteca", tipos: ["web"], url: "https://audioteca.aebn.cl", description: "Charlas, crónicas, clases y relatos de los socios, ordenados por temática y con feed para tu app de podcasts." },
]
  // El ícono es el mismo SVG del launcher de espacio (npm run sincronizar:espacio).
  .map((app) => ({
    ...app,
    pagina: `/aplicaciones/${app.id}/`,
    docs: `/docs/aplicaciones/${app.id}/`,
    icono: `/static/iconos/apps/${app.id}.svg`,
  }))
  .sort((a, b) => a.name.localeCompare(b.name, "es"));

module.exports = {
  apps,
  porId: Object.fromEntries(apps.map((app) => [app.id, app])),
  enEspacio: apps.filter((app) => app.tipos.includes("nativa")),
};

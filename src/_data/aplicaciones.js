// Todas las aplicaciones y plataformas de la cooperativa, para /aplicaciones/,
// /plataformas/ y /aplicaciones/espacio/.
// Las nativas salen de LOCAL_APPS (apps/shell/src/App.tsx) del repo de espacio,
// y las del catálogo de packages/catalog/apps/: esas se usan en el navegador y
// también dentro de espacio, así que son nativas y web a la vez.
//
// Cada app tiene su landing en /aplicaciones/<id>/ y su guía en
// /docs/aplicaciones/<id>/. `temprana` marca las que están en etapa temprana.
//
// `plataforma` marca las que son más que una aplicación: un sitio público con
// lo que publican muchos socios (Música, Audioteca, Academia). Van en
// /plataformas/<id>/ y /docs/plataformas/<id>/, no en la lista de
// /aplicaciones/; Música sigue en la de espacio porque también se abre dentro
// de él. `sinGuia` marca las que todavía no tienen guía en /docs/.
// `beta` marca las que por ahora solo vienen en la versión beta de espacio.
const apps = [
  { id: "archivos", name: "Archivos", tipos: ["nativa", "web"], url: "https://archivos.tecnocooperativa.cl", description: "Navega, sube y descarga los archivos y carpetas de tu Pod, y compártelos con otras personas." },
  { id: "escribir", name: "Escribir", tipos: ["nativa"], description: "Procesador de texto en Markdown. Tus documentos quedan en la carpeta Documentos de tu Pod." },
  { id: "estudio", name: "Estudio", tipos: ["nativa"], description: "Publica desde tu Pod tu música, que se escucha en musica.tecnocooperativa.cl, y tus charlas o relatos para la Audioteca." },
  { id: "arbol", name: "Árbol", tipos: ["nativa"], temprana: true, description: "Tus enlaces en una página pública, servida en arbol.tecnocooperativa.cl." },
  { id: "calendario", name: "Calendario", tipos: ["nativa"], temprana: true, description: "Tus eventos guardados en tu Pod, con vistas de mes, semana y día." },
  { id: "encuestador", name: "Encuestador", tipos: ["nativa"], temprana: true, description: "Crea encuestas, compártelas con un enlace público y revisa las respuestas, que quedan en tu Pod." },
  { id: "hojas", name: "Hojas", tipos: ["nativa"], temprana: true, description: "Tablas enlazadas por fórmulas, guardadas junto a tus documentos." },
  { id: "por-hacer", name: "Por Hacer", tipos: ["nativa", "web"], url: "https://por-hacer.tecnocooperativa.cl", description: "Lista de tareas que se sincroniza con tu Pod." },
  { id: "notas", name: "Notas", tipos: ["nativa", "web"], url: "https://notas.tecnocooperativa.cl", description: "Notas en Markdown enlazadas entre sí con [[corchetes dobles]]." },
  { id: "musica", name: "Música", plataforma: true, tipos: ["nativa", "web"], url: "https://musica.tecnocooperativa.cl", description: "Escucha la música de la cooperativa; tus playlists y artistas favoritos quedan en tu Pod." },
  { id: "archivador", name: "Archivador", tipos: ["nativa", "web"], temprana: true, url: "https://archivador.tecnocooperativa.cl", description: "Referencias y PDF al estilo de Zotero, con destacados y notas." },
  { id: "academia", name: "Academia", plataforma: true, sinGuia: true, tipos: ["web"], temprana: true, url: "https://academia.tecnocooperativa.cl", description: "Los cursos de los socios, públicos y gratuitos, cada uno en el formato que su profe eligió. Las clases con el profe se piden aparte." },
  { id: "correo", name: "Correo", tipos: ["nativa"], temprana: true, beta: true, description: "Recibe en tu Pod el correo que llega a tu dirección de la cooperativa." },
  { id: "diagramador", name: "Diagramador", tipos: ["nativa"], temprana: true, description: "Ordena ideas, actores y procesos en un lienzo con formas y conexiones." },
  { id: "ia", name: "IA", tipos: ["nativa"], temprana: true, beta: true, description: "Conversa con un modelo de lenguaje que corre en un computador de la cooperativa, no en la nube de una empresa." },
  { id: "mensajes", name: "Mensajes", tipos: ["nativa"], temprana: true, beta: true, description: "Chats con otros socios, guardados en el Pod de quien crea el chat." },
  { id: "navegador", name: "Navegador", tipos: ["nativa"], beta: true, description: "Navega la web dentro de espacio, sin anuncios ni rastreadores. Tu historial no sale de tu computador." },
  { id: "presentaciones", name: "Presentaciones", tipos: ["nativa"], temprana: true, beta: true, description: "Diapositivas con plantillas y un modo presentador con notas y cronómetro." },
  { id: "trenzador", name: "Trenzador", tipos: ["nativa"], temprana: true, description: "Organiza, lee y codifica corpus de investigación cualitativa." },
  { id: "audioteca", name: "Audioteca", plataforma: true, tipos: ["web"], url: "https://audioteca.tecnocooperativa.cl", description: "Charlas, crónicas, clases y relatos de los socios, ordenados por temática y con feed para tu app de podcasts." },
]
  // El ícono es el mismo SVG del launcher de espacio (npm run sincronizar:espacio).
  .map((app) => ({
    ...app,
    pagina: `/${app.plataforma ? "plataformas" : "aplicaciones"}/${app.id}/`,
    docs: app.sinGuia ? null : `/docs/${app.plataforma ? "plataformas" : "aplicaciones"}/${app.id}/`,
    icono: `/static/iconos/apps/${app.id}.svg`,
  }))
  .sort((a, b) => a.name.localeCompare(b.name, "es"));

module.exports = {
  apps: apps.filter((app) => !app.plataforma),
  plataformas: apps.filter((app) => app.plataforma),
  porId: Object.fromEntries(apps.map((app) => [app.id, app])),
  enEspacio: apps.filter((app) => app.tipos.includes("nativa")),
};

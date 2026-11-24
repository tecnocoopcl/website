// Notas de versión de espacio (/notas-de-version/): los anuncios de cada
// versión, del más nuevo al más antiguo. Antes se mandaban por WhatsApp.
//
// Para sumar una versión, agrégala arriba de su serie con `version`, `fecha`
// (AAAA-MM-DD) y sus `cambios`. Cada cambio es `c(app, texto)`; `app` puede ir
// vacío. Con `ojo = true` se marca como algo que conviene leer antes de actualizar.
//
// Las fechas salen del CHANGELOG de espacio y de las publicaciones del feed.
//
// Los reportes de en qué está la cooperativa no van aquí: son entradas del
// blog con `categoria: Reporte`.
const c = (app, texto, ojo = false) => ({ app, texto, ojo });

module.exports = [
  {
    id: "3",
    titulo: "espacio, versión 3",
    abierta: false,
    intro:
      "Estamos trabajando en la versión 3 de espacio. Para llegar a una versión estable, publicamos betas que puedes probar. Si prefieres no arriesgar, la versión estable sigue siendo la 2.",
    versiones: [
      {
        version: "3.0.0-beta.10",
        fecha: "2026-11-23",
        cambios: [
          c("Presentaciones", "Al presentar, el puntero aparece al mover el mouse y se esconde tras dos segundos quieto, también en pantalla completa y en la segunda pantalla."),
        ],
      },
      {
        version: "3.0.0-beta.9",
        fecha: "2026-11-23",
        cambios: [
          c("Presentaciones", "App nueva para armar diapositivas con plantillas (portada, viñetas, imagen y sección) y notas para quien presenta. Con un proyector o una segunda pantalla, ahí se ve la diapositiva, y en espacio las notas, la siguiente y un cronómetro."),
          c("Presentaciones", "Se guardan solas en el equipo y van al Pod con «Guardar en el Pod» o ⌘S. Si el Pod se cae, se siguen abriendo, editando y presentando."),
          c("IA", "App nueva que conversa con el modelo de lenguaje del PC de la cooperativa. Tiene un chat y tareas listas: resumir, reescribir más claro, lluvia de ideas y traducir al inglés. Si el PC está durmiendo, avisa mientras despierta. Las conversaciones no se guardan."),
          c("Archivos", "Muestra la hora de la última modificación, no solo el día."),
          c("Inicio", "El estado de la cooperativa muestra las máquinas (en línea, durmiendo o sin respuesta), cuántos servicios corren y la energía que miden los enchufes."),
          c("Música", "Se abre en musica.tecnocooperativa.cl. Las direcciones públicas de cada proyecto cambian de dominio.", true),
        ],
      },
      {
        version: "3.0.0-beta.8",
        fecha: "2026-11-22",
        cambios: [
          c("", "La API de la cooperativa pasa a api.tecnocooperativa.cl (estado de la cooperativa, Estudio, Árbol y Encuestador)."),
        ],
      },
      {
        version: "3.0.0-beta.7",
        fecha: "2026-11-13",
        cambios: [
          c("Audioteca", "Se abre en audioteca.tecnocooperativa.cl. La posición y las piezas marcadas como escuchadas empiezan de cero.", true),
        ],
      },
      {
        version: "3.0.0-beta.6",
        fecha: "2026-11-13",
        cambios: [
          c("Estudio", "Las piezas de una serie se numeran solas y se reordenan con ↑↓, y la audioteca las muestra en ese orden."),
          c("Estudio", "Enlaza la audioteca en su dominio nuevo."),
        ],
      },
      {
        version: "3.0.0-beta.5",
        fecha: "2026-11-13",
        cambios: [
          c("", "El parlante de la pestaña marca solo la app que suena y ya no parpadea, lo que cargaba el procesador."),
          c("Estudio", "El formulario de una pieza ya no borra lo que escribes cuando termina de subir el audio, y avisa de cambios sin guardar solo cuando los hay."),
          c("", "Las apps pueden descargar archivos, por ejemplo «Descargar JSON»."),
        ],
      },
      {
        version: "3.0.0-beta.4",
        fecha: "2026-11-12",
        cambios: [c("", "Cambia el sitio donde espacio busca las actualizaciones, ahora tecnocooperativa.cl.")],
      },
      {
        version: "3.0.0-beta.3",
        fecha: "2026-11-12",
        cambios: [c("Estudio", "Audioteca por proyectos, fecha de estreno, audios grandes y etiquetas (igual que en 2.9).")],
      },
      {
        version: "3.0.0-beta.2",
        fecha: "2026-11-12",
        cambios: [c("Cuenta", "Muestra el consumo eléctrico del mes de la cooperativa, día a día (igual que en 2.8).")],
      },
      {
        version: "3.0.0-beta.1",
        fecha: "2026-11-10",
        cambios: [
          c("Navegador", "Bloqueo de anuncios y rastreadores de terceros, activado por defecto. El escudo de la barra muestra cuántos se cortaron, y permite apagarlo o no bloquear en un sitio."),
          c("Navegador", "También ataja los anuncios de YouTube, quitándolos del reproductor y saltando los que se cuelen."),
          c("Navegador", "La barra de dirección sugiere páginas de tus favoritos y de tu historial mientras escribes (↑↓ para elegir, Intro para abrir)."),
          c("Navegador", "Las páginas ya no pueden acceder a tu pod, tus mensajes ni los avisos de espacio."),
          c("", "«Reducir movimiento» en Configuración › General y en el centro de control: detiene el fondo animado y las animaciones. Sigue el ajuste del sistema mientras no lo cambies."),
          c("Inicio", "«Lo que has hecho» ahora mira también los últimos 3 días, 7 días o el último mes. Cada app declara qué cuenta como «hecho»."),
          c("Estudio", "Escuchas de lo publicado en cada proyecto, obra, pista, serie y pieza."),
          c("", "Los colores de Inicio pasan a todas las apps, y siguen el tema que elijas."),
          c("", "Navegador, Calendario, Archivos y Escribir comparten ahora la misma estructura visual."),
          c("Mensajes", "Por ahora solo entre socios de la cooperativa."),
          c("", "Mejoras de accesibilidad para lectores de pantalla y teclado."),
          c("", "Mensajes y el Navegador guardan sus cambios con más cuidado, sin pérdidas ni lentitud."),
          c("", "Se quita el dock. Las apps se abren desde «Capacidades» en Inicio, con el buscador (⌘P) o desde las pestañas de la barra.", true),
        ],
      },
    ],
  },
  {
    id: "2",
    titulo: "espacio, versión 2",
    abierta: false,
    versiones: [
      {
        version: "2.10",
        fecha: "2026-11-22",
        cambios: [
          c("Trenzador", "Llega a la versión estable, con fuentes vivas, red del corpus, codificación sobre el documento, libro de códigos y tramas para cristalizar hallazgos."),
          c("Trenzador", "Guarda con ⌘S, exporta cada fuente a tu computador o al Pod, y la abre directo en Archivos."),
          c("Trenzador", "«Cabos sueltos» para anotar los próximos pasos de cada trama, como búsquedas, contactos o fuentes por revisar."),
          c("Trenzador", "Tutorial «De un tema a una trama analítica», con el flujo completo probado en corpus reales."),
          c("", "La API de la cooperativa pasa a api.tecnocooperativa.cl."),
        ],
      },
      {
        version: "2.9.2",
        fecha: "2026-11-13",
        cambios: [c("Estudio", "Enlaza la audioteca en audioteca.tecnocooperativa.cl.")],
      },
      {
        version: "2.9.1",
        fecha: "2026-11-12",
        cambios: [c("", "Cambia el sitio donde espacio busca las actualizaciones: ahora es tecnocooperativa.cl.")],
      },
      {
        version: "2.9",
        fecha: "2026-11-12",
        cambios: [
          c("Estudio", "Escuchas de lo que publicas (total, últimos 30 y 7 días y un gráfico por día), contadas de forma anónima."),
          c("Estudio", "La audioteca se organiza en proyectos (tú, un programa, una radio) que agrupan series y piezas."),
          c("Estudio", "Fecha de estreno, para que la pieza se publique ese día."),
          c("Estudio", "Los audios grandes se pueden comprimir, o puedes usar uno que ya subiste con Archivos."),
          c("Estudio", "Las piezas se ordenan con etiquetas, y te sugiere las que ya usas."),
          c("Estudio", "Una subida cortada a medias ya no se pierde ni queda como terminada."),
        ],
      },
      {
        version: "2.8",
        fecha: "2026-11-12",
        cambios: [c("Cuenta", "Muestra el consumo eléctrico del mes de la cooperativa, día a día.")],
      },
      {
        version: "2.6",
        fecha: "2026-11-09",
        cambios: [
          c("Trenzador", "Importa DOCX y PDF con texto. Si una fuente cambia, las citas se reubican solas y las dudosas quedan para que las revises."),
          c("Trenzador", "Búsqueda dentro de la fuente (⌘F) y tutoriales para partir."),
        ],
      },
      {
        version: "2.5",
        fecha: "2026-11-08",
        cambios: [
          c("Trenzador", "App nueva, para trabajar corpus etnográficos. Reúnes fuentes en un «maletín» portátil, las relacionas en una red, las lees y las codificas con un libro de códigos."),
        ],
      },
      {
        version: "2.4",
        fecha: "2026-11-04",
        cambios: [
          c("Inicio", "Nuevo: un saludo, tus documentos recientes, cuánto ocupas de tu plan y el estado de la cooperativa."),
          c("", "Tema claro, oscuro o el del sistema, y alto contraste, desde el nuevo centro de control en la barra de arriba (o con ⌘,)."),
        ],
      },
      {
        version: "2.3",
        fecha: "2026-11-04",
        cambios: [c("Diagramador", "Convierte un libro de Hojas en un diagrama de sus tablas, o una nota de Escribir en un mapa de sus enlaces.")],
      },
      {
        version: "2.2",
        fecha: "2026-11-01",
        cambios: [
          c("", "El dock puede ir abajo o a un costado, y sus iconos se ordenan arrastrándolos."),
          c("", "Sin sesión, el menú de usuario ofrece «Iniciar sesión» directamente."),
          c("Diagramador", "Paleta BPMN básica."),
        ],
      },
      {
        version: "2.1",
        fecha: "2026-11-01",
        cambios: [
          c("Diagramador", "Notas adhesivas y más formas (rombo, hexágono, estrella, flecha, globo de diálogo y otras)."),
          c("Diagramador", "Doble clic para escribir en una caja, y conexiones arrastrando los puntos amarillos."),
          c("Diagramador", "Ajuste a la grilla, y redimensionar desde cualquier borde."),
        ],
      },
      {
        version: "2.0",
        fecha: "2026-11-01",
        cambios: [
          c("Diagramador", "App nueva: un lienzo para ordenar ideas con texto, formas y conexiones."),
          c("Escribir", "Varios documentos abiertos a la vez, cada uno en su pestaña. Al volver, quedan como los dejaste."),
          c("Escribir", "Resaltar texto con ⇧⌘H."),
          c("Escribir", "Citar desde Archivador o Zotero, con bibliografía automática en APA, Chicago, MLA o Harvard."),
          c("Hojas", "Tablero, que resume una tabla en un gráfico de barras o de línea."),
          c("", "Buscador de apps con ⌘P. Ojo: en Escribir, imprimir pasa a ⇧⌘P."),
          c("", "El dock muestra todas tus apps y se puede ocultar."),
          c("Hojas", "Los libros guardados desde esta versión no se abren en versiones anteriores, así que actualiza en todos tus equipos.", true),
        ],
      },
    ],
  },
  {
    id: "1",
    titulo: "espacio, versión 1",
    abierta: false,
    versiones: [
      {
        version: "1.16",
        fecha: "2026-10-27",
        cambios: [
          c("Escribir", "Notas al pie con el botón «Nota¹», que se numeran solas."),
          c("Escribir", "Exportar a Word (.docx), con notas al pie reales de Word."),
          c("Escribir", "Abrir otro documento con ⌘O, y el documento ocupa todo el ancho."),
          c("Archivos", "Crear un archivo vacío con el nombre que quieras."),
        ],
      },
      {
        version: "1.15",
        fecha: "2026-10-22",
        cambios: [
          c("Archivos", "El visor abre audio, video, fotos RAW, HEIC, TIFF, PDF y documentos de oficina. Con ↑↓ recorres la carpeta, y «Ampliar» lo lleva a todo el ancho."),
          c("Hojas", "Puede tomar datos CSV o JSON de cualquier parte de tu pod."),
          c("", "Mejor contraste en ambos temas, y lo que tiene el foco del teclado siempre se ve."),
        ],
      },
      {
        version: "1.14",
        fecha: "2026-10-22",
        resumen: "Mac Intel y un icono nuevo, a solicitud de Tomi.",
        cambios: [
          c("", "espacio ya funciona en Mac con procesador Intel."),
          c("", "Icono nuevo: la «e» sobre fondo amarillo."),
        ],
      },
      {
        version: "1.13.2",
        fecha: "2026-10-22",
        cambios: [
          c("", "Con espacio abierto mucho rato, o después de dormir el computador, a veces fallaba al guardar o subir archivos. Ahora la sesión se renueva sola."),
        ],
      },
      {
        version: "1.13",
        fecha: "2026-10-20",
        cambios: [
          c("Encuestador", "App nueva. Crea encuestas con preguntas de texto, números, fechas y alternativas."),
          c("Encuestador", "Publícalas con un enlace y mira las respuestas desde espacio en formato CSV."),
          c("Encuestador", "Todo queda en tu pod, y quien responde no puede ver las respuestas de otros."),
          c("Encuestador", "Puedes despublicar una encuesta, o eliminarla completamente."),
        ],
      },
      {
        version: "1.12",
        fecha: "2026-10-20",
        resumen: "Escribir, más simple.",
        cambios: [
          c("Escribir", "Ahora tiene una sola vista, la hoja con formato. Ya no hay que elegir entre Escribir, Dividido y Leer, ni lidiar con Markdown."),
          c("Escribir", "Guarda automáticamente mientras escribes. Si algo falla, lo escrito no se pierde."),
          c("Escribir", "Nuevo interruptor para elegir letra con serife o sin serife."),
          c("Escribir", "Para renombrar un documento, haz clic en su título."),
        ],
      },
      {
        version: "1.11",
        fecha: "2026-10-20",
        resumen: "Llega la Audioteca, una idea original de Raúl Zuleta.",
        cambios: [
          c(
            "Audioteca",
            "Un lugar para publicar audios hechos por nosotros: charlas, crónicas, clases, relatos, lo que quieran compartir, para escuchar en la micro, en el camino o en casa. Es una idea inicial, así que va a tener actualizaciones pronto."
          ),
          c("Audioteca", "Para escuchar: audioteca.tecnocooperativa.cl."),
          c("Audioteca", "Para publicar: abre la aplicación Estudio en espacio, entra a la sección Audioteca, crea una serie y sube tus audios."),
        ],
      },
      {
        version: "1.3",
        fecha: "2026-10-03",
        resumen:
          "Lo estable de esta versión son las aplicaciones para escuchar música y para subir música. También llegan aplicaciones que todavía están en construcción: Calendario, Escribir, Hojas y Árbol, que buscan re-arquitectar aplicativos de uso general hoy en día.",
        cambios: [],
      },
    ],
  },
];

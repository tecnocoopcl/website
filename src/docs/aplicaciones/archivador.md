---
title: "Archivador"
description: "Cómo usar Archivador (archivador.tecnocooperativa.cl): tus referencias y PDF al estilo de Zotero, con destacados, notas y citas, guardados en tu Pod."
order: 5
---

# Archivador

**Archivador** guarda tus referencias bibliográficas y sus PDF, al estilo de Zotero, en tu [Pod](/docs/glosario/#pod). Puedes abrirlo en el navegador, en [archivador.tecnocooperativa.cl](https://archivador.tecnocooperativa.cl), o dentro de [espacio](/aplicaciones/espacio/), desde el catálogo de aplicaciones.

<div class="note">
  <p><strong>Archivador está en etapa temprana.</strong> Hoy tiene la biblioteca y el lector de PDF con anotaciones. Vienen las colecciones, importar y exportar (BibTeX, RIS), buscar por DOI o ISBN y los estilos de cita.</p>
</div>

## Conectar

- **En el navegador**, haz clic en **Conectar con WebID**, escribe tu WebID o tu proveedor de identidad e inicia sesión con tu cuenta de la cooperativa.
- **Dentro de espacio** no tienes que conectar nada: usa la sesión de espacio.

## Tu biblioteca

En **Mi biblioteca** ves **Todas las referencias**. Busca por título, autor, año o DOI.

Para agregar una, haz clic en **Nueva referencia** y completa sus datos: tipo (artículo de revista, libro, capítulo, tesis, informe, ponencia, página web…), título, autores (uno por línea, como `Apellido, Nombre`), año, publicación, editorial y DOI.

## Tus PDF

Los PDF van en `Documentos/archivador/` de tu Pod. Súbelos ahí desde [Archivos](/docs/aplicaciones/archivos/), o sincroniza esa carpeta con una de tu computador.

En **PDF sin referencia** aparecen los que todavía no tienen ficha, para que la crees desde ahí.

## Leer y anotar

Para abrir el PDF de una referencia, usa **Abrir PDF** en su detalle o haz doble clic en la lista. En el lector puedes:

- **Destacar texto** en ocho colores, con la herramienta o desde la burbuja que aparece al seleccionar;
- **Agregar nota** sobre la página;
- **Seleccionar zona** para guardar una figura o una tabla como imagen.

En el panel **Anotaciones** están todas, en orden de lectura. Puedes buscar en ellas, comentarlas, cambiarles el color o borrarlas, y con un clic vuelves a su lugar en el PDF.

## Citar

- **Copiar cita** copia lo destacado con autor, año y página, por ejemplo: “…” (Ostrom, 1990, p. 12).
- **Copiar imagen** copia una zona.
- **Copiar todas** copia todas las anotaciones con su cita, en Markdown, para pegarlas en [Notas](/docs/aplicaciones/notas/) o [Escribir](/docs/aplicaciones/escribir/).

## ¿Dónde quedan tus datos?

- Los PDF, en `Documentos/archivador/`: los ves, mueves y compartes desde Archivos.
- Las referencias y anotaciones, en `Aplicaciones/archivador/data/`, en CSL-JSON, el formato que entienden Zotero, Pandoc y Mendeley.

Dentro de espacio, por ahora no se pueden abrir PDF de más de 8 MB. Esos ábrelos desde Archivos.

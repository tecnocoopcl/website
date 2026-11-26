---
title: "Encuestador"
description: "Cómo usar Encuestador en espacio: crear una encuesta para los socios, publicarla con un enlace, revisar las respuestas y exportarlas a CSV."
order: 27
---

# Encuestador

**Encuestador** es la aplicación de espacio para crear encuestas para los socios de la cooperativa y reunir las respuestas en tu [Pod](/docs/glosario/#pod). Viene instalada con espacio.

<div class="note">
  <p><strong>Encuestador está en etapa temprana.</strong> Por ahora las encuestas son solo para socios: para responder hay que iniciar sesión con la cuenta de la cooperativa. Todavía no hay control de duplicados, así que una misma persona puede responder más de una vez.</p>
</div>

Para usarla necesitas haber [conectado espacio con tu WebID](/docs/comenzando/conectar-espacio/). Quien responde tus encuestas no necesita espacio, pero sí su cuenta de la cooperativa.

## 1. Crea una encuesta

1. Haz clic en **+ Nueva encuesta**.
2. Escribe el **Título** y, si quieres, una **Descripción** que explique de qué se trata.
3. Elige **quién puede responder** (lo ves más abajo).
4. Arma las preguntas.
5. Haz clic en **Guardar borrador** para seguir después, o en **Publicar** si ya está lista.

Antes de publicar, Encuestador revisa que no falte nada: si hay campos incompletos, te avisa con **Faltan datos** y los marca.

### Importar una encuesta desde un archivo

Si ya tienes la encuesta escrita como JSON, usa **Importar JSON**. Se abre como borrador para que la revises antes de guardarla.

## ¿Quién puede responder?

Para responder siempre hay que iniciar sesión con la cuenta de la cooperativa. Puedes elegir entre:

- **Cualquier socio de la cooperativa**.
- **Solo socios que indico**: escribe el WebID de cada persona, uno por línea.

Marca **Respuestas anónimas** si no quieres saber quién respondió. Igual se pide iniciar sesión, pero la respuesta no guarda quién la envió. Si no la marcas, en los resultados verás quién respondió cada una.

## 2. Arma las preguntas

Cada pregunta tiene:

- **Pregunta**: el texto que verá quien responde.
- **Tipo**: cómo se responde. Puede ser **Texto breve**, **Texto largo**, **Número**, **Fecha**, **Una alternativa** o **Varias alternativas**.
- **Ayuda opcional**: una aclaración que aparece bajo la pregunta.
- **Obligatoria**: márcala si no se puede enviar la encuesta sin responderla.

En las preguntas de alternativas, escribe cada opción y suma más con **+ Alternativa**. Necesitan al menos dos.

Agrega preguntas con **+ Pregunta** y quita las que sobren con **Eliminar**. Una encuesta tiene que tener al menos una pregunta.

### Secciones

Con **+ Sección** agrupas las preguntas de un mismo tema bajo un título, con un texto opcional que explica de qué se trata. Las secciones se pueden subir, bajar y eliminar.

Usa **Vista previa** para ver la encuesta como la verá quien responde.

## 3. Publica y comparte el enlace

Al hacer clic en **Publicar**, la encuesta queda disponible en [encuestador.tecnocooperativa.cl](https://encuestador.tecnocooperativa.cl/). En la lista de encuestas aparece marcada como **Publicada**, con el enlace **Abrir formulario público ↗**: ábrelo y copia la dirección para compartirla.

Quien abre el enlace inicia sesión con su cuenta de la cooperativa, responde y hace clic en **Enviar respuesta**. Antes de guardarla, la cooperativa revisa que cada respuesta corresponda al tipo de pregunta.

### Si cambias una encuesta publicada

Puedes editarla cuando quieras. Al usar **Guardar borrador** sobre una encuesta publicada, aparece **Cambios sin publicar**: quien responda sigue viendo la versión anterior hasta que vuelvas a hacer clic en **Publicar**.

## 4. Revisa los resultados

En la lista, haz clic en **Resultados** en la encuesta que quieras. Ves cuántas respuestas hay y una tabla con una fila por respuesta, con su fecha, lo que respondió cada persona y, si la encuesta no es anónima, quién respondió.

Para trabajar los datos en una planilla, usa **Exportar CSV**. El archivo se abre en Excel, LibreOffice o Google Sheets.

## Despublicar y eliminar

- **Despublicar** cierra el formulario: nadie más puede verlo ni responderlo. La encuesta vuelve a ser **Borrador** y las respuestas que ya llegaron siguen en tu Pod. Puedes publicarla de nuevo cuando quieras.
- **Eliminar encuesta** la despublica y borra todas sus respuestas. Encuestador te pide confirmar, porque no se puede deshacer.

## ¿Dónde quedan tus encuestas?

En tu Pod, en `Aplicaciones/encuestador/`:

- `data/` guarda las encuestas publicadas, con lectura pública para que el formulario las pueda mostrar;
- `respuestas/` guarda una carpeta por encuesta, con un archivo por respuesta. Solo la aplicación del Encuestador de la cooperativa puede agregar respuestas ahí, y solo tú puedes leerlas;
- `encuestador.json` guarda tus borradores, y solo tú lo ves.

Las respuestas pasan por un servicio de la cooperativa que verifica la sesión de quien responde, revisa la respuesta y la deja en tu Pod, sin guardar una copia. Ese servicio tiene su propia identidad, certificada por la cooperativa, y solo puede agregar respuestas: no puede leerlas ni borrarlas.

Si publicaste una encuesta antes del 25 de noviembre de 2026, vuelve a publicarla para que su carpeta de respuestas quede cerrada a todos salvo al Encuestador.

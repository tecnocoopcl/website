---
title: "Encuestador"
description: "Cómo usar Encuestador en espacio: crear una encuesta, publicarla con un enlace, revisar las respuestas y exportarlas a CSV."
order: 27
---

# Encuestador

**Encuestador** es la aplicación de espacio para crear encuestas y reunir las respuestas en tu [Pod](/docs/glosario/#pod). Viene instalada con espacio.

<div class="note">
  <p><strong>Encuestador está en etapa temprana.</strong> Las respuestas son anónimas y no hay control de duplicados: una misma persona puede responder más de una vez.</p>
</div>

Para usarla necesitas haber [conectado espacio con tu WebID](/docs/comenzando/conectar-espacio/). Quien responde tus encuestas no necesita espacio ni una cuenta.

## 1. Crea una encuesta

1. Haz clic en **+ Nueva encuesta**.
2. Escribe el **Título** y, si quieres, una **Descripción** que explique de qué se trata.
3. Arma las preguntas (lo ves en el punto siguiente).
4. Haz clic en **Guardar borrador** para seguir después, o en **Publicar** si ya está lista.

Antes de guardar, Encuestador revisa que la encuesta tenga título y que cada pregunta tenga su texto.

## 2. Arma las preguntas

Cada pregunta tiene:

- **Pregunta**: el texto que verá quien responde.
- **Tipo**: cómo se responde. Puede ser **Texto breve**, **Texto largo**, **Número**, **Fecha**, **Una alternativa** o **Varias alternativas**.
- **Ayuda opcional**: una aclaración que aparece bajo la pregunta.
- **Obligatoria**: márcala si no se puede enviar la encuesta sin responderla.

En las preguntas de alternativas, escribe cada opción y suma más con **+ Alternativa**. Necesitan al menos dos.

Agrega preguntas con **+ Agregar pregunta** y quita las que sobren con **Eliminar**. Una encuesta tiene que tener al menos una pregunta.

## 3. Publica y comparte el enlace

Al hacer clic en **Publicar**, la encuesta queda disponible en [encuestador.tecnocooperativa.cl](https://encuestador.tecnocooperativa.cl/). En la lista de encuestas aparece marcada como **Publicada**, con el enlace **Abrir formulario público ↗**: ábrelo y copia la dirección para compartirla.

Quien abre el enlace ve el formulario, responde, pasa una verificación breve contra bots y hace clic en **Enviar respuesta**.

### Si cambias una encuesta publicada

Puedes editarla cuando quieras. Al usar **Guardar borrador** sobre una encuesta publicada, aparece **Cambios sin publicar**: quien responda sigue viendo la versión anterior hasta que vuelvas a hacer clic en **Publicar**.

## 4. Revisa los resultados

En la lista, haz clic en **Resultados** en la encuesta que quieras. Ves cuántas respuestas hay y una tabla con una fila por respuesta, con su fecha y lo que respondió cada persona.

Para trabajar los datos en una planilla, usa **Exportar CSV**. El archivo se abre en Excel, LibreOffice o Google Sheets.

## Despublicar y eliminar

- **Despublicar** cierra el formulario: nadie más puede verlo ni responderlo. La encuesta vuelve a ser **Borrador** y las respuestas que ya llegaron siguen en tu Pod. Puedes publicarla de nuevo cuando quieras.
- **Eliminar encuesta** la despublica y borra todas sus respuestas. Encuestador te pide confirmar, porque no se puede deshacer.

## ¿Dónde quedan tus encuestas?

En tu Pod, en `Aplicaciones/encuestador/`:

- `data/` guarda las encuestas publicadas, con lectura pública para que el formulario las pueda mostrar;
- `respuestas/` guarda una carpeta por encuesta, con un archivo por respuesta. Cualquiera puede agregar una respuesta, pero solo tú puedes leerlas;
- `encuestador.json` guarda tus borradores, y solo tú lo ves.

Las respuestas pasan por un servicio de la cooperativa que las revisa y las deja en tu Pod, sin guardar una copia.

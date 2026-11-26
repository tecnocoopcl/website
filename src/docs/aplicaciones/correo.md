---
title: "Correo"
description: "Cómo usar Correo en espacio: activar tu casilla de la cooperativa, leer lo que llega a tu Pod y guardar el original con sus adjuntos."
order: 26
---

# Correo

**Correo** muestra el correo que llega a tu dirección de la cooperativa (por ejemplo, `tu-nombre@tecnocooperativa.cl`). Los mensajes se guardan en tu [Pod](/docs/glosario/#pod), no en un servidor de correo de terceros.

<div class="note">
  <p><strong>Correo está en etapa temprana y viene solo en la <a href="/aplicaciones/espacio/#beta">versión beta de espacio</a>.</strong> Por ahora solo recibe: no envía correo. Para tener una casilla, escríbenos a correo@tecnocooperativa.cl.</p>
</div>

Para usarla necesitas haber [conectado espacio con tu WebID](/docs/comenzando/conectar-espacio/).

## Activar tu casilla

1. Abre **Correo** en espacio.
2. Haz clic en **Activar casilla**.

Con eso, Correo crea la carpeta `Aplicaciones/correo/entrada/` en tu Pod y le da permiso a la aplicación de correo de la cooperativa para **agregar** mensajes ahí. Solo eso: no puede leer ni borrar los mensajes que ya llegaron, ni entrar al resto de tu Pod.

Si pausas la casilla, se quita el permiso y deja de llegar correo. Lo que ya recibiste queda donde está.

<div class="note">
  <p><strong>¿Activaste la casilla antes del 25 de noviembre de 2026?</strong> La aplicación de correo cambió de identidad. Vuelve a hacer clic en <strong>Activar casilla</strong> para darle permiso a la nueva.</p>
</div>

## Leer el correo

La lista muestra quién te escribió, el asunto y la fecha. Al abrir un mensaje ves el texto y la lista de adjuntos.

Por ahora Correo muestra el texto plano del mensaje. Para ver el formato original (HTML) o abrir los adjuntos, **guarda el original** y ábrelo con tu programa de correo de siempre: es un archivo `.eml` completo.

## ¿Dónde quedan tus mensajes?

En `Aplicaciones/correo/` de tu Pod:

- `entrada/`: cada mensaje en dos archivos, el original (`.eml`) y un resumen (`.json`) para listarlo rápido.
- `correo.json`: qué mensajes ya leíste.

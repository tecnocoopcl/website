---
# BORRADOR: reporte de la semana 49, para completar durante la semana.
# Mientras tenga `borrador: true` se ve en `npm run dev` y no se publica.
# Los comentarios <!-- … --> no se ven en la página: son notas para completar.
borrador: true
title: En qué estamos, semana 49
description: "Reporte semanal de la cooperativa, semana 49 de 2026, del 30 de noviembre al 6 de diciembre: llega Correo a espacio, el Encuestador solo para socios, las aplicaciones de la cooperativa con identidad propia y la Ley de Protección de Datos Personales."
resumen: "Correo llega a espacio, el Encuestador pasa a ser solo para socios, las aplicaciones de la cooperativa tienen identidad propia y empezamos a alinearnos con la nueva ley de datos."
autor: alejandro-bustos-nunez
date: 2026-12-01
---
Seguimos con el reporte semanal. Si te perdiste el anterior, está en [En qué estamos, semana 48](/blog/en-que-estamos-semana-48-de-2026/). El detalle de cada versión de espacio está en las [notas de versión](/notas-de-version/).

## Correo llega a espacio

La semana pasada contamos que la cooperativa ya recibía correo. Ahora también se puede leer: la beta 3.0.0-beta.12 trae la aplicación **Correo**. Al activar la casilla, la cooperativa puede dejar los mensajes que llegan en tu [Pod](/como-funciona/#pods), sin poder leer ni borrar lo que ya tienes. La aplicación muestra remitente, asunto, texto y adjuntos, y guarda el original para que lo abras con cualquier programa de correo.

Por ahora la cooperativa solo recibe correo, no lo envía. Si quieres una casilla, escríbenos a correo@tecnocooperativa.cl.

<!-- Completar: cuántas casillas se activaron esta semana, si hubo problemas. -->

## Encuestador, solo para socios

El Encuestador tuvo varios cambios:

- **Secciones** entre las preguntas, con título y una explicación, para agrupar las preguntas de un mismo tema (beta.11).
- **Importar una encuesta desde un archivo JSON**, que se abre como borrador para revisarla antes de publicar (beta.11).
- **Las encuestas ahora son solo para socios.** Para responder hay que iniciar sesión con la cuenta de la cooperativa, y cada respuesta queda asociada a quien la envía. Además, las respuestas se revisan según el tipo de pregunta antes de guardarlas.

La beta.12 también corrige dos errores: el Encuestador se caía al crear una encuesta nueva, y en el tema oscuro sus tarjetas se montaban unas sobre otras.

<!-- Revisar: ¿queda la verificación de Cloudflare Turnstile o se reemplazó por la sesión? -->

## Las aplicaciones de la cooperativa tienen identidad propia

Para dejar el correo en tu Pod, la cooperativa necesita que una aplicación escriba ahí aunque tú no estés conectado. Hasta ahora esa identidad se armaba a mano y dependía de la cuenta de una persona. El 24 de noviembre, al rehacer el servidor de los Pods, ese vínculo se perdió y el correo llegaba, pero no se podía guardar.

Ahora **medio da de alta las aplicaciones**, igual que da identidad a los socios. Cada aplicación tiene su propio WebID, y antes de que pueda escribir en un Pod, la cooperativa la revisa y la **certifica**. En la certificación se fija en qué carpeta de tu Pod puede trabajar (por ejemplo, `Aplicaciones/correo/`) y qué puede hacer ahí. Para Correo, solo agregar mensajes nuevos.

Esto importa por dos razones. La primera es que ninguna aplicación queda atada a la cuenta de un socio. La segunda es que, si una aplicación se retira, sus permisos no reviven aunque después aparezca otra con el mismo nombre. Tú sigues decidiendo: el permiso lo das en tu Pod, y lo puedes quitar cuando quieras.

## La mudanza a tecnocooperativa.cl

Terminamos de mudar lo principal al dominio de la cooperativa: los Pods, las identidades, la API y las aplicaciones Archivador, Notas, Por Hacer y Encuestador. Con la beta.12, espacio ya no depende de ningún dominio anterior para funcionar.

Si usas la beta, **tienes que volver a iniciar sesión** con tu cuenta en `pods.tecnocooperativa.cl`. Las cuentas del servidor anterior ya no reciben avisos ni mensajes.

<!-- Enlazar el reporte «Nos mudamos a tecnocooperativa.cl» cuando se publique (/blog/nos-mudamos-a-tecnocooperativa-cl/). Actualizar: ¿se migraron los tres socios pendientes? ¿se apagó el servidor anterior? ¿Árbol ya tiene dirección nueva? -->

## Ley de Protección de Datos Personales

El 1 de diciembre entra en vigencia la Ley 21.719 de Protección de Datos Personales. Como contamos la semana pasada, antes de que espacio 3 sea la versión estable vamos a alinear espacio y los servicios de la cooperativa con esta ley.

<!-- Completar con lo avanzado esta semana. Ideas: inventario de qué datos trata cada servicio (API, Pods, Correo, Encuestador, estadísticas de escucha), bases de licitud, cómo ejercer tus derechos (acceso, rectificación, supresión, oposición, portabilidad), y la revisión de la página de Privacidad. -->

## Revisión de ciberseguridad

<!-- Completar: alcance de la revisión (espacio, medio, la API, los Pods), qué se revisó esta semana y qué se encontró, sin detalles que expongan fallas abiertas. -->

## Lo que viene

<!-- Completar al cierre de la semana: próxima beta, avance hacia espacio 3 estable. -->

Si quieres probar la beta, activa "Recibir versiones beta" en *Configuración*, pestaña *Actualizaciones*. Si prefieres no arriesgar, la versión estable sigue siendo la 2.

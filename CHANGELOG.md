# Changelog

Todos los cambios notables de este proyecto se documentan aquí.
Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).

## [Sin publicar]

## [1.16.0] - 2026-11-13

### Cambiado
- El sitio se viste con el lenguaje visual de espacio: la misma paleta índigo, tipografía, radios y modo claro u oscuro según el sistema. Los colores vienen de la SDK de espacio y se traen con `npm run sincronizar:espacio`.
- Cada aplicación muestra su ícono, el mismo del launcher de espacio, en su tarjeta y en su página. espacio lleva su ícono donde se habla de él.
- La página de Estado muestra el consumo eléctrico del mes y el acumulado desde la primera lectura, como los entrega la API. Antes el acumulado aparecía como si fuera el consumo del día.

### Corregido
- La documentación había quedado sin estilos: ahora comparte la cabecera de página con el resto del sitio.

## [1.15.0] - 2026-11-12

### Cambiado
- La marca pasa de «Tecnocoop» a «Tecnocooperativa», con el lema «Construyendo espacio público digital».

## [1.14.0] - 2026-10-22

### Añadido
- Página «Accesibilidad de espacio» en la documentación (`/docs/accesibilidad/`): la meta de cumplir WCAG 2.2 nivel AA, lo que ya funciona y lo que falta. Dice sin rodeos que hoy espacio todavía no cumple ese nivel.
- La guía de Hojas explica cómo usarla con el teclado: moverse entre celdas, editarlas, copiar y pegar, deshacer y salir de la tabla con Tab.

### Cambiado
- espacio 1.15.0 en el feed de actualizaciones y en los botones de descarga.

### Quitado
- El correo de contacto del pie de página: era provisorio y no existía.

## [1.13.0] - 2026-10-22

### Cambiado
- Archivos también se usa en el navegador, en [archivos.aebn.cl](https://archivos.aebn.cl), y lleva las etiquetas «Nativa» y «Web». Su guía explica cómo conectarse desde el navegador y aclara que sincronizar carpetas de tu computador es solo dentro de espacio.

## [1.12.0] - 2026-10-22

### Añadido
- Descarga de espacio para Mac con procesador Intel, junto a la de Mac con Apple. El botón de descarga elige la de Intel cuando el navegador permite saberlo (Chrome, Edge y a veces Firefox); en Safari queda la de Apple y la de Intel está en el menú. La guía de instalación explica cómo saber qué procesador tiene tu Mac.

### Cambiado
- espacio 1.14.0 en el feed de actualizaciones y en los botones de descarga.

## [1.11.0] - 2026-10-22

### Añadido
- Encuestador, la app de espacio para crear encuestas, en la lista de aplicaciones, con su página (`/aplicaciones/encuestador/`) y su guía en la documentación: crear y publicar una encuesta, compartir el enlace, revisar los resultados, exportarlos a CSV, despublicar y eliminar. Va con las etiquetas «Nativa» y «En etapa temprana».

## [1.10.0] - 2026-10-20

### Cambiado
- espacio pasa de «Servicios» a «Aplicaciones»: su página ahora está en `/aplicaciones/espacio/` y aparece destacada arriba de la lista de aplicaciones. La dirección `/espacio/` redirige a la nueva, y el feed de actualizaciones (`/espacio/updates/`) no cambia.

## [1.9.0] - 2026-10-20

### Añadido
- Sección «Aplicaciones» (`/aplicaciones/`) en el menú, con todas las aplicaciones de la cooperativa en una sola lista y, arriba, qué significa cada etiqueta.
- Una página propia para cada aplicación (Archivador, Archivos, Árbol, Audioteca, Calendario, Escribir, Estudio, Hojas, Música, Notas y Por Hacer), con enlace a su sitio y a su documentación.
- Guías de todas las aplicaciones en la documentación, en orden alfabético.

### Cambiado
- Las aplicaciones llevan las etiquetas «Nativa» (se usa dentro de espacio), «Web» (se abre en el navegador) y «En etapa temprana», que reemplaza a «En construcción». Las del catálogo de espacio llevan «Nativa» y «Web».
- La dirección de cada aplicación web es un enlace que la abre.
- Los nombres de todas las aplicaciones empiezan con mayúscula: Escribir, Árbol, Hojas y Archivador.
- En la página de espacio, las aplicaciones van en una sola lista con las mismas etiquetas, y cada una enlaza a su página.

## [1.8.1] - 2026-10-16

### Corregido
- En «Crea tu Pod y tu WebID», la explicación de por qué los botones del servidor aparecen en inglés queda más clara.

## [1.8.0] - 2026-10-16

### Añadido
- Guía «Crea tu Pod y tu WebID» (`/docs/comenzando/crear-pod/`) como primer paso de Comenzando: cómo entrar a la cuenta que entrega la cooperativa, crear el Pod (que trae el WebID) y reconocer sus direcciones.

### Cambiado
- Comenzando queda en tres pasos: crea tu Pod y tu WebID, instala espacio y conéctalos.
- El enlace «Documentación» del menú y «Lee la documentación» de la portada llevan al primer paso.
- «Cómo usar tu Pod» y «¿Qué es un WebID?» enlazan a la nueva guía.

### Eliminado
- La guía «Tu WebID»: su contenido pasó a «Crea tu Pod y tu WebID», y su dirección redirige ahí.

## [1.7.1] - 2026-10-16

### Corregido
- El navegador podía seguir usando una versión vieja de la hoja de estilos después de una actualización del sitio (por ejemplo, el enlace «Siguiente» de «Instalar espacio» se veía sin estilo). Ahora el enlace al CSS lleva la versión del sitio.

### Cambiado
- «¿Qué son los Pods?» termina con una sección «Sigue leyendo» con los enlaces a «Cómo usar tu Pod» y «¿Qué es un WebID?», en vez de una línea de texto.

## [1.7.0] - 2026-10-16

### Añadido
- Enlace «Siguiente» alineado a la derecha al final de cada guía de Comenzando, que lleva al paso que sigue.
- Enlace a la documentación al final de las páginas de WebID, Pods y espacio.

### Cambiado
- La guía «Crea tu WebID» pasa a «Tu WebID» (`/docs/comenzando/tu-webid/`): da por hecho que ya tienes cuenta y explica cómo son tu WebID y tu Pod, y dónde verlos.
- «Cómo usar tu Pod» parte de que el Pod viene con tu cuenta.

### Eliminado
- Los botones «Solicitar un WebID» y «Solicitar un Pod», y los avisos que invitaban a escribir a la cooperativa.

## [1.6.1] - 2026-10-16

### Cambiado
- Más margen sobre el enlace «Lee la documentación» del hero.

### Eliminado
- La sección «¿Quieres ser parte?» de la portada, el botón «Súmate como socio/a fundador/a» de Sobre nosotros y la página Hazte socio/a (`/hazte-socio/`).

## [1.6.0] - 2026-10-16

### Añadido
- Botón secundario «Conoce espacio» junto al de descarga en la portada, con la guía de instalación como enlace debajo.
- Enlace «Lee la documentación» bajo los botones del hero.
- Guías nuevas en Comenzando, en tres pasos: «Instalar espacio», «Crea tu WebID» y «Conecta espacio con tu WebID», cada una con su siguiente paso.
- Sección «Aplicaciones» en la documentación, con una guía de Archivos: navegar el Pod, subir y descargar, compartir y sincronizar carpetas del computador.

### Cambiado
- WebID va antes que Pods en las tarjetas de servicios, en el menú Servicios y en la documentación.
- La página de documentación de WebID pasa a llamarse «¿Qué es un WebID?».
- «Cómo usar tu Pod» enlaza a las nuevas guías.

### Eliminado
- La flecha del enlace «Conoce más sobre nosotros».

## [1.5.0] - 2026-10-13

### Añadido
- Sección «Estado actual» en Sobre nosotros (`/sobre/#estado`): qué significa la etapa de organización inicial (también llamada precooperativa), qué falta para constituir la cooperativa y enlaces a la Ley General de Cooperativas y a la DAES.
- Enlaces «Saber más» hacia esa explicación desde el pie de página, la portada y Hazte socio/a.

### Cambiado
- «En formación» pasa a «en etapa de organización inicial» en todo el sitio.
- La captura de espacio es ahora un PNG con fondo transparente, sin marco alrededor.

## [1.4.0] - 2026-10-13

### Añadido
- Página propia de espacio (`/espacio/`), con botón de descarga, captura de la app y la lista de aplicaciones disponibles: las incluidas (Archivos, escribir, Estudio; arbol, Calendario y hojas en construcción) y las del catálogo (Por Hacer, Notas, Música y archivador).
- espacio en el menú Servicios y enlace «Conoce espacio» bajo el botón de descarga de la portada.

## [1.3.0] - 2026-10-13

### Añadido
- Botón de descarga de espacio que detecta el sistema operativo (Mac, Windows o Ubuntu), con un menú para elegir otro sistema y un enlace a la guía de instalación.

### Cambiado
- Los botones del hero son ahora «Conoce WebID» y «Conoce Pods»; «Hazte socio/a» sigue más abajo en la portada y en Sobre nosotros.
- El texto del hero presenta a Tecnocoop como cooperativa digital.
- Nombre legal actualizado a «Cooperativa para el Espacio Público Digital».
- El ejemplo de WebID usa el dominio real de los Pods (`pods-rpi-tc.aebn.cl`).

### Eliminado
- Los tres botones de descarga separados de la portada, reemplazados por el botón único.

## [1.2.0] - 2026-10-13

### Añadido
- Página propia para WebID (`/webid/`): qué es, para qué sirve y en qué se diferencia de un Pod, con botón para solicitarlo.
- WebID como servicio separado de Pods en el menú Servicios y en la portada.
- Sección «WebID» propia en la documentación.
- Descarga de espacio para Windows (instalador `.exe` x64): botón en la portada y sección en la guía de instalación, con el aviso de SmartScreen.
- Sección «Comenzando» en la documentación, con la guía para instalar espacio en Mac (incluido sacarla de cuarentena) y Ubuntu.
- Botón de descarga de espacio para Ubuntu (`.deb` amd64), junto al de Mac.
- Sección de descarga de la app espacio bajo el hero de la portada, con botón para Mac (versión tomada de `latest.json`).

### Cambiado
- La documentación de WebID se movió de `/docs/pods/webid/` a `/docs/webid/`; la dirección anterior redirige a la nueva.
- El enlace «Documentación» del menú lleva a la guía de instalación de espacio.
- La documentación pasa a español chileno (tuteo).

### Corregido
- Restos de voseo en la guía «Cómo usar tu Pod».

## [1.1.0] - 2026-09-29

### Añadido
- Fecha de actualización del consumo en formato largo en la página de estado.
- Feed de actualizaciones de espacio (`latest.json` y su firma).

### Cambiado
- Ajustes visuales del dropdown de Servicios: hover, ícono, centrado y alineación del borde con el header.

### Corregido
- El dropdown de Servicios quedaba siempre abierto.

[Sin publicar]: https://github.com/newale/tecno-cooperativa-website/compare/v1.5.0...HEAD
[1.5.0]: https://github.com/newale/tecno-cooperativa-website/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/newale/tecno-cooperativa-website/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/newale/tecno-cooperativa-website/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/newale/tecno-cooperativa-website/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/newale/tecno-cooperativa-website/releases/tag/v1.1.0

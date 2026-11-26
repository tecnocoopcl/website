---
title: En qué estamos, semana 48
description: "Reporte semanal de la cooperativa, semana 48 de 2026, del 23 al 29 de noviembre: medio, el correo de la cooperativa, pruebas con IA propia, presentaciones, el dominio definitivo y el cierre de la versión 3 de espacio."
resumen: "medio ya corre el sitio y la API, llega el correo de la cooperativa, probamos IA en nuestro propio equipo y cerramos la versión 3 de espacio."
autor: alejandro-bustos-nunez
date: 2026-11-24
---
Con este reporte inauguramos el blog. Cada semana vamos a contar aquí que se ha trabajado y que viene. En este reporte encontrarás la continuación del último anuncio hecho por el grupo de WhatsApp. Si quieres conocer el detalle de cada versión de espacio, lo encuentras en las [notas de versión](/notas-de-version/).

## Administración de nuestro medio tecnológico

Estamos construyendo la plataforma "medio", que es la forma que tendremos de medir y organizar los servicios de la cooperativa en la infraestructura distribuída de la cooperativa, sin depender de nubes de terceros. Se administra desde una consola que muestra cada servicio con métricas relevantes para la gestión de la operación, sus registros y su consumo eléctrico, entre otras.

Los servicios que hoy entrega la cooperativa han sido migrados a medio, dado que así también podemos hacer un mejor diseño de costos de la infraestructura.

## Correo de entrada

La cooperativa ya puede recibir correos (por ahora no puede enviar). La primera dirección es correo@tecnocooperativa.cl, y se levantó para poder tener un canal de comunicación con interesados y gente que llega a la página. Este servicio no ha sido habilitado para todos, pero puede solicitarse. Lo que llega queda en el [Pod](/como-funciona/#pods) asociado, y la cooperativa no puede leer ni borrar lo que ya tienes. La aplicación Correo de espacio se encuentra en camino al lanzamiento de la próxima versión beta.

## Pruebas con IA

En la actualidad, tenemos un modelo de lenguaje (*qwen3:4b-instruct*) que corre en la infraestructura de la cooperativa. La beta.9 de espacio trae la aplicación IA, que es una prueba de concepto para este tipo de interacciones. Por ahora, considera un chat y tareas listas en modo generativo como resumir, reescribir más claro, lluvia de ideas y traducir al inglés. Las conversaciones se guardan en tu Pod. Por ahora es un experimento, para conocer qué se puede hacer con nuestro propio equipo.

Cabe mencionar que la primera interacción, puede tener una alta latencia, dado que el computador se enciende automáticamente, y luego carga el modelo antes de responder. Puedes verificar el Estado del nodo antes de interactuar. Cabe destacar que el modelo, cuando está trabajando en una respuesta, puede alcanzar un consumo de hasta 130 watts, el promedio de la cooperativa en la actualidad es de 7 watts.

## Presentaciones

La beta.9 también trae una aplicación nueva para armar presentaciones. Sus funcionalidades actuales son: armar dispositivas simples, usa formato JSON, tiene un modo presentación, que permite visualizar la siguiente diapositiva y un cronómetro en una segunda pantalla.

## Dominio definitivo

Todo pasa a tecnocooperativa.cl, el sitio, la API, los Pods, los WebID, Música y Audioteca. Esta migración ocurre debido a que la cooperativa inició sus operaciones ligada al dominio personal de uno de sus socios.

Dada esta migración muchos servicios han sido deprecados directamente sin un plan de contigencia o de descenso. Por lo que probablemente tengas que instalar espacio desde cero. 

Para hacerlo, sigue la [guía de instalación de espacio](/docs/comenzando/instalar-espacio/).

## El sitio, reorganizado

Las novedades de cada versión de espacio ahora están en las [Notas de versión](/notas-de-version/), desde la 1.3 hasta la beta más reciente, y no solo por WhatsApp. El sitio también suma las páginas [Cómo funciona](/como-funciona/), [Empieza aquí](/empieza/), [Súmate](/sumate/), [Privacidad](/privacidad/) y un [glosario](/docs/glosario/), y la sección [Plataformas](/plataformas/), con Música, Audioteca y Academia.

## Lo que viene: estabilizar, segurizar la beta.

Espacio ha avanzado muchisimo desde que inició su desarrollo. Buscamos cerrar la versión 3 de espacio, para lanzarla como la nueva versión estable.

Antes de que esto ocurra, haremos dos cosas: alinear espacio y los servicios de la cooperativa con la Ley de Protección de Datos Personales de Chile (Ley 21.719), y hacer una revisión de ciberseguridad. Son hitos importantes para el funcionamiento de nuestra infraestructura soberana.

Si quieres probar la beta, activa "Recibir versiones beta" en *Configuración*, pestaña *Actualizaciones*. Si prefieres no arriesgar, la versión estable sigue siendo la 2, y recibe actualiciones constantemente.

---
borrador: false
title: Construir Trenzador también fue parte del análisis
description: "Caso de uso de Trenzador: cómo una herramienta cooperativa nacida para reunir un corpus disperso terminó acompañando el análisis de una etnografía doctoral."
resumen: "Necesitaba reunir un corpus etnográfico disperso. Construir una herramienta para hacerlo terminó cambiando mi manera de analizarlo."
autor: raul-zuleta
date: 2026-11-27
---
Mi corpus doctoral no estaba perdido, pero sí cada vez más fragmentado. Mis diarios de campo y transcripciones de entrevistas estaban en un disco externo; escribía memos en Obsidian; además tenía fotografías y documentos en PDF. Podía encontrar cada cosa, pero me costaba reunir de manera controlada todo lo relacionado con una pregunta.

De esa dificultad nació [Trenzador](/aplicaciones/trenzador/), una aplicación de [espacio](/aplicaciones/espacio/). Al comienzo la idea era sencilla: armar pequeñas unidades autocontenidas con fuentes que vivían en distintos lugares. Una unidad podía reunir, por ejemplo, todo lo relacionado con las semillas de un participante, sin obligarme a trasladar o transformar mi corpus completo.

## Un maletín para cada problema

Trenzador conserva la ruta de la fuente original y permite guardar una copia dentro de un "maletín". Así puedo reunir documentos dispersos, mantener su procedencia y exportar la unidad completa. La aplicación lleva un registro maestro de las fuentes y de las relaciones que voy estableciendo entre ellas.

La primera prueba real fue una unidad sobre semillas. Reuní diarios de campo, fotografías, una entrevista, un documento administrativo y algunos memos. Luego comparé tres fuentes que relataban un mismo episodio.

Al leer juntos el diario de campo, la entrevista y el documento administrativo, pude reconocer que las versiones eran coherentes entre sí. Ese no era todavía un hallazgo definitivo, pero sí una base más firme para avanzar. Pero también aparecieron preguntas nuevas: ¿por qué el investigador necesitaba esas semillas en particular? ¿Cómo habían llegado antes a un banco internacional y qué motivó su regreso a Chile?

La unidad dejó de ser solo un archivo de materiales. Se convirtió en un mapa de lo que sabía, lo que podía sostener con evidencia y lo que todavía tenía que investigar.

## La herramienta creció durante el uso

Trenzador no nació de una especificación cerrada. Sus funciones fueron apareciendo mientras intentaba trabajar con mi corpus. Necesité comparar versiones y surgieron los códigos y fragmentos. Necesité reunir evidencia alrededor de una pregunta y aparecieron las tramas. Cuando una trama reveló que faltaba información, agregamos "cabos sueltos" para registrar entrevistas, contactos o fuentes pendientes.

Lo mismo ocurrió con problemas más pequeños. Al corregir una entrevista entendí que había que sincronizar la copia de trabajo sin perder los códigos. Al importar un memo de Obsidian descubrí que sus `[[enlaces]]` podían transformarse en relaciones precargadas para después revisarlas. Al incorporar fotografías apareció la necesidad de seleccionar y codificar regiones de una imagen.

Cada mejora partió de una dificultad concreta, no de intentar anticipar todo lo que debería hacer un programa de análisis cualitativo.

## Una herramienta hecha de otras herramientas

Tampoco partí de cero. Muchas decisiones de Trenzador vienen de herramientas con las que ya había trabajado. De Atlas.ti recuperé la idea de la unidad hermenéutica, el libro de códigos y la posibilidad de codificar directamente sobre un pasaje. De Mendeley tomé como referencia la organización de las fuentes y la idea de mantener el documento original mientras las anotaciones viven en una capa asociada. De Obsidian vienen los `[[enlaces]]` entre notas y la intuición de recorrer esas relaciones mediante una vista de red.

No intenté reproducir ninguno de esos programas completo. Fui tomando soluciones que conocía y combinándolas según lo que el corpus me pedía. Trenzador también se fue formando como un ensamblaje de herramientas anteriores, traducidas a mi propia forma de investigar.

## Desarrollar también me hizo volver al corpus

No soy desarrollador de software. Otro socio me enseñó el recorrido básico: clonar el repositorio, levantar [espacio](/aplicaciones/espacio/) en mi computador, trabajar en una rama y enviar un *pull request*. Desde ahí fui construyendo con ayuda de inteligencia artificial y revisando los cambios a partir del uso.

Ese proceso tuvo un efecto inesperado. Como me entretenía viendo crecer la herramienta, también me daban ganas de volver a mis materiales para probarla. Programar una función exigía preguntarme qué actividad analítica estaba intentando realizar y por qué las herramientas existentes no terminaban de calzar con ella. El desarrollo no reemplazó el análisis; me dio otra forma de permanecer cerca de él.

## Por qué hacerlo en una cooperativa

Podría haber dejado Trenzador como una herramienta personal. Al incorporarlo a la cooperativa, en cambio, el código queda abierto, otro socio revisa los cambios y la aplicación pasa a formar parte de un espacio común. Mi corpus sigue bajo mi control: la unidad vive en mi computador y puedo respaldarla en mi [Pod](/como-funciona/#pods).

Trenzador todavía está en una etapa temprana. No pretende reemplazar todos los programas de análisis cualitativo ni proponer una metodología universal. Por ahora hace algo más modesto: me permite seguir un hilo entre fuentes dispersas, anudarlas alrededor de una pregunta y conservar la posibilidad de llevarme el corpus junto con las decisiones analíticas que fui tomando.

En mi caso, construir la herramienta no fue una tarea previa al trabajo etnográfico. Terminó siendo parte de él.

---
borrador: false
title: Nos mudamos a tecnocooperativa.cl
description: "Reporte de la migración de la cooperativa a su dominio propio: los Pods, las identidades (WebID), la API y las aplicaciones pasan a tecnocooperativa.cl."
resumen: "Los Pods, las identidades y las aplicaciones dejan mi dominio personal y pasan a tecnocooperativa.cl. Qué cambió y cómo lo hice."
autor: alejandro-bustos-nunez
date: 2026-11-25
---
La cooperativa partió funcionando sobre `aebn.cl`, mi dominio personal. Era lo que tenía a mano, pero la infraestructura de la cooperativa no puede depender del dominio de una persona. Esta semana terminé de mudar lo principal a **tecnocooperativa.cl**.

## Qué cambió de dirección

| Qué | Antes | Ahora |
|---|---|---|
| Pods (tus datos) | `pods-rpi-tc.aebn.cl` | `pods.tecnocooperativa.cl` |
| Identidades (WebID) | dentro de cada Pod | `id.tecnocooperativa.cl/<tu-nombre>#me` |
| API de la cooperativa | dominio anterior | `api.tecnocooperativa.cl` |
| Archivador, Notas, Por Hacer, Encuestador | dominio anterior | `<aplicación>.tecnocooperativa.cl` |
| Música y Audioteca | dominio anterior | `musica.` y `audioteca.tecnocooperativa.cl` |
| Descargas de espacio | dominio anterior | `pods.tecnocooperativa.cl` |

## Identidad y almacenamiento, por separado

El cambio más importante no es de nombre. Antes, tu identidad (tu WebID, lo que dice "soy yo" ante cualquier aplicación Solid) vivía dentro de tu Pod. Ahora son dos servicios distintos:

- **Tu identidad** está en `id.tecnocooperativa.cl`.
- **Tus datos** están en `pods.tecnocooperativa.cl`.

¿Por qué importa? Porque si mañana quieres guardar tus datos en otro servidor, tu identidad no cambia, y las personas y aplicaciones que te dieron acceso a algo te siguen reconociendo. Es una forma más de que tus datos no queden atados a un solo lugar, ni siquiera al de la cooperativa. Puedes leer más en [Cómo funciona](/como-funciona/#pods).

## Tus datos se movieron, no se copiaron a mano

Moví los Pods completos al servidor nuevo y comprobé, cuenta por cuenta, que llegara la misma cantidad de archivos y el mismo tamaño. Dentro de los archivos actualicé las direcciones que apuntaban al servidor anterior, incluidos los permisos que habías dado para compartir.

También actualicé los registros de la cooperativa: las canciones de Música, las series de la Audioteca y las encuestas del Encuestador ya apuntan a los Pods nuevos, sin que tuvieras que volver a subir nada.

Antes de tocar nada hice un respaldo completo en otro equipo de la cooperativa. **El servidor anterior sigue encendido** y no lo voy a borrar hasta comprobar que todo funciona.

Algunas cuentas cambiaron de nombre en el camino, para quedar con un nombre corto y propio. Si tu cuenta es una de ellas, ya te avisé.

---

Si algo no te funciona después de la mudanza, escribe a correo@tecnocooperativa.cl o por el grupo de WhatsApp.

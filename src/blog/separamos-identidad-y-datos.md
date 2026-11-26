---
# BORRADOR: primera versión, para revisar y reescribir a gusto.
# Mientras tenga `borrador: true` se ve en `npm run dev` y no se publica.
borrador: true
title: Separé tu identidad de tus datos
description: "Por qué la identidad (WebID) y los datos (Pods) de la cooperativa ahora viven en servicios distintos, y lo que aprendí al armarlos de nuevo con mejores prácticas."
resumen: "Tu WebID y tu Pod dejaron de ser lo mismo. Cuento la decisión de diseño, cómo quedó armado y lo que me enseñó hacerlo."
autor: alejandro-bustos-nunez
date: 2026-11-25
---
En [Nos mudamos a tecnocooperativa.cl](/blog/nos-mudamos-a-tecnocooperativa-cl/) conté qué cambió de dirección. Aquí cuento lo que no cabía en ese reporte: por qué separé tu identidad de tus datos, cómo armé los dos servicios de nuevo y qué me enseñó el proceso. Fue harto trabajo, y la verdad es que lo disfruté.

## Tres direcciones que no pesan lo mismo

En Solid, cada persona tiene tres direcciones, y no todas se pueden cambiar después:

| Qué | Para qué | ¿Se puede cambiar? |
|---|---|---|
| **WebID** | Quién eres. Lo usan las aplicaciones y los permisos que otros te dieron | **No.** Cambiarlo rompe todo lo que apunta a él |
| **Pod** | Dónde están tus datos | Sí: tu perfil lo declara |
| **Emisor del login** | Dónde inicias sesión | Sí, y es fácil: también lo declara tu perfil |

Con el servidor que teníamos, tu WebID vivía dentro de tu Pod. O sea, lo único que no se puede mover quedaba pegado a lo que sí se mueve: cambiar de servidor, de nombre o de software me obligaba a cambiar tu identidad. No me cuadraba.

Pude haber llevado ese servidor al dominio nuevo y seguir como si nada. Preferí armar uno en blanco, con nombres que no tenga que cambiar nunca más.

## Lo que decidí

Dos servicios, cada uno con su pega:

- **`id.tecnocooperativa.cl`** guarda tu identidad. Es un perfil por socio, con lo justo: tu nombre, dónde iniciar sesión y dónde están tus datos.
- **`pods.tecnocooperativa.cl`** guarda tus datos y es donde inicias sesión.

Si mañana los Pods cambian de servidor, de nodo o de software, edito dos líneas de tu perfil y tu WebID sigue igual. Este es el último cambio de WebID, y lo digo en serio.

Tampoco es gratis. Decidí que los Pods se distingan por ruta (`pods.tecnocooperativa.cl/tu-nombre/`) y no por subdominio. Un subdominio por socio aísla mejor, pero pedía un certificado comodín de pago y chocaba con cómo nombramos los servicios de la cooperativa. El costo es que todos los Pods comparten origen, así que no alojamos aplicaciones web dentro de ellos. Lo elegí sabiendo eso.

## Cómo lo armé

Esta parte la hice con más cuidado que la anterior, y es donde más aprendí.

**Las identidades las administra medio, no yo con un archivo.** Antes, darle identidad a un socio eran tres pegas a mano: un archivo en un repositorio, una cuenta con un reinicio del servidor y un código copiado de un lado a otro. Ahora es un formulario, y `id` se arma solo a partir de la lista de socios. Un socio suspendido deja de aparecer.

**Cerrado por defecto.** No hay registro público: las cuentas solo las crea la cooperativa. La raíz de los Pods nuevos no es pública. Y borrar a un socio de la cooperativa **no** borra su Pod: los datos de una persona no se pierden por un clic.

**Versión fija.** El servidor de Pods parte de una versión exacta, nunca de «la última». Esto lo confirmé a las pencas: la 7.3.0 se caía cada hora, y por eso hoy corremos la 7.2.0. Con una versión fija, actualizar y volver atrás son un cambio revisable, no una sorpresa.

**Los datos en un volumen gestionado**, que se mide, se cobra al servicio que lo usa y entra en los respaldos.

## Lo que aprendí

### Lo que se hace a mano se rompe en silencio

Para que Correo deje mensajes en tu Pod aunque no estés conectado, la cooperativa necesita una aplicación con identidad propia. La armé a mano y la até a la cuenta de una persona. El 24 de noviembre recreé el servidor de Pods y ese vínculo se perdió: el correo seguía llegando, pero no se podía guardar. Nada avisó, y me di cuenta tarde.

Ahora **medio da de alta las aplicaciones**, igual que a los socios. Si el servidor de Pods pierde sus cuentas otra vez, se rearma con un botón en vez de depender de la clave de alguien.

### Un nombre no es una identidad

Si una aplicación se llama `correo`, se borra y después se crea otra `correo`, la nueva hereda los permisos que tú le diste a la anterior sin que nadie lo haya decidido. Eso no puede pasar.

Ahora el WebID de cada aplicación lleva un identificador corto y al azar (por ejemplo `correo-k7m2qx9a`), y la cooperativa **anota cada WebID que existió**. Una dirección que ya se usó no se vuelve a usar, ni por una aplicación ni por un socio. Borrar y volver a crear da una identidad nueva: los permisos de la anterior no reviven.

### Revocar no puede ser «ojalá»

Al renovar la credencial de una aplicación, la antigua se revocaba después. Si esa revocación fallaba, solo quedaba un aviso, y la credencial vieja seguía viva sin que yo lo supiera. Ahora cada credencial queda anotada con su estado (vigente, por revocar, revocada) y se reintenta hasta que se cierra.

### Pedir lo mínimo, y que alguien lo revise

Con el tiempo van a ser muchas aplicaciones. No corresponde que cualquiera escriba en los Pods de los socios, ni que una aplicación pida más que la carpeta que le toca. Por eso ahora una aplicación se **propone** y un administrador la **certifica**: revisa qué hace y fija en qué carpeta puede trabajar y con qué permisos. Correo, por ejemplo, solo puede agregar mensajes nuevos en `Aplicaciones/correo/`.

Esa certificación queda escrita en el perfil público de la aplicación, con quién la certificó y cuándo. Si una aplicación se retira, deja de publicarse y se revocan todas sus credenciales.

## Qué significa para ti

- **Tu WebID ya no depende del servidor.**
- **Los permisos los sigues dando tú**, en tu Pod. La cooperativa certifica que una aplicación es quien dice ser; no te da ni te quita acceso.
- **Si activaste la casilla de Correo antes de este cambio**, tienes que volver a activarla: la aplicación pasó a tener una identidad nueva, y a propósito no hereda lo anterior.

## Qué falta

- Respaldar las cuentas del servidor de Pods, para que recrearlo no deje a nadie sin vincular.
- Que espacio lea el alcance certificado de cada aplicación y te pida solo eso, y te advierta cuando una no esté certificada.
- Que el Encuestador deje las respuestas en su propia carpeta.

Cada una de estas decisiones quedó escrita en un registro (ADR) con su contexto y lo que sacrifiqué. Si quieres entender o cuestionar alguna, escríbenos a correo@tecnocooperativa.cl o por el grupo de WhatsApp.

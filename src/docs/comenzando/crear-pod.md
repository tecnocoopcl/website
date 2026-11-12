---
title: "Crea tu Pod y tu WebID"
description: "El primer paso en Tecnocooperativa: entra a tu cuenta y crea tu Pod, que trae tu WebID."
order: 1
---

# Crea tu Pod y tu WebID

<p class="lede">Paso 1 de 3 para empezar: crea tu Pod y tu WebID, instala espacio y conéctalos.</p>

Cuando te sumas a la cooperativa recibes una **cuenta**: un correo y una contraseña para entrar al servidor de Pods. Esa cuenta llega vacía. Antes de usar espacio tienes que crear dos cosas, que se crean juntas en un solo paso:

- tu **Pod**, el lugar donde se guardan tus carpetas, archivos y los datos de cada aplicación;
- tu **WebID**, tu identidad: la dirección con la que entras a espacio y a cualquier aplicación compatible con Solid.

## 1. Entra a tu cuenta

1. Abre [pods-rpi-tc.aebn.cl/.account/](https://pods-rpi-tc.aebn.cl/.account/) en tu navegador.
2. Inicia sesión con el correo y la contraseña de tu cuenta.

Llegas a la página de tu cuenta. Las páginas del servidor están en inglés, así que en esta guía los botones y campos aparecen con su nombre original, por ejemplo **Create pod**.

## 2. Crea tu Pod

1. En la sección **Pods**, haz clic en **Create pod**.
2. En **Name**, escribe el nombre de tu Pod, por ejemplo `bea`. Usa minúsculas, sin espacios ni tildes.
3. Deja sin marcar la opción de usar un WebID externo: así el servidor te crea uno nuevo dentro de tu Pod.
4. Haz clic en **Create pod**.

<div class="note">
  <p><strong>Elige el nombre con calma.</strong> Queda en la dirección de tu Pod y de tu WebID, y no se puede cambiar después.</p>
</div>

## 3. Revisa lo que se creó

El servidor te muestra las dos direcciones nuevas. Si tu Pod se llama `bea`, son estas:

| | Dirección |
|---|---|
| Tu Pod | `https://pods-rpi-tc.aebn.cl/bea/` |
| Tu WebID | `https://pods-rpi-tc.aebn.cl/bea/profile/card#me` |

No necesitas memorizarlas: para entrar a espacio basta con tu correo y tu contraseña, y para compartir cosas con otras personas de la cooperativa basta con el nombre de usuario. Cuando conectes espacio, las dos direcciones aparecen en **Configuración → Tu cuenta**.

Si quieres entender mejor qué es cada una, revisa [¿Qué es un WebID?](/docs/webid/) y [¿Qué son los Pods?](/docs/pods/).

## Cuida tu contraseña

Esa contraseña es la llave de tu identidad y de todo lo que guardes en tu Pod. Usa una que no ocupes en otro sitio y guárdala en un gestor de contraseñas. Si la olvidas, puedes recuperarla desde la misma página de inicio de sesión.

<nav class="siguiente" aria-label="Siguiente">
  <a href="/docs/comenzando/instalar-espacio/"><span class="siguiente__etiqueta">Siguiente</span><span class="siguiente__titulo">Instala espacio →</span></a>
</nav>

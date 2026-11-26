---
title: "Mensajes"
description: "Cómo usar Mensajes en espacio: chats con otros socios, grupos, avisos y dónde quedan los mensajes."
order: 47
---

# Mensajes

**Mensajes** sirve para chatear con otros socios de la cooperativa. Los chats se guardan en [Pods](/docs/glosario/#pod), no en los servidores de una aplicación de mensajería.

<div class="note">
  <p><strong>Mensajes está en etapa temprana y viene solo en la <a href="/aplicaciones/espacio/#beta">versión beta de espacio</a>.</strong> Por ahora solo puedes escribirle a socios de la cooperativa.</p>
</div>

Para usarla necesitas haber [conectado espacio con tu WebID](/docs/comenzando/conectar-espacio/).

## Empezar un chat

1. Abre **Mensajes** y crea un chat nuevo.
2. Escribe el nombre del socio con quien quieres hablar. Si agregas a varias personas, es un grupo, y puedes ponerle nombre.
3. Escribe y aprieta Enter para enviar.

Si ya tienes un chat con esa persona, Mensajes abre el mismo.

Es un chat, no un correo: no tiene asunto, y no muestra «escribiendo…» ni si el otro leyó tu mensaje.

## Avisos

Cuando te escriben, el aviso llega a la **campana** de la barra de espacio y a las notificaciones de tu computador. Puedes **silenciar** un chat para que no te avise.

Con espacio cerrado no recibes avisos, pero no se pierde nada: la próxima vez que lo abras verás lo que llegó.

## Lo que tienes que saber

- **El chat vive en el Pod de quien lo crea.** Esa persona decide quién participa. Si borra el chat o deja la cooperativa, el chat se pierde para todos.
- **No hay cifrado de extremo a extremo.** Los mensajes quedan legibles en el Pod de quien creó el chat.
- Por ahora puedes agregar personas a un grupo, pero no sacarlas.
- Mensajes usa el formato de chat de Solid (Solid Chat): un chat creado en espacio también se abre en otros clientes Solid.

## ¿Dónde quedan tus mensajes?

En `Aplicaciones/mensajes/` del Pod de quien creó el chat. En tu Pod queda además `chats.json`, tu lista de chats con lo último que leíste en cada uno.

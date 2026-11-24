---
title: "Calendario"
description: "Cómo usar Calendario en espacio: tus calendarios y eventos en tu Pod, con vistas de mes, semana y día y eventos que se repiten."
order: 25
---

# Calendario

**Calendario** guarda tus eventos en tu [Pod](/docs/glosario/#pod), con vistas de mes, semana y día. Viene instalada con espacio.

<div class="note">
  <p><strong>Calendario está en etapa temprana.</strong> Todavía no tiene recordatorios ni invitados, y no importa ni exporta archivos <code>.ics</code>.</p>
</div>

Para usarla necesitas haber [conectado espacio con tu WebID](/docs/comenzando/conectar-espacio/).

## Moverte por el calendario

- Arriba eliges la vista: **Mes**, **Semana** o **Día**.
- Las flechas avanzan o retroceden, y **Hoy** te trae de vuelta.
- El mes chico de la izquierda te deja saltar a cualquier fecha.

También puedes usar el teclado: **C** crea un evento, **T** vuelve a hoy y las flechas ← y → avanzan o retroceden.

## Tus calendarios

En **Mis calendarios** están todos los tuyos, por ejemplo uno personal y otro del trabajo. Cada uno tiene su nombre y su color.

- Para crear uno, usa **Nuevo calendario**.
- Para cambiarle el nombre o el color, usa **Editar calendario**.
- Puedes ocultar un calendario para no ver sus eventos por un rato.

Borrar un calendario borra también todos sus eventos. No se puede deshacer.

## Crear un evento

1. Haz clic en **Crear evento**, o en el día o la hora donde lo quieres.
2. Escribe el título y elige el inicio y el término. Marca **todo el día** si no tiene hora.
3. Si quieres, agrega **Lugar** y **Descripción**, y elige en qué calendario va.
4. Haz clic en **Crear**.

## Eventos que se repiten

En la repetición eliges **Cada día**, **Cada semana**, **Cada mes** o **Cada año**, y cada cuántos (por ejemplo, cada 2 semanas). Puede seguir **sin fin**, terminar **hasta el…** un día o terminar **tras…** un número de veces.

Al cambiar o borrar un evento que se repite, Calendario te pregunta cuáles:

- **solo este**, que queda como evento suelto;
- **todos** los de la serie;
- y, al borrar, **este y los siguientes**.

## ¿Dónde quedan tus eventos?

En tu Pod, en `Aplicaciones/calendario/data/`: una carpeta por calendario y un archivo por evento. Calendario relee el Pod cada vez que vuelves a la ventana, así que ves lo que cambiaste en otro dispositivo.

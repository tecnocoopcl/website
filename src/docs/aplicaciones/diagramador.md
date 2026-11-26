---
title: "Diagramador"
description: "Cómo usar Diagramador en espacio: formas, conexiones, la paleta BPMN y cómo convertir notas de Escribir y libros de Hojas en diagramas."
order: 28
---

# Diagramador

**Diagramador** es un lienzo para ordenar ideas, actores y procesos. Tus diagramas son privados y quedan en tu [Pod](/docs/glosario/#pod). Viene instalado con espacio.

<div class="note">
  <p><strong>Diagramador está en etapa temprana.</strong> Ya puedes usarlo, pero todavía puede cambiar.</p>
</div>

Para usarlo necesitas haber [conectado espacio con tu WebID](/docs/comenzando/conectar-espacio/).

## Formas

- **Doble clic en el lienzo vacío** crea un cuadro de texto. Si lo dejas vacío, desaparece.
- **Doble clic en una caja** te deja escribir en ella. Esc o un clic fuera terminan.
- Además de texto, rectángulo y elipse, hay **notas adhesivas** y, en el menú **Formas**, redondeado, triángulo, rombo, hexágono, estrella, flecha y globo de diálogo.
- **Redimensiona** desde cualquier esquina o borde. Con Mayús en una esquina se conserva la proporción.

Las formas se agrupan en **paletas**. Además de la básica hay una paleta **BPMN** para bocetear procesos: eventos de inicio y fin, tarea, compuerta exclusiva, almacén de datos y participante. Sirve para dibujar, no valida que el proceso esté bien armado.

## Conexiones

Al pasar sobre una caja aparecen cuatro **puntos amarillos**. Arrastra uno hasta otra caja para conectarlas con una flecha. Para borrar una conexión, haz clic en ella y aprieta Supr.

## Pegar a la grilla

El botón de la grilla en la barra hace que mover, redimensionar y agregar se ajusten a una grilla de 20 px. Esta preferencia se recuerda en tu computador, no en el diagrama.

## Desde Escribir y Hojas

- **Compilar una nota**: elige una nota de Escribir. La nota queda al centro y cada enlace que tiene, sea Markdown o `[[wikienlace]]`, se vuelve una caja conectada. Si cambias la nota, usa **Actualizar desde la nota**: se agregan los enlaces nuevos y las cajas que ya estaban conservan su posición y color.
- **Importar desde Hojas**: elige un libro. Cada tabla se vuelve una caja y cada fórmula que usa otra tabla, una conexión. Es una foto del momento: si cambias el libro, importa de nuevo.

En los dos casos Diagramador solo lee el archivo que elegiste. Nunca lo modifica.

## Guardar

Puedes deshacer, rehacer y tener varios diagramas. Guardar es explícito: haz clic en **Guardar** para dejar los cambios en tu Pod.

## ¿Dónde quedan tus diagramas?

En `Aplicaciones/diagramador/diagramador.json` de tu Pod. Diagramador no puede leer ni escribir fuera de esa carpeta, salvo el archivo que eliges para compilar o importar.

---
title: "Instalar espacio"
description: "Cómo descargar e instalar espacio, la app de escritorio de Tecnocooperativa, en Mac, Ubuntu y Windows."
order: 2
---

# Instalar espacio

<p class="lede">Paso 2 de 3 para empezar: crea tu Pod y tu WebID, instala espacio y conéctalos.</p>

**espacio** es la app de escritorio de la cooperativa: te permite trabajar con los archivos y carpetas de tu [Pod](/docs/pods/) y compartirlos. Si todavía no creas tu Pod, empieza por el [paso 1](/docs/comenzando/crear-pod/). La versión actual es la **{{ espacio.version }}**.

## Mac

Funciona en Mac con procesador Apple (M1 o posterior) y en Mac con procesador Intel. Si no sabes cuál es el tuyo, abre el menú Apple → **Acerca de este Mac**: si dice **Chip**, es Apple; si dice **Procesador** con «Intel», es Intel.

1. Descarga espacio para tu Mac (`.dmg`):
   - [Mac con Apple (M1 o posterior)]({{ espacio.dmgUrl }})
{%- if espacio.dmgIntelUrl %}
   - [Mac con Intel]({{ espacio.dmgIntelUrl }})
{%- endif %}
2. Abre el `.dmg` y arrastra **espacio** a la carpeta **Aplicaciones**.
3. Saca la app de cuarentena. Abre la **Terminal** y ejecuta:

   ```bash
   xattr -dr com.apple.quarantine /Applications/espacio.app
   ```

4. Abre espacio desde **Aplicaciones** o Launchpad.

### ¿Por qué hay que sacarla de cuarentena?

macOS marca con una "cuarentena" todo lo que se descarga de internet y solo deja abrir sin preguntas las apps firmadas con una cuenta de desarrollador de Apple. La cooperativa todavía no tiene esa cuenta, así que sin el paso 3 macOS dice que la app "está dañada" o que "no se puede verificar el desarrollador". El comando solo quita esa marca de espacio; no cambia ninguna configuración de seguridad de tu Mac.

### Actualizaciones

espacio avisa cuando hay una versión nueva y se actualiza sola al apretar **Actualizar**. No hace falta repetir el paso 3: la app quita la cuarentena de la versión nueva por su cuenta. Cada actualización se verifica con una firma de la cooperativa antes de instalarse.

## Ubuntu

Requiere Ubuntu (o una distribución basada en Debian) de 64 bits en un equipo Intel o AMD.

1. Descarga [espacio para Ubuntu]({{ espacio.ubuntuUrl }}) (`.deb`).
2. Abre una terminal en la carpeta donde se descargó e instálalo:

   ```bash
   sudo apt install ./espacio-{{ espacio.version }}-amd64.deb
   ```

   `apt` instala también las dependencias que falten.

3. Abre espacio desde el menú de aplicaciones.

### Actualizaciones

En Ubuntu espacio todavía no se actualiza sola. Para pasar a una versión nueva, descarga el `.deb` nuevo y repite el paso 2.

### Desinstalar

```bash
sudo apt remove espacio
```

## Windows

Requiere Windows 10 u 11 de 64 bits.

1. Descarga [espacio para Windows]({{ espacio.windowsUrl }}) (`.exe`).
2. Abre el instalador. Si Windows muestra «Windows protegió su PC», haz clic en **Más información** y luego en **Ejecutar de todas formas**.
3. Sigue los pasos del instalador. Puedes elegir la carpeta de instalación.
4. Abre espacio desde el menú Inicio o el acceso directo del escritorio.

### ¿Por qué aparece el aviso de Windows?

Windows SmartScreen advierte sobre los programas que no están firmados con un certificado de código. La cooperativa todavía no tiene ese certificado, así que el aviso aparece la primera vez. Continuar solo abre el instalador de espacio; no cambia ninguna configuración de seguridad de tu equipo.

### Actualizaciones

En Windows espacio todavía no se actualiza sola. Para pasar a una versión nueva, descarga el instalador nuevo y ábrelo: se instala encima de la anterior y conserva tu sesión.

### Desinstalar

En **Configuración → Aplicaciones → Aplicaciones instaladas**, busca **espacio** y elige **Desinstalar**.

<nav class="siguiente" aria-label="Siguiente">
  <a href="/docs/comenzando/conectar-espacio/"><span class="siguiente__etiqueta">Siguiente</span><span class="siguiente__titulo">Conecta espacio con tu WebID →</span></a>
</nav>

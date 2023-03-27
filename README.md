# Desarrollo Ampliffy

## Desarrollo 1

### PUNTO-1:
- Clase constructora que recibe una imagen por parámetro y modifica su tamaño a través del DOM, utilizando métodos de clase y eventos.

### PUNTO-2:
- Titulos que cambian en base al tamaño del dispositivo, a través de un evento.
- Clase constructora que recibe un contenedor para cambiar el color de fondo dependiendo del tamaño del dispositivo.

### PUNTO-3:
- Textarea que recibe mensajes.
- Clase constructora que implementa la funcionalidad para tomar el mensaje que el usuario envía y mostrarlo a través del DOM.

### PUNTO-4:
- Imagen que muestra la úlitma visita realizada.
- Clase constructora que recibe un contenedor e implementa otro, para mostrar un mensaje al pasar el puntero del mouse por encima de la imagen.

### Jest Test
- Se instala la librería Jest a través de `npm i jest -D`.
- Para correr las pruebas se utiliza `npm run test` en la carpeta "Test" de cada desarrollo.

## Desarrollo 2
- Se instala el package de Nodejs a taravés de `npm init -y`.
- Se installa la librería "request" y "fs" a través de `npm i request` y `npm i fs` para descarga de imágenes.
- Se crea una clase constructora, la cual evalúa que los formatos de las imágenes a descargar sean `jpg` o `png`.
- Se descarga una imagen con extensión `jpg` a través de una url especificada, utilizando el comando `node index` y se guarda dentro de la carpeta "nodeJs".

## Desarrollo 3
- En base al código fuente de la página podría hacer algunos cambios en los márgenes de los contenedores del video y/o del título para ajustar/quitar la línea blanca que se observa. 
- Para vista "desktop" y "mobile" podría utilizar `media queries`, de manera de adaptar el video y el título en base al dispositivo que se usa.
- Según el caso podría utilizar algún compresor de video.
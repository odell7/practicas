-------------------------------------------------------------------------------------------
Una definicion rapida de la programacion modular dicta:
La programación modular es un paradigma de programación que consiste en dividir un programa en módulos o subprogramas con el fin de hacerlo más legible y manejable

Aunque leve y circusntacialmente en la parte de tu css se puede modularizar lo que son los estilos.
Debes evitar la duplicidad de codigo. Sea en css JS o HTML(web components).

Si ves cree un archivo common.css que contiene las lineas que se repite en cada uno de tus archivos css y luego los incluyo en cada una de las paginas. Evite escribir lo mismo 4 veces, en cada uno de los 4 archivos. Mas o menos en eso se basa la programacion modular. Aunque esto no es programacion como tal porque son estilos, pero se puebe aplicar el mismo metodo.

-------------------------------------------------------------------------------------------

Tambien te he dejado un comentario en tu arhivo script.js.

-------------------------------------------------------------------------------------------

Evita utilizar tantas identificaciones con clases en tus etiquetas HTML.
A menos que necesites referenciarlas en tu archivos javascript.

Para referenciarlas en css basta con identificar un padre, y desde ahi vas afectando a las demas. 
ejemplo:

<div class='padre'>
    <div></div>
    <div>
        <p>Paragrafo 1 del hijo div 2</p>
        <p>Paragrafo 2 del hijo div 2</p>
    </div>
    <div></div>
    <div>
        <p>Paragrafo 1 del hijo div 4</p>
        <p>Paragrafo 2 del hijo div 4</p>
    </div>
</div>

Para referenciarlos en CSS seria:

```
/*>Paragrafo 1 del hijo div 2 */
.padre > div:nth-child(2) > p:first-child{}

/*>Paragrafo 2 del hijo div 2 */
.padre > div:nth-child(2) > p:last-child{}

/*>Paragrafo 2 del hijo div 4 */
.padre > div:nth-child(4) > p:first-child{} 
...
```

-------------------------------------------------------------------------------------------

Otro detalles es la parte del fondo en el body, esta bien como resumes los atributos background en una linea.
Pero en este particular caso, es conviente asignar el alto y ancho completo al body y asignarle contain al background-size.

-------------------------------------------------------------------------------------------

En la pagina de contactos:
Las redes sociales deben ser enlaces que llevan a la red social a la que haces referencia.
Ejemplo:
<a href='facebook.com' target="_blank">
    <img src="facebook-image.jpg" />
</a>

Cuando vayas a utilizar iconos o algunas imagenes, utilizar vectores imagenes svg, puedes trasnformarlas online. de png a svg, tienes menos peso o sea que tu pagina sera mas optima.
No menos importante e igual o mas util es utilizar libreria de iconos como fontawesome, te dejo en enlace https://fontawesome.com/.
Existen otras librerias de iconos puedes verlas luego. asi evitar agregar archios de imagenes a tu proyecto.


-------------------------------------------------------------------------------------------
En el caso partcular de la pagina de servicios, existia un error de scroll y el fondo de la pagina.
En la mayoria de los casos, es una buen practica crear una etiqueta div contenedor del todo el contenido de tu pagina.
ejemplo en el archivos de servicios.html
algo como <div class='container'>... estrucutra contenido de mi pagina</div>
Aunque creo que es mejor practica utilizar la etiqueta main
<main></main>
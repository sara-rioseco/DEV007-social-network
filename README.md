![homebanner](https://github.com/sara-rioseco/DEV007-social-network/blob/main/src/img/project/home-banner2.JPG?raw=true)

# Pets' Diaries

## Índice

* [1. Definición de producto](#1-definición)
* [2. Historias de usuario](#2-historias-de-usuarios)
* [3. Interfaz](#3-interfaz)
* [4. Test](#4-test)
* [5. Tests de usabilidad](#5-tests)
* [6. Organización, planificación y trabajo en equipo](#6-organización)

***

## 1. Definición de producto

**Pets' Diaries** es una aplicación para quienes aman a los animales y quieran compartir ese infinito cariño por ellos. Hemos creado este proyecto, que funciona como una red social, para poder publicar historias graciosas, tiernas o de rescate y adopción. Además de datos curiosos, tips de cuidado y consejos varios. Te invitamos a compartir una historia con nosotras. 

La aplicación está desarrollada como una SPA, que utiliza Firebase para la autenticación de usuarios y hosting, de la mano con Cloud Firestore para la recopilación, almacenamiento y sincronización de datos. Nuestra web está dividida en 5 componentes: un Home, que es el inicio y punto de entrada; un Login, en donde se puede iniciar sesión con un usuario ya registrado o con una cuenta de Google; un Register, en donde se puede registrar un usuario con correo y contraseña; un Timeline, que permite visualizar los posts ya creados o publicar un nuevo post; y finalmente, un Profile, que permite ver el nombre de usuario y cambiarlo.

Para poder desarrollar estas implementaciones, creamos distintos prototipos, que podemos ver a continuación.

Primeros prototipos de baja fidelidad:

![Prototipo Baja Fidelidad1](https://github.com/sara-rioseco/DEV007-social-network/blob/main/src/img/project/prototipo-baja-fidelidad-elena.jpg?raw=true)
![Prototipo Baja Fidelidad2](https://github.com/sara-rioseco/DEV007-social-network/blob/main/src/img/project/prototipo-baja-sara.png?raw=true)
![Prototipo Baja Fidelidad3](https://github.com/sara-rioseco/DEV007-social-network/blob/main/src/img/project/prototipo-baja-fidelidad-yanet1.png?raw=true)
![Prototipo Baja Fidelidad4](https://github.com/sara-rioseco/DEV007-social-network/blob/main/src/img/project/prototipo-baja-fidelidad-yanet2.png?raw=true)

Prototipo final de baja fidelidad:

![Prototipo Final Baja Fidelidad](https://github.com/sara-rioseco/DEV007-social-network/blob/main/src/img/project/prototipo-baja-definitivo-mobile.png?raw=true)

Prototipos de alta fidelidad:

![Prototipo Alta Fidelidad1](https://github.com/sara-rioseco/DEV007-social-network/blob/main/src/img/project/prototipo-alta-desktop.JPG?raw=true)
![Prototipo Alta Fidelidad2](https://github.com/sara-rioseco/DEV007-social-network/blob/main/src/img/project/prototipo-alta-desktop2.JPG?raw=true)
![Prototipo Alta Fidelidad3](https://github.com/sara-rioseco/DEV007-social-network/blob/main/src/img/project/prototipo-alta-desktop3.JPG?raw=true)
![Prototipo Alta Fidelidad4](https://github.com/sara-rioseco/DEV007-social-network/blob/main/src/img/project/prototipo-alta-desktop4.JPG?raw=true)

[Enlace a Prototipo en Figma](https://www.figma.com/proto/Ms8OHJzCKR2xYZ8newuYJR/Prototipos?node-id=114-184&starting-point-node-id=114%3A184&scaling=scale-down&mode=design)

## 2. Historias de usuario

Los principales usuarios del producto son jóvenes con acceso a internet/smartphone que quieran buscar información acerca de Pokemon. Está pensado tanto para usuarios casuales que pueden ser jugadores de alguno de los videojuegos de Pokemon, o para usuarios más avanzados que quieran ver información más detallada. Para poder identificar a nuestro público objetivo y desarrollar las distintas funcionalidades trabajamos con metodologías ágiles. Esto nos llevó a crear historias de usuario para cada funcionalidad que estos usuarios requerían. Trbajamos con 6 historias de usuario en particular, las que detallamos a continuación:

**Historia de Usuario 1:**
*Yo como usuario que no sabe mucho de pokemon quiero ver una imagen, el nombre y el número de todos los pokemones para conocerlos.*

**Criterios de aceptación:**
- Quiero una vista de grilla.
- Quiero que sea responsive.
- Quiero ver la imagen del Pokemon, su nombre y número.
- No hay ningún tipo de interacción.

**Definición de terminado:**
- Pruebas de usabilidad realizadas con al menos 2 usuarios.
- Todo el código está en la rama principal de nuestro Repositorio en Github.
- Se ha publicado el proyecto en Github Pages.

**Historia de Usuario 2:**
*Yo, como jugador casual de juegos de Pokemon, quiero poder ver el tipo de Pokemon para saber a qué categoría pertenece.*

**Criterios de aceptación:**
- Quiero una vista de grilla.
- Quiero que sea responsive.
- Quiero ver la imagen del Pokemon, su nombre y número.
- Quiero hacer click en la imagen y que me muestre el tipo de Pokemon y otros detalles en un pop-up.
- Quiero poder cerrar ese pop-up y volver a la pantalla principal.

**Definición de terminado:**
- Pruebas de usabilidad realizadas con al menos 2 usuarios.
- Todo el código está en la rama principal de nuestro Repositorio en Github.
- Se ha publicado el proyecto en Github Pages.

**Historia de Usuario 3:**
*Yo, como jugador de juegos de Pokemon, quiero poder ver el detalle de fortalezas y debilidades de cada pokemon, así como la tasa de captura, para utilizar esa información al jugar.*

**Criterios de aceptación:**
- Quiero una vista de grilla.
- Quiero que sea responsive.
- Quiero ver la imagen del Pokemon, su nombre y número.
- Quiero hacer click en la imagen y que me muestre las fortalezas y debilidades de cada Pokemon.
- Quiero que además se incluya información acerca de la tasa de captura del pokemon.
- Quiero poder cerrar ese pop-up y volver a la pantalla principal.

**Definición de terminado:**
- Pruebas de usabilidad realizadas con al menos 2 usuarios.
- Todo el código está en la rama principal de nuestro Repositorio en Github.
- Se ha publicado el proyecto en Github Pages.

**Historia de Usuario 4:**
*Yo como jugador avanzado de juegos Pokemon quiero poder buscar un Pokemon determinado para encontrar información específica de él.*

**Criterios de aceptación:**
- Quiero una vista de grilla.
- Quiero que sea responsive.
- Quiero ver la imagen del Pokemon, su nombre y número.
- Quiero que exista una barra de búsqueda para escribir el nombre del Pokemon que quiero buscar.
- Quiero que me muestre el resultado de esa búsqueda.

**Definición de terminado:**
- Pruebas de usabilidad realizadas con al menos 2 usuarios.
- Todo el código está en la rama principal de nuestro Repositorio en Github.
- Se ha publicado el proyecto en Github Pages.

**Historia de Usuario 5:**
*Yo como jugador avanzado de juegos Pokemon quiero poder ordenar la información por distintos criterios (como alfabético, por orden numérico, etc.) para ver los datos de manera organizada.*

**Criterios de aceptación:**
- Quiero una vista de grilla.
- Quiero que sea responsive.
- Quiero ver la imagen del Pokemon, su nombre y número.
- Quiero que exista una opción para ordenar por orden alfabético o numérico, de manera ascendente y descendente.
- Quiero ver los resultados ordenados de acuerdo a la opción seleccionada.

**Definición de terminado:**
- Pruebas de usabilidad realizadas con al menos 2 usuarios.
- Todo el código está en la rama principal de nuestro Repositorio en Github.
- Se ha publicado el proyecto en Github Pages.

**Historia de Usuario 6:**
*Yo como jugador avanzado de juegos Pokemon quiero poder filtrar la lista de pokemon por tipo de Pokemon para ver solo los resultados que me interesan.*

**Criterios de aceptación:**
- Quiero una vista de grilla.
- Quiero que sea responsive.
- Quiero ver la imagen del Pokemon, su nombre y número.
- Quiero que exista una opción para filtrar la lista de Pokemon por tipo.
- Quiero ver únicamente los resultados de acuerdo al filtro seleccionado.

**Definición de terminado:**
- Pruebas de usabilidad realizadas con al menos 2 usuarios.
- Todo el código está en la rama principal de nuestro Repositorio en Github.
- Se ha publicado el proyecto en Github Pages.

## 3. Interfaz

La interfaz es simple y en tonos claros, el fondo tiene ilustraciones de distintos pokemones en colores variados, pero todos cercanos a tonalidades pasteles, además se presentan dos imágenes en el banner inicial de personajes de la serie. Los títulos son de color gris oscuro y los elementos de la barra de navegación, como el menú para ordenar, filtrar y barra de búsqueda están en tonos blancos con letras negras para facilitar la lectura. 

Dentro de la barra de navegación, tenemos primero el menú para filtrar. Con este podemos escoger qué pokemon queremos ver por tipo. Luego, con la barra de búsqueda podemos ingresar como texto el nombre o número de pokemon y buscar todas las coincidencias que existan dentro de la data. Además hay mensajes personalizados en caso de no encontrar resultados y de no recibir ningún criterio de búsqueda. Finalmente está el menú para ordenar la data de manera alfabética o numérica, en orden ascendente o descendente.

Ya en la parte principal de nuestra aplicación, los pokemones se muestran en un diseño de grilla, que como máximo mostrará 4 columnas y como mínimo 2, dependiendo del tamaño de la pantalla. Cada pokemon aparece dentro de una tarjeta con su número, imagen y nombre. Al presionar cada una de las tarjetas se abre una ventana que muestra primero un botón cerrar para volver a la pantalla anterior, y luego, lla misma información mencionada antes (número, nombre e imegen) pero también el tipo de pokemon, sus fortalezas, debilidades, ataques rápidos, ataques cargados, tasas de aparición, captura y huída, además de todas las evoluciones dentro de la línea de ese pokemon.
Se optó por un diseño minimalista y sencillo, que fuese lo suficientemente claro y que tenga la información más buscada por los jugadores.

Finalmente en el pie de página se agregó una opción para contabilizar los pokemones que se muestran en pantalla.

A continuación se exponen imágenes de todo lo descrito anteriormente.

Diseño final home (pantalla grande):

![Diseño Final Dispositivo Pantalla Grande]()

Diseño final home (pantalla celular o tablet):

![Diseño Final Dispositivo Pantalla Pequeña]()

Vista de dialog con información detallada:
![Vista de detalles de pokemon]()

Vista de mensaje sin input en la búsqueda:
![Vista de mensaje sin input]()

Vista de mensaje para búsqueda sin resultados:
![Vista de búsqueda sin resultados]()

Vista de menú dropdown con filtro por tipos de pokemon:
![Vista de dropdown con filtro]()

Vista de menú select para ordenar alfabéticamente/numéricamente:
![Vista de menú select para ordenar]()

Vista de mensaje para contar pokemones en pantalla:

![Mensaje para contar pokemones en pantalla]()

## 4. Test

Se ejecutaron test con jest, alcanzando coverage de 100% de statements, branches, funciones y lines. 
Los resultados son los siguientes:

![Tests](https://github.com/sara-rioseco/DEV007-social-network/blob/main/src/img/project/tests.JPG?raw=true)

Detectamos los siguientes errores al hacer nuestros tests:

- Tuvimos que reorganizar todo el orden de nuestras funciones, dejando aquellas que testearíamos, es decir las que interactuaban con firebase, en utils.js para solo testear ese archivo. Dejamos en el archivo index.js y en los archivos de los componentes todo lo que interactuaba con el DOM.
- Hubo un par de funciones que tuvimos que ajustar, ya que no estaban retornando exactamente lo que esperábamos.

## 5.  Tests de usabilidad

Hicimos pruebas de usabilidad en dos etapas. La primera fue con nuestro prototipo de alta fidelidad, que contaba con interacciones. En esta primera parte recibimos muy buen feedback respecto al diseño e interfaz. Sí hubo algunos problemas de funcionalidad que fueron solucionados para la segunda etapa.
Esta última ya se realizó con la implementación final. Los resultados fueron los siguientes:

1.¿Qué tanto te gusta el diseño y colores de nuestra página?

2.¿Crees que el diseño es lo suficientemente intuitivo y amigable?	

3.¿Que tanto te gusta la temática y el enfoque de nuestra aplicación?

4.¿Crees que el diseño se adapta bien a esta temática?

5.¿Qué tanta disposición tendrías de participar (registrarte, publicar y leer comentarios) en una red social así?

![Respuestas](https://github.com/sara-rioseco/DEV007-social-network/blob/main/src/img/project/encuesta-usabilidad-2.JPG?raw=true)

Además de estas preguntas implementamos una parte final en la que los usuarios podían comentar libremente si notaron errores o qué cosas mejorarían de nuestra aplicación. Con estas respuestas pudimos descubrir los siguientes aspectos a mejorar:

- Errores con usuarios registrados en que no se guardó el nombre de usuario (displayName) y al publicar se mostró como "null".
- Implementar carga de imágenes a los posts.
- Mejorar visibilidad del botón Cerrar Sesión o cambiar la ubicación.

## 6.  Organización, planificación y trabajo en equipo

Para nuestra planificación utilizamos la herramienta Trello. En esta ubicamos las historias de usuario a la izquierda, luego el product backlog con todas las funcionalidades que queríamos implementar, luego columnas "Doing" y "Done" y finalmente al terminar un sprint, dejábamos todos los avances de ese sprint en la columna "Sprint backlog" con el número correspondiente. Este sistema nos ayudó mucho a la organización y a entender de manera visual los avances que llevábamos y cuánto trabajo nos faltaba por hacer. También tener las historias de usuario siempre visibles fue muy útil para tener siempre en mente las funcionalidades y criterios de aceptación que debíamos cumplir. 
A continuación dejamos una imagen de nuestro tablero.

![Tablero trello](https://github.com/sara-rioseco/DEV007-social-network/blob/main/src/img/project/trello.JPG?raw=true)

Además de Trello utilizamos Google calendar para agendar horarios de almuerzo y reuniones fuera del horario de bootcamp según nuestra disponibilidad.


![homebanner](https://github.com/sara-rioseco/DEV007-social-network/blob/main/src/img/project/home-banner2.JPG?raw=true)

# Pets' Diaries

## Índice

* [1. Definición de producto](#1-definición)
* [2. Historias de usuario](#2-historias-de-usuarios)
* [3. Interfaz](#3-interfaz)
* [4. Unit Testing con Jest](#4-unit)
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

Los principales usuarios del producto son jóvenes con acceso a internet/smartphone que quieran compartir o leer historias, consejos, o información en general acerca de sus mascotas. Está pensado para usuarios casuales, fanáticos de los animales o que busquen contenido gracioso o tierno respecto a ellos. Para poder identificar a nuestro público objetivo y desarrollar las distintas funcionalidades trabajamos con metodologías ágiles. Esto nos llevó a crear historias de usuario para cada funcionalidad que estos usuarios requerían. Trbajamos con 6 historias de usuario mínimas y 5 opcionales, las que detallamos a continuación:

**Historia de Usuario 1:**
*Yo como usuario nuevo de la aplicación quiero poder registrarme con mi correo para poder ingresar*

**Criterios de aceptación:**
- Quiero poder registrarme con un correo personal.
- Quiero que sea responsive.
- Quiero que si el correo o password no son válidos me muestre un mensaje de aviso.
- Quiero que el diseño sea sencillo y amigable.

**Definición de terminado:**
- Pruebas de usabilidad realizadas con al menos 3 usuarios.
- Todo el código está en la rama principal de nuestro Repositorio en Github.
- Se ha publicado el proyecto en Github Pages/Firebase Hosting con sus tags correspondientes.
- Debe ser una SPA.
- Debe ser responsive.
- Debe haber recibido code review de al menos una compañera de otro equipo.
- Debe tener test unitarios realizados.
- Debe buscarse manualmente errores e imperfecciones simples.

**Historia de Usuario 2:**
*Yo como usuario nuevo de la aplicación quiero poder iniciar sesión con mi cuenta o desde google para poder acceder a la página*

**Criterios de aceptación:**
- Quiero poder acceder con mi cuenta de google o con un correo personal.
- Quiero que sea responsive.
- Quiero que si el correo o password no son válidos me muestre un mensaje de aviso.
- Quiero que el diseño sea sencillo y amigable.

**Definición de terminado:**
- Pruebas de usabilidad realizadas con al menos 3 usuarios.
- Todo el código está en la rama principal de nuestro Repositorio en Github.
- Se ha publicado el proyecto en Github Pages/Firebase Hosting con sus respectivos tags.
- Debe ser una SPA.
- Debe ser responsive.
- Debe haber recibido code review de al menos una compañera de otro equipo.
- Debe tener test unitarios realizados.
- Debe buscarse manualmente errores e imperfecciones simples.

**Historia de Usuario 3:**
*Yo como usuario logueado de la aplicación quiero poder visualizar todos los post creados desde el más reciente al más antiguo para poder estar actualizado en las últimas publicaciones*

**Criterios de aceptación:**
- Quiero poder visualizar todos los post creados.
- Quiero que los post aparezcan ordenados del más reciente al más antiguo.
- Quiero poder ordenar del más antiguo al más reciente.
- Quiero que sea responsive.
- Quiero que el diseño sea sencillo y amigable.

**Definición de terminado:**
- Pruebas de usabilidad realizadas con al menos 3 usuarios.
- Todo el código está en la rama principal de nuestro Repositorio en Github.
- Se ha publicado el proyecto en Github Pages/Firebase Hosting con sus respectivos tags.
- Debe ser una SPA.
- Debe ser responsive.
- Debe haber recibido code review de al menos una compañera de otro equipo.
- Debe tener test unitarios realizados.
- Debe buscarse manualmente errores e imperfecciones simples.

**Historia de Usuario 4:**
*Yo como usuario logueado quiero poder agregar un post de texto o editar un post ya creado por mí, para compartir con los demás usuarios registrados*

**Criterios de aceptación:**
- Quiero poder crear un post de texto.
- Quiero que mi post aparezca en el timeline/muro.
- Quiero poder editar un post ya creado por mí.
- Quiero que sea responsive.
- Quiero que el diseño sea sencillo y amigable.

**Definición de terminado:**
- Pruebas de usabilidad realizadas con al menos 3 usuarios.
- Todo el código está en la rama principal de nuestro Repositorio en Github.
- Se ha publicado el proyecto en Github Pages/Firebase Hosting con sus respectivos tags.
- Debe ser una SPA.
- Debe ser responsive.
- Debe haber recibido code review de al menos una compañera de otro equipo.
- Debe tener test unitarios realizados.
- Debe buscarse manualmente errores e imperfecciones simples.

**Historia de Usuario 5:**
*o como usuario logueado quiero poder eliminar un post creado por mí para poder editar o borrar un error*

**Criterios de aceptación:**
- Quiero poder eliminar un post creado por mí.
- Quiero que me pida una confirmación antes de eliminar definitivamente.
- Quiero que sea responsive.
- Quiero que el diseño sea sencillo y amigable.

**Definición de terminado:**
- Pruebas de usabilidad realizadas con al menos 3 usuarios.
- Todo el código está en la rama principal de nuestro Repositorio en Github.
- Se ha publicado el proyecto en Github Pages/Firebase Hosting con sus resectivos tags.
- Debe ser una SPA.
- Debe ser responsive.
- Debe haber recibido code review de al menos una compañera de otro equipo.
- Debe tener test unitarios realizados.
- Debe buscarse manualmente errores e imperfecciones simples.

**Historia de Usuario 6:**
*Yo como usuario logueado quiero poder dar o quitar like a una publicación, además de ver la cantidad de likes, para compartir nuestras preferencias con los demás usuarios*

**Criterios de aceptación:**
- Quiero poder dar like a una publicación ya creada.
- Quiero poder quitar el like a una publicación que tenía mi like.
- Quiero poder visualizar cuántos like tiene una publicación.
- Quiero que sea responsive.
- Quiero que el diseño sea sencillo y amigable.

**Definición de terminado:**
- Pruebas de usabilidad realizadas con al menos 3 usuarios.
- Todo el código está en la rama principal de nuestro Repositorio en Github.
- Se ha publicado el proyecto en Github Pages/Firebase Hosting con sus respectivos tags.
- Debe ser una SPA.
- Debe ser responsive.
- Debe haber recibido code review de al menos una compañera de otro equipo.
- Debe tener test unitarios realizados.
- Debe buscarse manualmente errores e imperfecciones simples.

**Historias de Usuario Opcionales**

HU7 *Yo como usuario logueado quiero poder ver mi perfil de usuario con foto para poder visualizar mis datos o editarlos*
HU8 *Yo como usuario logueado quiero poder agregar o eliminar amigos a mi perfil para conectar con personas que conozco*
HU9 *Yo como usuario logueado quiero poder agregar imágenes a mi post para compartir un elemento visual*
HU10 *Yo como usuario logueado quiero poder comentar o responder una publicación ya creada para poder interactuar con los demás usuarios*
HU11 *Yo como usuario logueado quiero poder cambiar como aparece mi nombre de usuario para modificar la forma en la que aparecen mis post*

## 3. Interfaz

La interfaz es simple y en tonos claros, con solo un color más oscuro en un tono rojo, para dar contraste. El fondo tiene una imagen de un perro y un gato, en la misma paleta de colores, en un estilo de acuarela. El texto de toda la página se dejo en este color oscuro de la paleta para facilitar la lectura.

Los componentes Home, Login y Register tienen una estructura bastante similar, se encuentra nuestro logo, abajo un recuadro con el contenido, el título y los campos o botones según la acción que se quiera relizar. 

La sección que sí es distinta es nuestro Timeline. En este encontraremos primero una barra de navegación, que tiene un ícono de usuario y una bienvenida con el nombre del usuario, además de nuestro logo en tamaño más pequeño en la esquina superior derecha. Ya en la parte principal del Timeline, los posts se muestran en un diseño de lista hacia abajo. Cada post tiene el nombre de quién lo escribió y la hora, que se mostrará en formato local. En la parte inferior del post, aparece un botón de "me gusta". Si la imagen está en gris es porque el usuario no ha clickeado "me gusta" aún, si aparece en rojo es porque ya lo hizo. Al lado también se muestra un contador para saber cuántos usuarios ya han dado "me gusta". Además, en los posts que haya creado el mismo usuario que está visualizando la página, aparecerán dos opciones. Un botón para editar y otro para eliminar el mensaje. Con cada uno de estos se abre una ventana que permite ejecutar estas acciones o cancelar.

Como extra se implementó el componente Profile, al que se puede acceder haciendo click en el logo de usuario o en la bienvenida que se encuentra en el timeline. Este tiene casi la  misma estructura que el Login, solo que desde aquí se puede cambiar el nombre de usuario que se mostrará al hacer posts.

Otro detalle adicional que se implementó, es una sección "acerca de" a la que se puede acceder haciendo click en cualquiera de nuestros logos en toda la implementación. Al ejecutar esta acción se abrirá una ventana con una breve descripción de nuestro proyecto.

Se optó por un diseño minimalista y sencillo, que fuese lo suficientemente intuitivo para acceder de manera fácil y rápida a las publicaciones.

A continuación se exponen imágenes de todo lo descrito anteriormente.

Diseño final Home (pantalla grande):

![Diseño Final Dispositivo Pantalla Grande]()

Diseño final Home (pantalla celular o tablet):

![Diseño Final Dispositivo Pantalla Pequeña]()

Vista final Login:
![Vista final login]()

Vista final Register:
![Vista de mensaje sin input]()

Vista final Profile:
![Vista de búsqueda sin resultados]()

Vista de dialog para editar nombre de usuario:
![Vista de dropdown con filtro]()

Vista final Timeline:
![Vista de menú select para ordenar]()

Vista de dialog para editar post:
![Mensaje para contar pokemones en pantalla]()

Vista de dialog para eliminar post:
![Mensaje para contar pokemones en pantalla]()

Vista de acerca de:
![Mensaje para contar pokemones en pantalla]()

## 4. Unit Testing con Jest

Se ejecutaron tests unitarios con Jest, alcanzando coverage de 100% de statements, branches, funciones y lines. 
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


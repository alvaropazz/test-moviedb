# Documentación

- Este proyecto de React implementa el front end de una databse de películas.
- Hace uso del `fetch` api de Javascript para realizar peticiones a The Movie DB.
- La estructura del proyecto abstrae en componentes los elementos más importantes para evitar la repetición de código.
- Se hace uso de React Hooks para el manejo de estado, el cual se encuentra principalmente ubicado en `App.js` y desde ahí se lo distribuye a los componentes hijos.
- Se evita el uso de "magic strings" y se ha ubicado el copy que se utiliza en el proyecto en archivos `.json`.
- Para el carrousel se hizo uso de la librería `Swiper.js`.

## Instrucciones

- Para iniciar el proyecto:
  - Clonar el proyecto de github: `https://github.com/alvaropazz/test-moviedb.git`
  - Entrar al proyecto: `cd test-moviedb`
  - Instalar las dependencias necesarias: `yarn`
  - Inicializar el proyecto usando: `yarn start`

---

# Prueba Técnica Frontend Developers

Necesitamos que desarrolles una aplicación web utilizando React, que será nuestro catálogo de películas.
Para ello utilizaremos como fuente de información la API proporcionada por The Movie DB (TMDB). De acuerdo a su documentación, la API necesita un API_KEY que debes incluir en cada request. Para generar uno propio puedes registrarte y generar uno, pero para optimizar el tiempo te recomendamos usar este: e08815ebb9a68b5816a9e3ae26b751e1

## Recomendaciones

- Dada la baja complejidad del proyecto en términos de gestión de requests a TMDB Api, tienes la libertad de escoger cómo gestionar tu store de datos. Puedes usar Redux, Custom Hooks u otra alternativa. Sólo asegúrate de encontrar el equilibrio entre calidad y el tiempo requerido para su implementación.
- Usar Javascript, pues es el lenguaje que utilizamos en el día a día. Aunque no es restrictivo, puedes usar Typescript si prefieres, aunque no te dará puntos extras. Queremos ser transparentes en este punto, pues si bien es nuestro afán cambiarnos a Typescript hay distintas prioridades de negocio que hacen que esta transición sea un poco más lenta de lo que quisiéramos.
- Considere este diseño en [Figma](https://www.figma.com/file/lH444rtC3MDLmh1uilYbY7/Prueba-Tecnica-Frontend-Xepelin?node-id=0%3A1) como guía de lo que debe implementar. - Podrías usar GitHub para el manejo de control de versiones. Pero si prefieres puedes enviarnos un comprimido (sin el node_modules) para ahorrar tiempo.
- Debes asegurarte de seguir las buenas prácticas del lenguaje y de cada una de las librerías que uses (JS, React, Redux, Material-ui, etc).

## Descripción

El objetivo es construir una plataforma para ver información sobre películas que deberán aparecer listadas según ciertas clasificaciones: más populares [documentacion](https://developers.themoviedb.org/3/movies/get-popular-movies)
, mejor evaluadas [documentacion](https://developers.themoviedb.org/3/movies/get-top-rated-movies), próximos estrenos [documentacion](https://developers.themoviedb.org/3/movies/get-upcoming).
Además debe permitir visualizar información más detallada de cada película [documentación](https://developers.themoviedb.org/3/movies/get-movie-details). Considerar las pantallas Home y Movie del Figma como guías de diseño.

## Qué se evaluará:

- A nivel funcional:
  - Mostrar las listas de películas descritas anteriormente.
  - Uso de paginación en cada grupo.
  - Que se muestre el detalle de una película en un diálogo.
  - Cómo complementas las interfaces, en base a principios de diseños, para aquellos estados de la aplicación que no están cubiertos en el Figma (estados de carga y error).
- A nivel de código:
  - Construcción de componentes altamente reutilizables en función del diseño en Figma. - Manejo de props.
  - Construcción de acciones para consultar la información con TMDB.
  - Enfoque adoptado para no repetir los requests cuando la información ya se ha consultado.
  - Uso y adopción de buenas prácticas del framework UI escogido.
  - Siéntete libre de copiar los textos “lorem ipsum” del Figma. Lo que menos nos interesa es lo que diga sino que tan bueno eres replicando un diseño.
- A nivel de documentación:
  - Queremos saber si hay algo que no funcione de acuerdo a los requerimientos. - Queremos saber si tuviste que sacrificar calidad en función del tiempo, ¿Qué cosa particularmente sacrificaste?, ¿Cómo hubiera sido la mejor versión de tu desarrollo si contaras con más tiempo?.
  - Si no pudiste construir los componentes de acuerdo al diseño, queremos saber qué pasó: ¿Fue por el tiempo?, ¿La personalización del framework UI es muy compleja?, etc.
    Comentarios finales
    Queremos que para esta prueba inviertas a lo sumo 2.5 horas de tu tiempo más 15 minutos adicionales para que documentes tu solución: los problemas, lo que hubieras hecho mejor, lo que no te resultó y por qué. Esta documentación va a complementar el código que enviaste y nos dará una visión mucho más amplia de tu propuesta de solución. No es sólo lo alcanzaste a desarrollar, sino que el cómo hubieras resuelto el problema con tiempo adicional.
    No obstante, si no quedas conforme con la calidad de lo enviado, siéntete libre de continuar desarrollando y nosotros felices lo revisamos. Lo único que te pedimos es que cuando nos envíes la primera entrega nos indiques que seguirás mejorando tu propuesta de modo de tenerlo en cuenta en el proceso. Considera que el plazo máximo para mejoras no podrá superar las 24 horas posteriores a la entrega. Cómo te decíamos la documentación será un excelente complemento.
    ¡Te deseamos un buen codeo!

---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

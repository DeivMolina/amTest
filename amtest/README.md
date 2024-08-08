# Proyecto AMTest

## Descripción

Este proyecto es una aplicación web basada en React y Next.js que permite a los usuarios interactuar con personajes del universo de Harry Potter. Los usuarios pueden agregar personajes a una lista de favoritos, ver detalles de los personajes.

## Requisitos

- Node.js (v14.x o superior)
- npm (v6.x o superior)

## Instalación

1. Clona el repositorio en tu máquina local:

git clone https://github.com/DeivMolina/amTest.git

2. Navega al directorio del proyecto:

cd amtest

3. Instala las dependencias del proyecto:

npm install

# Levantar el Proyecto

1. Para levantar el servidor de desarrollo, ejecuta:

npm run dev

2. Abre tu navegador y navega a http://localhost:3000 para ver la aplicación en funcionamiento.

# Correr Pruebas Unitarias

1. Para ejecutar las pruebas unitarias, utiliza el siguiente comando:

# Problemas Conocidos
Error al Ejecutar Pruebas Unitarias
Al ejecutar las pruebas unitarias con npm test, se encuentra el siguiente error:

"Jest encountered an unexpected token

Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

By default "node_modules" folder is ignored by transformers.

Here's what you can do:
 • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
 • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
 • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
 • If you need a custom transformation specify a "transform" option in your config.
 • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

You'll find more details and examples of these config options in the docs:
https://jestjs.io/docs/configuration
For information about custom transformations, see:
https://jestjs.io/docs/code-transformation

Details:

SyntaxError: Unexpected token '<'"

# Intenté solucionar el error, en el proyecto y encontré varias posibles causas. Primero, la configuración de Babel y Jest podría no estar bien alineada, También, los módulos en node_modules pueden no estar siendo transformados correctamente por Jest. Además, revisé que todas las importaciones y exportaciones en los archivos de prueba fueran correctas y compatibles con nuestras versiones de Babel y Jest. A pesar de mis esfuerzos y de revisar la documentación, no logré resolver el problema completamente en esta fase del proyecto.


# Preguntas

1. ¿Qué es lo que más te gustó de tu desarrollo?

    # Me gusta mucho pasar de un maquetado a una implementacion Web, ver como cada pieza/componente se va ajustando a lo que estoy observando, es un momento donde me desafio mucho a mi mismo. 

2. Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras hecho?

    # Primeramente investigar mas a fondo las pruebas unitarias, ya que es un area que desconozco a nivel profesional, me siento satisfecho haber intentado y llevarme un aprendizaje, ademas de que me hubiera gustado pulis los detalles esteticos del sitio, algun espacio en blanco que pudo haber quedado, mejora de animaciones etc.

3. Descríbenos un pain point o bug con el que te hayas encontrado y como lo solucionaste.

# Originalmente, use Redux Saga para gestionar efectos secundarios, pero me provocaba bastantes problemas, me duplicaba los personajes y cuando queria desmarcar un personaje como favorito, colapsaba el proyecto entonces decidi investigar y vi que Redux Thunks era mas facil de configurar que Redux Saga, a pesar de que no estaba mal configurada, gastar tiempo en descubrir la incidencia, no era algo que iba hacer, asi que decidi cambiar a Redux Thunks para simplificar todo. Retire las sagas, agregamos thunks en favoritesSlice.ts y characters.ts, y actualice los componentes para usarlos. Aunque esto simplificó el código y funciono, las pruebas unitarias aún fueron un desafío que no pude resolver del todo. Fue mi primer intento con estas pruebas, y aunque no solucioné todo, creo que con más tiempo y recursos lo habría logrado.



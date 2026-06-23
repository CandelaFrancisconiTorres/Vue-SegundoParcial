# Proyecto Aplicaciones para Dispositivos Móviles

## Integrantes

- Candela Francisconi Torres
- Florencia Almirón
- Franco Ezequiel Amadio

## Descripción del proyecto

Gamefy es una aplicación web desarrollada con Vue 3 que simula una tienda de videojuegos. Permite explorar un catálogo de juegos, buscarlos, filtrarlos, agregarlos a un carrito de compras y realizar un formulario de contacto. La aplicación no cuenta con backend; los datos están definidos localmente y el carrito se persiste mediante LocalStorage.

## Tecnologías utilizadas

- Vue 3
- Vite
- Vue Router
- JavaScript
- CSS
- LocalStorage

## Instalación y ejecución

Clonar o descomprimir el proyecto y ejecutar los siguientes comandos desde la carpeta raíz:

```bash
npm install
npm run dev
```

## Funcionalidades

- Visualización del catálogo de videojuegos con imagen, descripción, categoría y precio.
- Búsqueda de juegos por nombre o categoría en tiempo real.
- Ordenamiento por nombre (A→Z, Z→A) y por precio (ascendente y descendente).
- Carrito de compras con posibilidad de agregar, eliminar y vaciar productos.
- Cálculo automático del total del carrito, con descuento aplicado a juegos en oferta.
- Persistencia del carrito mediante LocalStorage: los datos se mantienen al recargar la página.
- Navegación entre vistas (Inicio, Catálogo, Nosotros, Contacto) mediante Vue Router.
- Formulario de contacto con validación de campos: nombre, email y mensaje.

## Estructura del proyecto

```
src/
├── components/     componentes reutilizables (Header, Footer, GameCard, CartPanel, SearchFilter)
├── views/          vistas manejadas por Vue Router (HomeView, ProductosView, NosotrosView, ContactoView, NotFoundView)
├── router/         configuración de rutas de la aplicación
├── data/           datos estáticos de los juegos (juegos.js)
└── assets/         hojas de estilo y recursos gráficos

public/             imágenes de los juegos y archivos estáticos servidos directamente
```

## Ejecución

La aplicación se ejecuta en entorno de desarrollo con Vite. Una vez iniciada, estará disponible en `http://localhost:5173`. No requiere configuración adicional ni conexión a un servidor externo.
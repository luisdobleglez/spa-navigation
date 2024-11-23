# **Span Navigation**  
Una clase de JavaScript sencilla para crear una navegación suave en páginas de una sola sección (SPA). Ideal para proyectos donde queráis transiciones limpias y un diseño dinámico.

## **Características**
- **Navegación dinámica**: Oculta y muestra secciones con una transición suave.
- **Configuración sencilla**: Define el menú, la sección inicial y la duración de la transición.
- **Cambio de fondo dinámico**: Cambia el color del fondo según el estilo de cada sección.
- **Estilos automáticos**: Aplica estilos básicos automáticamente, personalizables.

---

## **Requisitos**
- Navegador moderno con soporte para JavaScript ES6.

---

## **Instalación**

1. Descargad el archivo `span-navigation.js` desde este repositorio.
2. Incluid el archivo en vuestro proyecto:

```html
<script src="span-navigation.js"></script>

---

## **Uso básico**
Uso básico
Cread un menú con enlaces a las secciones que queréis mostrar:

````html

<div id="menu">
    <a href="#seccion1">Sección 1</a>
    <a href="#seccion2">Sección 2</a>
</div>

<div id="seccion1" class="pg" style="background-color: red;">Contenido de la Sección 1</div>
<div id="seccion2" class="pg" style="background-color: blue;">Contenido de la Sección 2</div>
Inicializad la navegación en vuestro archivo JavaScript:

javascript
Copiar código
new Navegacion({
    enlaces: '#menu',
    inicio: '#seccion1',
    duracionTransicion: 1000
});

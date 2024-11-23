class Navegacion {
    constructor({ enlaces = '#menu', inicio = '', duracionTransicion = 5000 } = {}) {
        this.enlaces = enlaces;
        this.inicio = inicio;
        this.duracionTransicion = duracionTransicion;
        this.establecerEstilos();
        this.navegar();
    }

    establecerEstilos() {
        const estilos = document.querySelector('head style') || document.createElement('style');
        estilos.innerHTML += 'body{background-color:#000}.pg { min-height: 100vh; transition: all ' + this.duracionTransicion + 'ms ease; }';
        if (!estilos.parentNode) document.head.appendChild(estilos);
    }

    navegar() {
        const links = document.querySelectorAll(`${this.enlaces} a`);

        // Función para ocultar todos los elementos enlazados
        const resetear = () => {
            links.forEach(link => {
                const element = document.getElementById(link.getAttribute('href').slice(1));
                if (element) {
                    element.style.display = 'none';
                    element.style.opacity = 0; // Asegúrate de que la opacidad sea 0 al ocultar
                }
            });
        };

        // Ocultar todos los elementos y mostrar solo el inicial (si se especifica)
        resetear();
        const inicial = document.getElementById(this.inicio.slice(1));
        if (inicial) {
            inicial.style.display = 'block';
            inicial.style.opacity = 0; // Asegúrate de que la opacidad sea 0 al mostrar
            requestAnimationFrame(() => {
            inicial.style.opacity = 1; // Cambiar opacidad después de mostrar
            });
        } else if (this.inicio) {
            console.warn(`Elemento con ID ${this.inicio.slice(1)} no encontrado en el DOM.`);
        }

        // Añadir evento a cada enlace para mostrar el elemento correspondiente
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Evitar el cambio de hash en la URL

                resetear(); // Ocultar todos los elementos primero
                const targetId = link.getAttribute('href').slice(1);
                const targetElement = document.getElementById(targetId);

                const fondo = window.getComputedStyle(targetElement).backgroundColor
                document.body.style.backgroundColor = fondo;
                if (targetElement) {
                    targetElement.style.display = 'block'; // Mostrar el elemento específico
                    targetElement.style.opacity = 0; // Inicialmente ocultar

                    // Usar requestAnimationFrame para la transición
                    requestAnimationFrame(() => {
                        targetElement.style.opacity = 1; // Cambiar opacidad después de mostrar
                    });
                }
                console.log('Este es el elemento pulsado: ' + targetId);
            });
        });
    }
}

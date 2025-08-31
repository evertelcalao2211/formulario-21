// Header Dinámico - Funcionalidad

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const header = document.getElementById('header');
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');
    
    // Función para cambiar el estilo del header al hacer scroll
    function scrollHeader() {
        // Cuando el scroll es mayor a 50 viewport height
        if (window.scrollY >= 50) {
            header.classList.add('header-transparent');
        } else {
            header.classList.remove('header-transparent');
        }
    }
    window.addEventListener('scroll', scrollHeader);
    
    // Mostrar/ocultar menú móvil
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }
    
    // Ocultar menú móvil
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }
    
    // Cerrar menú al hacer clic en un enlace (solo en móviles)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Solo si el menú está visible (en móviles)
            if (navMenu.classList.contains('show-menu')) {
                navMenu.classList.remove('show-menu');
            }
        });
    });
});
// =========================================================
// 1. LÓGICA PARA OCULTAR EL BOTÓN DE PÁGINA ANTERIOR
// =========================================================

// Obtiene la parte final de la URL, por ejemplo, "index.html"
const path = window.location.pathname.split('/').pop();

// Si la URL termina en "index.html" o está vacía (página principal), oculta el botón
if (path === 'index.html' || path === '') {
  const backButton = document.getElementById('backButton');
  if (backButton) {
    backButton.style.display = 'none';
  }
}


// =========================================================
// 2. LÓGICA PARA EL MENÚ HAMBURGUESA (Añadido)
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const navLinks = document.getElementById('nav-links');

    if (hamburgerIcon && navLinks) {
        hamburgerIcon.addEventListener('click', () => {
            // Alterna la clase 'menu-activo' en el contenedor de enlaces (para desplegar el menú)
            navLinks.classList.toggle('menu-activo');
            
            // Cambia el ícono de barras (fa-bars) a una 'X' (fa-times)
            hamburgerIcon.classList.toggle('fa-bars');
            hamburgerIcon.classList.toggle('fa-times');
        });

        // Opcional: Cerrar el menú si se hace clic en un enlace (útil en móvil)
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                // Solo si el menú está activo, lo cerramos
                if (navLinks.classList.contains('menu-activo')) {
                    navLinks.classList.remove('menu-activo');
                    hamburgerIcon.classList.remove('fa-times');
                    hamburgerIcon.classList.add('fa-bars');
                }
            });
        });
    }
});
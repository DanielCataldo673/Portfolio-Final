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
// 2. LÓGICA PARA EL MENÚ HAMBURGUESA (Modificado)
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const navLinks = document.getElementById('nav-links');
    // 1. Obtener el elemento del logo
    const navLogo = document.querySelector('.nav-logo'); 

    if (hamburgerIcon && navLinks && navLogo) {
        hamburgerIcon.addEventListener('click', () => {
            // Alterna la clase 'menu-activo' en el contenedor de enlaces (para desplegar el menú)
            navLinks.classList.toggle('menu-activo');
            
            // 2. Alterna una clase activa en el logo (si es necesario para cambiar estilos, color o visibilidad)
            navLogo.classList.toggle('logo-activo');
            
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
                    navLogo.classList.remove('logo-activo'); // 3. Quita la clase activa del logo al cerrar
                    hamburgerIcon.classList.remove('fa-times');
                    hamburgerIcon.classList.add('fa-bars');
                }
            });
        });
    }
});
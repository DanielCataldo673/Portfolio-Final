

// Obtiene la parte final de la URL, por ejemplo, "index.html"
const path = window.location.pathname.split('/').pop();

// Si la URL termina en "inicio.html", oculta el botón
if (path === 'index.html' || path === '') {
  const backButton = document.getElementById('backButton');
  if (backButton) {
    backButton.style.display = 'none';
  }
}



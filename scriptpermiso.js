document.addEventListener('dblclick', function(event) {
    // Asegúrate de que el doble clic es sobre un elemento que contiene texto
    if (event.target.matches('p, h1, h2, h3, h4, h5, h6, span, div')) {
        alert('Necesitas permiso de administrador para poder editar este texto.');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const requiresPermission = document.querySelectorAll('.requires-permission');
    requiresPermission.forEach(element => {
      element.addEventListener('click', function (event) {
        event.preventDefault();
        alert('Necesita permiso de usuario');
      });
    });
  });
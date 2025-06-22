document.addEventListener('DOMContentLoaded', () => {
    // Redirección al hacer clic en "CATALOGO"
    const catalogoBtn = document.querySelectorAll('.sidebar nav ul li')[0];
    if (catalogoBtn) {
        catalogoBtn.addEventListener('click', function() {
            window.location.href = '../catalogo/catalogo.html';
        });
    }
    // Redirección a productos
    const productosBtn = document.querySelectorAll('.sidebar nav ul li')[1];
    if (productosBtn) {
        productosBtn.addEventListener('click', function() {
            window.location.href = '../productos/productos.html';
        });
    }
    // Opcional: Manejo de subida de imagen (solo muestra el nombre)
    const fileInput = document.querySelector('.gallery-upload input[type="file"]');
    if (fileInput) {
        fileInput.addEventListener('change', function() {
            if (fileInput.files.length > 0) {
                alert('Imagen seleccionada: ' + fileInput.files[0].name);
            }
        });
    }
    // Cancelar vuelve a productos
    const cancelBtn = document.querySelector('.btn-cancel');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
            window.location.href = '../productos/productos.html';
        });
    }
});
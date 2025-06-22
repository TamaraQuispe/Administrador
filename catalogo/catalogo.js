document.addEventListener('DOMContentLoaded', () => {
    // Redirección al hacer clic en "TODOS LOS PRODUCTOS"
    const productosBtn = document.querySelectorAll('.sidebar nav ul li')[1];
    if (productosBtn) {
        productosBtn.addEventListener('click', function() {
            window.location.href = '../productos/productos.html';
        });
    }

    // Redirección a Banner
    const bannerBtn = document.querySelectorAll('.sidebar nav ul li')[2];
    if (bannerBtn) {
        bannerBtn.addEventListener('click', function() {
            window.location.href = '../Banner/banner.html';
        });
    }

    // Mostrar modal al hacer clic en el lápiz
    document.querySelectorAll('.edit-category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('editCategoryModal').classList.add('active');
        });
    });

    // Elegir imagen
    document.getElementById('chooseImageBtn').addEventListener('click', () => {
        document.getElementById('categoryImageInput').click();
    });

    // Cerrar modal
    document.getElementById('cancelEditCategory').addEventListener('click', () => {
        document.getElementById('editCategoryModal').classList.remove('active');
    });

    // Cerrar modal al hacer clic fuera del contenido
    document.getElementById('editCategoryModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('editCategoryModal')) {
            document.getElementById('editCategoryModal').classList.remove('active');
        }
    });

    // Guardar (solo ejemplo)
    document.getElementById('editCategoryForm').addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('editCategoryModal').classList.remove('active');
        alert('Categoría guardada (ejemplo)');
    });

    // Añadir nueva categoría (demo)
    const addBtn = document.querySelector('.add-btn');
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            alert('Añadir nueva categoría (demo)');
        });
    }

    // Eliminar categoría (demo)
    document.querySelectorAll('.categories-list .fa-trash').forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Eliminar categoría (demo)');
        });
    });

});

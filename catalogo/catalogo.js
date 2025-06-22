document.addEventListener('DOMContentLoaded', () => {
    // Actualiza los contadores de productos por categoría
    const counts = {};
    document.querySelectorAll('.product-card').forEach(card => {
        const cat = card.getAttribute('data-category');
        counts[cat] = (counts[cat] || 0) + 1;
    });
    document.querySelectorAll('.cat-count').forEach(span => {
        const cat = span.getAttribute('data-category');
        span.textContent = counts[cat] || 0;
    });

    // Filtrado de productos al hacer clic en la imagen de la categoría
    document.querySelectorAll('.cat-color-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const cat = this.getAttribute('data-category');
            document.querySelectorAll('.product-card').forEach(card => {
                card.style.display = (card.getAttribute('data-category') === cat) ? '' : 'none';
            });
        });
    });

    // Mantén los eventos de editar/eliminar igual
    document.querySelectorAll('.categories-list .fa-pen').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            alert('Editar categoría (demo)');
        });
    });
    document.querySelectorAll('.categories-list .fa-trash').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            alert('Eliminar categoría (demo)');
        });
    });
    document.querySelector('.add-btn').addEventListener('click', () => {
        alert('Añadir nueva categoría (demo)');
    });

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

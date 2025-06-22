document.addEventListener('DOMContentLoaded', function() {
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
});
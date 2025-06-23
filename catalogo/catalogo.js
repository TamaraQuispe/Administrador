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

    // Mostrar todos los productos al hacer clic en "Categories"
    const categoriesTitle = document.querySelector('.categories-title');
    if (categoriesTitle) {
        categoriesTitle.addEventListener('click', () => {
            document.querySelectorAll('.product-card').forEach(card => {
                card.style.display = '';
            });
        });
    }

    // Editar y eliminar categorías (demo)
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
    const addBtn = document.querySelector('.add-btn');
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            alert('Añadir nueva categoría (demo)');
        });
    }

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

    // Redirección a Catalogo
    const catalogoBtn = document.querySelectorAll('.sidebar nav ul li')[0];
    if (catalogoBtn) {
        catalogoBtn.addEventListener('click', function() {
            window.location.href = '../catalogo/catalogo.html';
        });
    }

    // Redirección a Anuncios
    const anuncioBtn = document.querySelectorAll('.sidebar nav ul li')[3];
    if (anuncioBtn) {
        anuncioBtn.addEventListener('click', function() {
            window.location.href = '../Anuncios/anuncio.html';
        });
    }

    // Menú Admin Header
    const adminBtn = document.getElementById('adminMenuBtn');
    const adminDropdown = document.getElementById('adminDropdown');
    if (adminBtn && adminDropdown) {
        adminBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            adminDropdown.classList.toggle('active');
        });
        document.addEventListener('click', () => {
            adminDropdown.classList.remove('active');
        });
        adminDropdown.addEventListener('click', (e) => e.stopPropagation());
    }

    // Funcionalidad para Cambiar Contraseña y Cerrar Sesión
    const cambiarBtn = document.querySelector('.admin-dropdown-item.cambiar');
    const cerrarBtn = document.querySelector('.admin-dropdown-item.cerrar');
    if (cambiarBtn) {
        cambiarBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = '../Cambiar-Contraseña/cambiar-contraseña.html';
        });
    }
    if (cerrarBtn) {
        cerrarBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = '../Loggin/loggin.html';
        });
    }

    // Funcionalidad de búsqueda y notificaciones
    // Búsqueda
    const searchIcon = document.getElementById('searchIcon');
    const searchBox = document.getElementById('searchBox');
    const searchInput = document.getElementById('searchInput');
    if (searchIcon && searchBox && searchInput) {
        searchIcon.addEventListener('click', () => {
            if (searchBox.style.display === 'none' || searchBox.style.display === '') {
                searchBox.style.display = 'block';
                searchInput.focus();
            } else {
                searchBox.style.display = 'none';
            }
        });

        searchInput.addEventListener('input', () => {
            const value = searchInput.value.trim().toLowerCase();
            document.querySelectorAll('.product-card').forEach(card => {
                const title = card.querySelector('.product-title').textContent.toLowerCase();
                card.style.display = title.includes(value) ? '' : 'none';
            });
        });
    }

    // Notificaciones
    const notifIcon = document.getElementById('notifIcon');
    const notifPanel = document.getElementById('notifPanel');
    if (notifIcon && notifPanel) {
        notifIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            notifPanel.style.display = notifPanel.style.display === 'none' || notifPanel.style.display === '' ? 'block' : 'none';
        });
        document.addEventListener('click', () => {
            notifPanel.style.display = 'none';
        });
         notifPanel.addEventListener('click', e => e.stopPropagation());
    }
});
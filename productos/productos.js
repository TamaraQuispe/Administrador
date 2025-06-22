// Datos de ejemplo: 63 productos
const products = Array.from({ length: 63 }, (_, i) => ({
    name: `Producto ${i + 1}`,
    category: ['PANES', 'CUCHARABLES', 'TORTAS', 'POSTRES'][i % 4],
    price: `S/${(Math.random() * 150 + 1).toFixed(2)}`,
    image: `https://placehold.co/60x60?text=P${i + 1}`
}));

const PRODUCTS_PER_PAGE = 21;
const TOTAL_PAGES = Math.ceil(products.length / PRODUCTS_PER_PAGE);

function renderProducts(page = 1) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    const start = (page - 1) * PRODUCTS_PER_PAGE;
    const end = start + PRODUCTS_PER_PAGE;
    const pageProducts = products.slice(start, end);

    pageProducts.forEach((prod, idx) => {
        grid.innerHTML += `
        <div class="product-card" data-index="${start + idx}">
            <img src="${prod.image}" alt="${prod.name}">
            <div class="product-info">
                <div>
                    <h3>${prod.name}</h3>
                    <span class="category">${prod.category}</span>
                </div>
                <span class="price">${prod.price}</span>
            </div>
            <button class="more-btn" type="button">
                <span class="material-icons">more_horiz</span>
            </button>
            <div class="product-menu">
                <button type="button">EDITAR</button>
                <button type="button">DUPLICAR</button>
                <button type="button">ELIMINAR</button>
            </div>
        </div>
        `;
    });

    setupProductMenus();
}

function renderPagination(currentPage = 1) {
    const pag = document.getElementById('pagination');
    pag.innerHTML = '';
    for (let i = 1; i <= TOTAL_PAGES; i++) {
        pag.innerHTML += `<button class="page${i === currentPage ? ' active' : ''}" data-page="${i}">${i}</button>`;
    }
}

function setupPagination() {
    document.getElementById('pagination').addEventListener('click', e => {
        if (e.target.classList.contains('page')) {
            const page = Number(e.target.dataset.page);
            renderProducts(page);
            renderPagination(page);
        }
    });
}

// ...existing code...

function setupProductMenus() {
    function closeAllMenus() {
        document.querySelectorAll('.product-menu.active').forEach(menu => {
            menu.classList.remove('active');
        });
    }
    document.querySelectorAll('.product-card').forEach(card => {
        const moreBtn = card.querySelector('.more-btn');
        const menu = card.querySelector('.product-menu');
        moreBtn.onclick = (e) => {
            e.stopPropagation();
            closeAllMenus();
            menu.classList.toggle('active');
        };
        // Redirección al editar
        const editBtn = menu.querySelector('button:nth-child(1)');
        if (editBtn) {
            editBtn.onclick = (e) => {
                e.stopPropagation();
                window.location.href = '../DetallesProductos/detalles.html';
            };
        }
    });
    document.addEventListener('click', closeAllMenus);
    document.querySelectorAll('.product-menu').forEach(menu => {
        menu.onclick = (e) => e.stopPropagation();
    });
}

// ...existing code...

// Redirección al hacer clic en "CATALOGO"
document.addEventListener('DOMContentLoaded', () => {
    const catalogoBtn = document.querySelectorAll('.sidebar nav ul li')[0];
    if (catalogoBtn) {
        catalogoBtn.addEventListener('click', function() {
            window.location.href = '../catalogo/catalogo.html';
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // ...otros códigos...

    const addProductBtn = document.querySelector('.add-product-btn');
    if (addProductBtn) {
        addProductBtn.addEventListener('click', function() {
            window.location.href = '../DetallesProductos/agregar-producto.html';
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Redirección a Banner
    const bannerBtn = document.querySelectorAll('.sidebar nav ul li')[2];
    if (bannerBtn) {
        bannerBtn.addEventListener('click', function() {
            window.location.href = '../Banner/banner.html';
        });
    }
});

// Inicialización
renderProducts(1);
renderPagination(1);
setupPagination();
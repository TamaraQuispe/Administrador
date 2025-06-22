// Ejemplo de interacción para botones de editar/eliminar categoría
document.querySelectorAll('.categories-list .fa-pen').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Editar categoría (demo)');
    });
});
document.querySelectorAll('.categories-list .fa-trash').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Eliminar categoría (demo)');
    });
});
document.querySelector('.add-btn').addEventListener('click', () => {
    alert('Añadir nueva categoría (demo)');
});
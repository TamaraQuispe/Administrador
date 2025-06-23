document.addEventListener('DOMContentLoaded', () => {
    // Guardar nueva contraseña (solo ejemplo visual)
    document.getElementById('changePasswordForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const nueva = document.getElementById('nueva').value;
        const confirmar = document.getElementById('confirmar').value;
        if (nueva !== confirmar) {
            alert('Las contraseñas no coinciden');
            return;
        }
        alert('Contraseña cambiada correctamente (ejemplo visual)');
        window.location.href = 'loggin.html';
    });

    // Cancelar vuelve al login
    document.getElementById('cancelBtn').addEventListener('click', function() {
        window.location.href = 'loggin.html';
    });
});
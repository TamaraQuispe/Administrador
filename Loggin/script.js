document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Valores válidos de ejemplo
    const validUser = "admin";
    const validPassword = "1234";

    const user = document.getElementById('user').value.trim();
    const password = document.getElementById('password').value.trim();

    if (user === "" || password === "") {
        alert("Por favor, completa ambos campos.");
        return;
    }

    if (user === validUser && password === validPassword) {
        alert("¡Login exitoso!");
        window.location.href = '../Catalogo/catalogo.html'; 
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});
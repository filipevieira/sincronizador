// login.js
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulação de autenticação (substitua por lógica real)
    const validUsername = 'admin';
    const validPassword = 'admin';

    if (username === validUsername && password === validPassword) {
        window.location.href = 'public/dashboard.html'; // Redireciona para a página protegida
    } else {
        alert('Usuário ou senha inválidos.');
    }
});

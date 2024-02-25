const express = require('express');
const path = require('path');

const app = express();

// Define a pasta 'public' como o diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para servir a página de login
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Rota para autenticação (simulação)
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simulação de autenticação (substitua por lógica real)
    const validUsername = 'admin';
    const validPassword = 'admin';

    if (username === validUsername && password === validPassword) {
        res.redirect('/dashboard.html'); // Redireciona para a página protegida
    } else {
        res.status(401).send('Usuário ou senha inválidos.');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

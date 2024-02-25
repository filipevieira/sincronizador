const express = require('express');
const app = express();
const path = require('path');

// Define a pasta 'public' como o diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para servir a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define a porta do servidor como 1050
const PORT = process.env.PORT || 1050;

// Inicia o servidor Node.js
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
// backend.js

const express = require('express');
const app = express();
const port = 3333; // Escolha uma porta diferente do servidor frontend

// Exemplo de endpoint para a página Início
app.get('/backend/Index.json', (req, res) => {
    const data = { /* Dados para a página Início */ };
    res.json(data);
});

// Inicie o servidor do backend
app.listen(port, () => {
    console.log(`Backend rodando em http://localhost:${port}`);
});

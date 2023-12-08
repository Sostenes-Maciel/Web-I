//import express from "express"
//import { cors } from './node_modules';
const produtos = []

// Importando módulos e configurando variáveis
const cors = require('cors')
const express = require('express'); 
const path = require('path'); 
const app = express(); 
const port = 3000; 

// Servindo arquivos estáticos, configurando CORS e JSON parsing
app.use(cors()); // Habilitando CORS para permitir requisições de diferentes origens
app.use(express.static(path.join(__dirname, 'public'))); // Configurando para servir arquivos estáticos na pasta 'public'
app.use(express.json()); // Configurando para analisar o corpo das requisições como JSON

// Rota para servir a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Index.html')); // Enviando o arquivo HTML da página inicial
});

// Rota para obter a lista de produtos (GET)
app.get('/api/produtos', (req, res) => {
    return res.status(200).json(produtos); // Respondendo com a lista de produtos no formato JSON
});

// Rota para adicionar produtos ao carrinho (POST)
app.post('/api/produtos', (req, res) => {
    const produtos = req.body; // Obtendo dados do corpo da requisição (provavelmente um produto)
    console.log('Produto adicionado ao carrinho:', produto); // Exibindo informações do produto no console
    console.log('Dados do carrinho recebidos:', produtos); // Exibindo dados do carrinho no console
});

// Rota para lidar com a solicitação do ícone favicon
app.get('/favicon.ico', (req, res) => res.status(204)); // Respondendo com o status 204 (No Content) para evitar erro relacionado ao ícone

app.listen(port, () => {
    console.log(`Servidor levantado em http://localhost:${port}`); 
});

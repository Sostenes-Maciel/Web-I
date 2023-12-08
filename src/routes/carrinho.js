//import { Router } from "express";
const { Router } = require('express');

import {carrinhoRouter} from "./scr/routes/carrinho.js"

const carrinhoRouter = Router();

const carrinho = []

carrinhoRouters.post("/api/carrinho", (requisicao, resposta) => {
    const dados = requisicao.body

    for (let x = 0; x < dados.length; x++) { 

        carrinho.push(dados[x])
    }

    console.log(dados)
  
    return resposta.status(204).json();
})

carrinhoRouters.get("/api/carrinhos", (requisicao, resposta) => {
    return resposta.status(200). json();
})

carrinhoRouters.get("/api/carrinhos/:id", (requisicao, resposta) => {

    const routeID = requisicao.params.id

    for (let x = 0; x < carrinho.length; x++) {
        if (carrinho[x].id === routeID) {
            return resposta.status(200).json(carrrinho[x])
        }
    }
    return resposta.status(404).json();
})




//import { Router } from "express"


const produtos = []
const { Router } = require('express');

import {produtosRoutes} from "./src/routes/produtos.js"


export const produtosRoutes = Router ()

app.get("/api/produtos", (_, res) => {
    return res.status(200).json(produtos)
})

produtosRoutes.get("/api/produtos", (_, res) => {
    return res.status(200).json(produtos);
});


    
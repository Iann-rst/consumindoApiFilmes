# Consumir API

## API

## frontend

Consumir API

- [x] Posso utilizar o fetch/axios para consumir a API;
- [x] Requisição baseada em promessa: Promise - Async/await;

## backend node.js
Consumir API

- [x] Utilizar o Express;
- [x] Cors: liberar o acesso do frontend para o backend (diferentes endereços consumindo a api);
- [x] usar axios (fetch não funciona no backend, então utiliza axios para realizar o fetch dos dados de uma API);

## Backend

inicia a criação do backend 
```npm init -y ```

```npm i express, axios, cors```

server.js

```
const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/', async function(req, res) {


  //backend comunica com a API
  const response = await axios('https://sujeitoprogramador.com/r-api/?api=filmes/');
  const dados = response.data;

  return res.json(dados)
})

app.listen('7000')

```
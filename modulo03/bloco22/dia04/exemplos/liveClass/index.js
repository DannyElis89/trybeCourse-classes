const express = require('express');
const cors = require('cors');

const app = express(); // Define gerenciamento da aplicação através do express

app.use(express.json()); // define formato de dados utilizado pela aplicação como json;

app.use(cors()); // gerencia quais endereços IP's podem fazer requisições ao back end;

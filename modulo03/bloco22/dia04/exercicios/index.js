const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/exercicios', require('./routes/index'));

app.listen(3000, () => console.log('Aplicação rodando na porta 3000.'));

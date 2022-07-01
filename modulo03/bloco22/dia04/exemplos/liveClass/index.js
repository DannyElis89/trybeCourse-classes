const express = require('express');
const cors = require('cors');

const app = express(); // Define gerenciamento da aplicação através do express

app.use(express.json()); // define formato de dados utilizado pela aplicação como json;

app.use(cors()); // gerencia quais endereços IP's podem fazer requisições ao back end;

app.use('/sistema', require('./routes/index'));
// '/sistema': permite adicionar um valor/nome fixo à URL nas rotas chamadas pela API;
// 'require('./routes/index')': local onde as rotas serão desenvolvidas;

app.listen(3000, () => console.log('Aplicação rodando na porta 3000.'));

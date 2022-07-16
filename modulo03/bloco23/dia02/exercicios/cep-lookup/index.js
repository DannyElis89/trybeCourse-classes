require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes');
const ErrorMiddlewares = require('./middlewares/error');

app.use(express.json());
app.use(routes);

app.use(ErrorMiddlewares);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

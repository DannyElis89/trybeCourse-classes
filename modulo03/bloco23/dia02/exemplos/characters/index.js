const express = require('express');
const routes = require('./routes');
const middlewares = require('./middlewares');
const app = express();

app.use(express.json());

app.use(routes);

app.use(middlewares.error);

const PORT = process.env.PORT || 3009;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

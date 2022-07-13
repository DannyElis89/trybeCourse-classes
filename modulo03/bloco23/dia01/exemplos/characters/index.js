const express = require('express');

const app = express();

app.use(express.json());

app.use('/characters', require('./routes/characters'));
app.use('/creators', require('./routes/creators'));

const PORT = process.env.PORT || 3009;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

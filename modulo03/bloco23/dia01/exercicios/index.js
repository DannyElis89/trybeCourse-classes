const express = require('express');
const app = express();
app.use(express.json());

app.use('/user', require('./routes/user'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

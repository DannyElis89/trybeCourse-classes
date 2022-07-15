const express = require('express');
const authorController = require('./controllers/AuthorsControllers');

const app = express();

app.use(express.json());

app.get('/authors', authorController.getAll);

app.get('/authors/:id', authorController.findById);

app.post('/authors', authorController.createAuthor);
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});

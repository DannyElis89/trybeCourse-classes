const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = 3000;

const Authors = require('./models/Author');
const Book = require('./models/Book');

app.get('/authors', async (req, res) => {
  const authors = await Authors.getAll();

  return res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Authors.findById(id);

  if(!author) return res.status(404).json({message: 'Not found'});

  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  if (!Authors.isValid(first_name, middle_name, last_name)) return res.status(400).json({message: 'Dados inválidos'});

  await Authors.createAuthor(first_name, middle_name, last_name);
  res.status(201).json({ message: 'Autor criado com sucesso'})
})


app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = (author_id)
  ? await Book.getByAuthorId(author_id)
  : await Book.getAll();

  res.status(200).json(books);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if (!await Book.isValid(title, author_id)) return res.status(400).json({ message: 'Dados inválidos' });

  await Book.createBook(title, author_id);

  res.status(201).json({ message: 'Livro criado com sucesso! '});
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.getById(id);

  if (!book) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json(book);
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));

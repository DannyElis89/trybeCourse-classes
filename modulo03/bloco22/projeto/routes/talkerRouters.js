const router = require('express').Router();

const {
  readFiles,
  writeFiles,
  updateContent,
} = require('../helpers');

const {
  validaToken,
  validaName,
  validaAge,
  validaTalker,
  validaWatched,
  validaRate,
} = require('../middleware/geraTalker');

const path = './talker.json';

// rotas '/talker/'

router.get('/', async (_request, response, _next) => {
  const allTalkers = await readFiles(path) || [];

  response.status(200).json(allTalkers);
});

router.post(
  '/',
  validaToken,
  validaName,
  validaAge,
  validaTalker,
  validaWatched,
  validaRate,
  async (req, res) => {
    const newTalker = { ...req.body };
    const Alltalkers = await readFiles(path);

    newTalker.id = Alltalkers.length + 1;

    const talkers = await writeFiles(path, newTalker);
    return res.status(201).json(talkers);
  },
);

// rotas '/talker/search'

router.get('/search', validaToken, async (req, res) => {
  const { q } = req.query;

  const Alltalkers = await readFiles(path);

  const filteredTalkers = Alltalkers.filter((t) => t.name.toLowerCase().includes(q.toLowerCase()));

  if (!q || q === '') {
    return res.status(200).json(Alltalkers);
  }

  return res.status(200).json(filteredTalkers);
});

module.exports = router;

// rotas '/talker/:id'

router.get('/:id', async (request, response) => {
  try {
    const allTalkers = await readFiles(path);

    const talker = allTalkers.find((person) => person.id === parseInt(request.params.id, 10));

    if (talker) {
      return response.status(200).json(talker);
    }
    return response.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  } catch (error) {
    return response.status(500).end();
  }
});

router.put(
  '/:id',
  validaToken,
  validaName,
  validaAge,
  validaTalker,
  validaWatched,
  validaRate,
  async (req, res) => {
    const Alltalkers = await readFiles(path);
    const { id } = req.params;
    const i = id - 1;

    Alltalkers[i] = {
      ...req.body,
    };

    Alltalkers[i].id = parseInt(id, 10);

    const talkers = await updateContent(path, Alltalkers);

    return res.status(200).json(talkers[i]);
},
);

router.delete('/:id', validaToken, async (req, res) => {
  const { id } = req.params;

  const Alltalkers = await readFiles(path);
  const i = id - 1;

  Alltalkers.splice(i, 1);

  await updateContent(path, Alltalkers);

  return res.status(204).json();
});

const router = require('express').Router();

const token = require('../middleware/geraTalkens');

const {
  validaEmail,
  validaPassword,
} = require('../middleware/validaLogin');

router.post('/', validaEmail, validaPassword, (req, res) => {
  res.status(200).json({ token: token(16) });
});

module.exports = router;

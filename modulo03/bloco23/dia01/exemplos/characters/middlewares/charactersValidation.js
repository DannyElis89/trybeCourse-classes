const Joi = require('joi');

const charactersDTO = Joi.object({
  name: Joi.string().required(),
  cartoon: Joi.string().required(),
  year: Joi.number().required(),
}).messages({
  "any.required": `O campo {{#label}} é obrigatório.`,
  "number.base": `O campo {{#label}} deve ser numérico.`,
});

const validateCharactersMiddleware = (req, res, next) => {
  const { error } = charactersDTO.validate(req.body, {abortEarly: false});

  if(error){
    const messages = error.details.map(error => error.message);
    return res.status(401).json({error: messages});
  }

  next();
}

module.exports = validateCharactersMiddleware;

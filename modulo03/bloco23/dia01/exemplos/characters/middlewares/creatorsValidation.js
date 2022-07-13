const Joi = require('joi');

const creatorsDTO = Joi.object({
  name: Joi.string().required(),
  birth_date: Joi.string().required(),
  id_characters: Joi.number().required(),
}).messages({
  "any.required": `O campo {{#label}} é obrigatório.`,
  "number.base": `O campo {{#label}} deve ser numérico.`,
});

const validateCreatorsMiddleware = (req, res, next) => {
  const { error } = creatorsDTO.validate(req.body, {abortEarly: false});

  if(error){
    const messages = error.details.map(error => error.message);
    return res.status(401).json({error: messages});
  }

  next();
};

module.exports = validateCreatorsMiddleware;

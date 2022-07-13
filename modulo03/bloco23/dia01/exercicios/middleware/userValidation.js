const Joi = require('joi');

const userValidationDTO = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().min(6).required()
}).messages({
  "any.required": `O campo {{#label}} é obrigatório.`,
});

const userValidationMiddleware = (req, res, next) =>{
  const {error} = userValidationDTO.validate(req.body, {abortEarly: false});

  if(error){
    const messages = error.details.map(error => error.message);
    return res.status(401).json({error: messages});
  }

  next();
};


module.exports = userValidationMiddleware;

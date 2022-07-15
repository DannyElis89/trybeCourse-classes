const Joi = require('joi');

const creatorsDTO = Joi.object({
    name: Joi.string().required(),
    birthDate: Joi.date().required(),
    idCharacter: Joi.number().required(),
}).messages({
    "any.required": `campo {{#label}} é obrigatório!`,
    "number.base": `campo {{#label}} deve ser numérico!`
});

const validateCreatorsMiddleware = (req, res, next) => {
    const {error} = creatorsDTO.validate(req.body, {abortEarly: false});
    if(error){
        const messages = error.details.map(error => error.message);
        return res.status(401).json({errors: messages});
    }
    next();
};

module.exports = validateCreatorsMiddleware;

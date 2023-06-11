const Joi = require("joi");

const contactShema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(15)
    .messages({ "any.required": `missing required name field` })
    .required(),
  email: Joi.string()
    .email()
    .messages({
      "any.required": `missing required email field`,
    })
    .required(),
  phone: Joi.string()
    .pattern(/^\+?[0-9 ()-]{3,}$/)
    .min(5)
    .max(15)
    .messages({
      "any.required": `missing required phone field`,
    })
    .required(),
});

module.exports = {
  contactShema,
};

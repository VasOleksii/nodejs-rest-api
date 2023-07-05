const Joi = require("joi");
const { emailRegexp, phoneRegexp } = require("../constans/regExpr");

const contactSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(15)
    .messages({ "any.required": `missing required name field` })
    .required(),
  email: Joi.string()
    .pattern(emailRegexp)
    .messages({
      "any.required": `missing required email field`,
    })
    .required(),
  phone: Joi.string()
    .pattern(phoneRegexp)
    .min(5)
    .max(15)
    .messages({
      "any.required": `missing required phone field`,
    })
    .required(),
  favorite: Joi.boolean().messages({
    "any.required": `missing required favorite field`,
  }),
});

module.exports = {
  contactSchema,
};

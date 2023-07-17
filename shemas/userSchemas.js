const Joi = require("joi");

const { emailRegexp } = require("../constans/regExpr");
const { subscriptionType } = require("../constans/subscriptionType");

const registerSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...Object.values(subscriptionType))
    .required(),
});

const verifyEmailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

const schemas = {
  registerSchema,
  loginSchema,
  updateSubscriptionSchema,
  verifyEmailSchema,
};

module.exports = { schemas };

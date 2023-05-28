const Joi = require("joi");

const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const createUserValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  number: Joi.string().length(10),
  password: Joi.string().pattern(passwordPattern).required().messages({
    "string.pattern.base":
      "Password should contain minimum eight characters, at least one letter and one number",
  }),
  address: Joi.string(),
});

const loginValidationSchema = Joi.object().keys({
  email: createUserValidationSchema.extract("email"),
  number: createUserValidationSchema.extract("number"),
  password: createUserValidationSchema.extract("password"),
});

const authValidationSchemas = {
  createUserValidationSchema,
  loginValidationSchema,
};

module.exports = authValidationSchemas;

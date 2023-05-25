const Joi = require("joi");

const addProductToShopValidationSchema = Joi.object({
  imgUrl: Joi.string(),

  title: Joi.string().min(5).required(),

  description: Joi.string().min(5).max(50).required(),

  category: Joi.string().required(),

  price: Joi.number().min(0.01).required(),
});

module.exports = addProductToShopValidationSchema;

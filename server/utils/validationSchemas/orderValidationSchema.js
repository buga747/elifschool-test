const Joi = require("joi");

const orderValidationSchema = Joi.object({
  user: Joi.object({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    phone: Joi.string().required(),
    address: Joi.string().required(),
  }).required(),
  shopId: Joi.string().required(),
  items: Joi.array()
    .items(
      Joi.object({
        name: Joi.string().required(),
        quantity: Joi.number().required(),
        price: Joi.number().required(),
      })
    )
    .required(),
  totalPrice: Joi.number().required(),
  date: Joi.date().required(),
});

module.exports = orderValidationSchema;

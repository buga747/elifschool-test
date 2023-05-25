const { createOrder } = require("../controllers/orderController");

const { validateBody } = require("../middlewares");
const { orderValidationSchema } = require("../utils/validationSchemas");

const express = require("express");

const router = express.Router();

router.post("/orders", validateBody(orderValidationSchema), createOrder);

module.exports = {
  orderRouter: router,
};

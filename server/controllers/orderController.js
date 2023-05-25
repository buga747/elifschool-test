const { ctrlWrapper } = require("../utils/decorators");
const Order = require("../models/order");

const createOrder = ctrlWrapper(async (req, res, next) => {
  const newOrder = await Order.create(req.body);
  res.status(201).json(newOrder);
});

module.exports = { createOrder };

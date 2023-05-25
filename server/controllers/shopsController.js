const { ctrlWrapper } = require("../utils/decorators");
const { Shop } = require("../models/shop");
const { HttpError } = require("../utils/errors");

const getShops = ctrlWrapper(async (req, res, next) => {
  const shops = await Shop.find();

  if (shops.length === 0) {
    throw new HttpError(404, "No shops found.");
  }

  res.status(200).json(shops);
});

module.exports = { getShops };

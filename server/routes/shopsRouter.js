const { addProductToShop } = require("../controllers/productsController");
const { getShops } = require("../controllers/shopsController");
const { validateBody } = require("../middlewares");
const {
  addProductToShopValidationSchema,
} = require("../utils/validationSchemas");

const express = require("express");

const router = express.Router();

router.get("/", getShops);

router.post(
  "/:shopId",
  validateBody(addProductToShopValidationSchema),
  addProductToShop
);

module.exports = {
  shopsRouter: router,
};

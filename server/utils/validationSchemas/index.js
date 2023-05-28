const orderValidationSchema = require("./orderValidationSchema");
const authValidationSchemas = require("./authValidationSchemas");

const addProductToShopValidationSchema = require("./addProductToShopValidationSchema");

module.exports = {
  orderValidationSchema,
  addProductToShopValidationSchema,
  authValidationSchemas,
};

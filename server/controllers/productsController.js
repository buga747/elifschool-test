const { Shop, Product } = require("../models/shop");
const { ctrlWrapper } = require("../utils/decorators");

const addProductToShop = ctrlWrapper(async (req, res, next) => {
  const productData = req.body;
  const { shopId } = req.params;
  console.log(productData);

  const shop = await Shop.findById(shopId);
  if (!shop) {
    return res.status(404).json({ success: false, message: "Shop not found" });
  }

  const newProduct = await Product.create(productData);
  shop.products.push(newProduct);
  await shop.save();

  res.status(200).json(newProduct);
});
module.exports = {
  addProductToShop,
};

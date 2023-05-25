const { Schema, model } = require("mongoose");
const { handleMongooseSchemaError } = require("../utils/errors");

const productSchema = new Schema(
  {
    imgUrl: {
      type: String,
    },

    title: {
      type: String,
      minlength: 5,
    },

    description: {
      type: String,
      minlength: 5,
    },

    category: {
      type: String,
    },

    price: {
      type: Number,
      min: 0.01,
    },
  },
  { versionKey: false, timestamps: true }
);

const shopSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    products: [productSchema],
  },
  { versionKey: false, timestamps: true }
);

shopSchema.post("save", handleMongooseSchemaError);
productSchema.post("save", handleMongooseSchemaError);

const Shop = model("shop", shopSchema);
const Product = model("product", productSchema);

module.exports = { Shop, Product };

const { Schema, model } = require("mongoose");
const { handleMongooseSchemaError } = require("../utils/errors");

const orderSchema = new Schema(
  {
    user: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
    },
    shopId: { type: String, required: true },
    items: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    totalPrice: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  { versionKey: false, timestamps: true }
);

orderSchema.post("save", handleMongooseSchemaError);

const Order = model("order", orderSchema);

module.exports = Order;

const { Schema, model } = require("mongoose");
const { handleMongooseSchemaError } = require("../utils/errors");

const user = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    number: {
      type: String,
      required: [true, "Phone number is required"],
    },
    address: {
      type: String,
      required: false,
    },

    token: String,
  },
  { versionKey: false, timestamps: true }
);

user.post("save", handleMongooseSchemaError);

const User = model("user", user);

module.exports = { User };

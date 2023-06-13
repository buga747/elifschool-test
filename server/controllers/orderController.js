const { ctrlWrapper } = require("../utils/decorators");
const Order = require("../models/order");
const axios = require("axios");

const { RECAPTCHA_SECRET_KEY } = process.env;

const createOrder = ctrlWrapper(async (req, res, next) => {
  const { recaptchaResponse, ...orderData } = req.body;

  // Verify the reCAPTCHA response
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify`;
  const secretKey = RECAPTCHA_SECRET_KEY;

  const verificationResponse = await axios.post(verificationUrl, null, {
    params: {
      secret: secretKey,
      response: recaptchaResponse,
    },
  });

  const { success } = verificationResponse.data;

  if (success) {
    // reCAPTCHA verification successful, create the order
    const newOrder = await Order.create(orderData);
    res.status(201).json(newOrder);
  } else {
    // reCAPTCHA verification failed
    res.status(400).json({ error: "reCAPTCHA verification failed" });
  }
});

module.exports = { createOrder };

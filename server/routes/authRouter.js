const express = require("express");
const authControllers = require("../controllers/authController");

const { validateBody, authenticate } = require("../middlewares");
const { authValidationSchemas } = require("../utils/validationSchemas");

const router = express.Router();

router.post(
  "/register",
  validateBody(authValidationSchemas.createUserValidationSchema),
  authControllers.signup
);

router.post(
  "/login",
  validateBody(authValidationSchemas.loginValidationSchema),
  authControllers.login
);

router.post("/logout", authenticate, authControllers.logout);

module.exports = { authRouter: router };

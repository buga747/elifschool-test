const express = require("express");
const authControllers = require("../controllers/authController");

const { validateBody, authenticate } = require("../middlewares");
const { authValidationSchemas } = require("../utils/validationSchemas");

const router = express.Router();

router.post(
  "/register",
  validateBody(authValidationSchemas.createUserValidationSchema),
  authControllers.register
);

router.post(
  "/login",
  validateBody(authValidationSchemas.loginValidationSchema),
  authControllers.login
);

router.post("/logout", authenticate, authControllers.logout);

router.get("/current", authenticate, authControllers.getCurrent);

module.exports = { authRouter: router };

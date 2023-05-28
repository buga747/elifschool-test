const { ctrlWrapper } = require("../utils/decorators");
const {
  registerService,
  loginService,
  logoutService,
} = require("../services/authServices");

const register = ctrlWrapper(async (req, res, next) => {
  const newUser = await registerService(req.body);
  res.status(201).json({
    user: {
      email: newUser.email,
      number: newUser.number,
      password: newUser.password,
    },
  });
});

const login = ctrlWrapper(async (req, res, next) => {
  const { user, token } = await loginService(req.body);
  res.status(200).json({
    token,
    user: {
      email: user.email,
      number: user.number,
    },
  });
});

const logout = ctrlWrapper(async (req, res, next) => {
  await logoutService(req.user);
  res.status(204).json();
});

const getCurrent = ctrlWrapper(async (req, res, next) => {
  const { email, number } = req.user;
  res.json({ email, number });
});

module.exports = {
  register,
  login,
  logout,
  getCurrent,
};

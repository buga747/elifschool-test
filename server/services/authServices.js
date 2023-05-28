const { HttpError } = require("../utils/errors");
const { User } = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const registerService = async (body) => {
  const { email, number } = body;

  const existingUser = await User.findOne().or([{ email }, { number }]);

  if (existingUser) {
    if (existingUser.email === email) {
      throw new HttpError(409, "Email is already in use");
    }

    if (existingUser.number === phone) {
      throw new HttpError(409, "Phone number is already in use");
    }
  }

  body.password = await bcrypt.hash(body.password, 10);
  return await User.create(body);
};

const loginService = async (body) => {
  const { emailOrPhone, password } = body;

  const user = await User.findOne().or([
    { email: emailOrPhone },
    { phone: emailOrPhone },
  ]);
  if (!user) {
    throw new HttpError(401, "Email or phone number or password is wrong");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw new HttpError(401, "Email or phone number or password is wrong");
  }

  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "240h" });

  await User.findByIdAndUpdate(user._id, { token });

  return { user, token };
};

const logoutService = (user) => {
  const { _id } = user;
  return User.findByIdAndUpdate(_id, { token: null });
};

module.exports = {
  registerService,
  loginService,
  logoutService,
};

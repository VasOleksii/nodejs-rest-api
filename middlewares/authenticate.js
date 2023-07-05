const jwt = require("jsonwebtoken");

const { User } = require("../models/userModel");

const { HttpError } = require("../helpers");

const authenticate = async (req, res, next) => {
  const token =
    req.headers.authorization?.startsWith("Bearer") &&
    req.headers.authorization.split(" ")[1];
  if (!token) {
    next(HttpError(401, "Not logged in!"));
  }

  let decoded;

  try {
    decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decoded.id);
    if (!user || !user.token || user.token !== token) {
      next(HttpError(401, "Not logged in!"));
    }
    req.user = user;
  } catch {
    next(HttpError(401, "Not logged in!"));
  }

  next();
};

module.exports = authenticate;

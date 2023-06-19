const { isValidObjectId } = require("mongoose");

const { HttpError } = require("../helpers");

const checkUser = (req, res, next) => {
  const { contactId } = req.params;

  if (!isValidObjectId(contactId)) {
    next(HttpError(400, `${contactId} is not valid id`));
  }
  if (!Object.keys(req.body).includes("favorite")) {
    throw HttpError(400, "missing field favorite");
  }
  next();
};

module.exports = checkUser;

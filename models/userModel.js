const mongoose = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const { emailRegexp } = require("../constans/regExpr");
const { subscriptionType } = require("../constans/subscriptionType");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: Object.values(subscriptionType),
      default: subscriptionType.STARTER,
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const User = mongoose.model("user", userSchema);

module.exports = { User };

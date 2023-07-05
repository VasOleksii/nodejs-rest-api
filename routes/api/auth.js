const express = require("express");

const {
  signup,
  login,
  current,
  logout,
  updateSubscription,
} = require("../../controlers/users/auth");

const validateBody = require("../../middlewares/validateBody");

const { schemas } = require("../../shemas/userSchemas");
const { authenticate } = require("../../middlewares");

const router = express.Router();

router.post(
  "/signup",
  authenticate,
  validateBody(schemas.registerSchema),
  signup
);

router.post("/login", validateBody(schemas.loginSchema), login);

router.get("/current", authenticate, current);

router.post("/logout", authenticate, logout);

router.patch(
  "/users",
  authenticate,
  validateBody(schemas.updateSubscriptionSchema),
  updateSubscription
);

module.exports = router;

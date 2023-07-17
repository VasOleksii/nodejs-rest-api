const express = require("express");

const {
  signup,
  login,
  current,
  logout,
  updateSubscription,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
} = require("../../controlers/users/auth");

const validateBody = require("../../middlewares/validateBody");

const { schemas } = require("../../shemas/userSchemas");
const { authenticate, upload } = require("../../middlewares");

const router = express.Router();

router.post(
  "/signup",
  upload.single("avatar"),
  validateBody(schemas.registerSchema),
  signup
);

router.get("/verify/:verificationToken", verifyEmail);

router.post(
  "/verify",
  validateBody(schemas.verifyEmailSchema),
  resendVerifyEmail
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

router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);

module.exports = router;

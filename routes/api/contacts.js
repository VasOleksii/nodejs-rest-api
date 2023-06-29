const express = require("express");

const {
  getContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
} = require("../../controlers/contacts/contacts");

const { validateBody, checkUser, authenticate } = require("../../middlewares");
const { contactSchema } = require("../../shemas/contactValidationSchema");

const router = express.Router();

router.get("/", authenticate, getContacts);

router.get("/:contactId", authenticate, getContactById);

router.post("/", authenticate, validateBody(contactSchema), addContact);

router.delete("/:contactId", authenticate, removeContact);

router.put(
  "/:contactId",
  authenticate,
  validateBody(contactSchema),
  updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  validateBody(contactSchema),
  checkUser,
  updateStatusContact
);

module.exports = router;

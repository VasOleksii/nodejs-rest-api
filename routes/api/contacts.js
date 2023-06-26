const express = require("express");

const {
  getContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
} = require("../../controlers/contacts/contacts");

const { validateContact, checkUser } = require("../../middlewares");
const { contactShema } = require("../../shemas/contactValidationShema");

const router = express.Router();

router.get("/", getContacts);

router.get("/:contactId", getContactById);

router.post("/", validateContact(contactShema), addContact);

router.delete("/:contactId", removeContact);

router.put("/:contactId", validateContact(contactShema), updateContact);

router.patch("/:contactId/favorite", checkUser, updateStatusContact);

module.exports = router;

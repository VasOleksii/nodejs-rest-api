const express = require("express");

const {
  getContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require("../../controlers/contacts/contacts");

const { validateContact } = require("../../middlewares");
const { contactShema } = require("../../shemas/contactValidationShema");

const router = express.Router();

router.get("/", getContacts);

router.get("/:contactId", getContactById);

router.post("/", validateContact(contactShema), addContact);

router.delete("/:contactId", removeContact);

router.put("/:contactId", validateContact(contactShema), updateContact);

module.exports = router;

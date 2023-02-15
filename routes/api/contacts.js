const express = require("express");

const {getAll, getById, add, removeById, updateById, updateFavoriteById} = require("../../controllers")

// const contacts = require("../../models/contacts");

// const { RequestError, contactSchema } = require("../../helpers");

const router = express.Router();

router.get("/", getAll);

router.get("/:contactId", getById);

router.post("/", add);

router.delete("/:contactId", removeById);

router.put("/:contactId", updateById);

router.patch('/:contactId/favorite', updateFavoriteById);

module.exports = router;

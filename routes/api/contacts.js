const express = require("express");
const {getAll, getById, add, removeById, updateById, updateFavoriteById} = require("../../controllers")
const {authenticate, validateId, validationPost, validationUpdate} = require("../../middleware")
const {ctrlWrapper} = require("../../helpers");
const { contactJoiSchema, favoriteJoiSchema } = require("../../models/contact");


const router = express.Router();

router.get("/", authenticate, ctrlWrapper(getAll));

router.get("/:contactId", authenticate, validateId, ctrlWrapper(getById));

router.post("/", authenticate,  validationPost(contactJoiSchema), ctrlWrapper(add));

router.delete("/:contactId", authenticate, validateId, ctrlWrapper(removeById));

router.put("/:contactId", authenticate, validateId,
validationUpdate(contactJoiSchema), ctrlWrapper(updateById));

router.patch('/:contactId/favorite', authenticate, validateId,
validationUpdate(favoriteJoiSchema), ctrlWrapper(updateFavoriteById));

module.exports = router;

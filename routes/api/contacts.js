const express = require("express");
const {getAll, getById, add, removeById, updateById, updateFavoriteById} = require("../../controllers")
const {authenticate} = require("../../middleware")

const router = express.Router();

router.get("/", authenticate, getAll);

router.get("/:contactId", getById);

router.post("/", authenticate, add);

router.delete("/:contactId", authenticate, removeById);

router.put("/:contactId", authenticate, updateById);

router.patch('/:contactId/favorite', authenticate, updateFavoriteById);

module.exports = router;

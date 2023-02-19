const express = require("express");
const { register, login, logout, currentUser, updateAvatar } = require("../../controllers")
const { authenticate, validationBody, upload } = require("../../middleware");
const { schemas } = require("../../models/user");
const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.post("/signup", validationBody(schemas.registerSchema), ctrlWrapper(register));

router.post("/login", validationBody(schemas.loginSchema), ctrlWrapper(login));

router.get("/logout", authenticate, ctrlWrapper(logout));

router.get("/current", authenticate, ctrlWrapper(currentUser));

router.patch("/avatars", authenticate, upload.single("avatar"), ctrlWrapper(updateAvatar));

module.exports = router;
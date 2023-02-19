const express = require("express");
const { register, login, logout, currentUser } = require("../../controllers")
const { authenticate, validationBody } = require("../../middleware");
const { schemas } = require("../../models/user");
const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.post("/signup", validationBody(schemas.registerSchema), ctrlWrapper(register));

router.post("/login", validationBody(schemas.loginSchema), ctrlWrapper(login));

router.get("/logout", authenticate, ctrlWrapper(logout));

router.get("/current", authenticate, ctrlWrapper(currentUser));

module.exports = router;
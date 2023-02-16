const express = require("express");
const { register, login, logout, currentUser } = require("../../controllers")
const { authenticate } = require("../../middleware");

const router = express.Router();

router.post("/signup", register);

router.post("/login", login);

router.get("/logout", authenticate, logout);

router.get("/current", authenticate, currentUser);

module.exports = router;
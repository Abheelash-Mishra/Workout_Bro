const express = require("express");
const { loginUser, signupUser } = require("../controllers/userController");

const router = express.Router();

// Log in
router.post("/login", loginUser);

// Sign up
router.post("/signup", signupUser);

module.exports = router;
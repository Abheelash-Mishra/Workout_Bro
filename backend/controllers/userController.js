const User = require('../models/userModel');

const loginUser = async (req, res) => {
	res.json({ message: "Login route" });
};

const signupUser = async (req, res) => {
	res.json({ message: "Signup route" });
}

module.exports = { loginUser, signupUser };
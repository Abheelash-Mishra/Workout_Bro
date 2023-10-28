const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
		minlength: 5
	}
});

const User = mongoose.model('User', userSchema);

User.signup = async function (email, password) {
	const exists = await this.findOne({ email });

	if (exists) {
		throw new Error('User already exists');
	}

	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);

	const user = await this.create({ email, password: hash });

	return user;
};

module.exports = User;
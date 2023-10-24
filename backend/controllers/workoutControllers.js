const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// GET all workouts
const getAllWorkouts = async (req, res) => {
	const workouts = await Workout.find({}).sort({ createdAt: -1 });

	res.status(200).json(workouts);
};

// GET one workout
const getOneWorkout = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "Invalid ID" });
	}
	const workout = await Workout.findById(id);

	if (!workout) {
		return res.status(404).json({ error: `No workout with ID: ${ id }` });
	}

	res.status(200).json(workout);
};

// POST one workout
const createWorkout = async (req, res) => {
	const { title, reps, load } = req.body;

	let emptyFields = [];
	if(!title) emptyFields.push("title");
	if(!reps) emptyFields.push("reps");
	if(!load) emptyFields.push("load");

	if(emptyFields.length > 0)
		return res.status(400).json({ error: "Please Fill In All The Fields!", emptyFields });

	try {
		const newWorkout = await Workout.create({ title, reps, load });
		res.status(200).json(newWorkout, emptyFields);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// DELETE one workout
const deleteWorkout = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ msg: `No workout with id: ${ id }` });
	}

	const workout = await Workout.findByIdAndRemove(id);

	if (!workout) {
		return res.status(404).json({ msg: `No workout with ID: ${ id }` });
	}

	res.status(200).json(workout);
}

// UPDATE one workout
const updateWorkout = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ msg: `No workout with id: ${ id }` });
	}

	const workout = await Workout.findOneAndUpdate({ _id: id }, {
		...req.body
	})

	if (!workout) {
		return res.status(404).json({ msg: `No workout with ID: ${ id }` });
	}

	res.status(200).json({ msg: `Updated workout with ID: ${ id }` });
};

module.exports = {
	getAllWorkouts,
	getOneWorkout,
	createWorkout,
	deleteWorkout,
	updateWorkout
}

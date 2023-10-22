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

	if(!mongoose.Types.ObjectId.isValid(id)){
		return res.status(404).json({ msg: `No workout with id: ${id}` });
	}
	const workout = await Workout.findById(id);

	// if(!workout){
	// 	return res.status(404).json({ msg: `No workout with id: ${id}` });
	// }

	res.status(200).json(workout);
};

// POST one workout
const createWorkout = async (req, res) => {
	const { title, reps, load } = req.body;
	try {
		const newWorkout = await Workout.create({ title, reps, load });
		res.status(200).json(newWorkout);
	} catch (err) {
		res.status(400).json({ msg: err.message });
	}
};

// DELETE one workout


// UPDATE one workout


module.exports = {
	getAllWorkouts,
	getOneWorkout,
	createWorkout
}

const express = require('express');
const { createWorkout, getOneWorkout, getAllWorkouts } = require("../controllers/workoutControllers");

const router = express.Router();

// GET all workouts
router.get('/', getAllWorkouts);

// GET one workout
router.get('/:id', getOneWorkout);

// POST one workout
router.post('/', createWorkout);

// DELETE one workout
router.delete('/:id', (req, res) => {
	res.json({ msg: 'DELETE' });
});

// UPDATE one workout
router.patch('/:id', (req, res) => {
	res.json({ msg: 'UPDATE' });
});

module.exports = router;
const express = require('express');
const { createWorkout, getOneWorkout, getAllWorkouts, deleteWorkout, updateWorkout } = require("../controllers/workoutControllers");
const requireAuth = require('../middlewares/requireAuth');

const router = express.Router();
router.use(requireAuth);

// GET all workouts
router.get('/', getAllWorkouts);

// GET one workout
router.get('/:id', getOneWorkout);

// POST one workout
router.post('/', createWorkout);

// DELETE one workout
router.delete('/:id', deleteWorkout);

// UPDATE one workout
router.patch('/:id', updateWorkout);

module.exports = router;
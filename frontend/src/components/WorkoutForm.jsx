import { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext.js";

const WorkoutForm = () => {
	const {dispatch} = useWorkoutContext();

	const [title, setTitle] = useState("");
	const [reps, setReps] = useState("");
	const [load, setLoad] = useState("");
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const workout = { title, reps, load };

		const response = await fetch("http://localhost:4000/api/workouts", {
			method: "POST",
			body: JSON.stringify(workout),
			headers: {
				"Content-Type": "application/json"
			}
		})
		const data = await response.json();

		if(!response.ok){
			setError(data.error);
		}
		if(response.ok){
			setTitle("");
			setReps("");
			setLoad("");
			setError(null);
			dispatch({ type: "CREATE_WORKOUT", payload: data });
			console.log("Workout Added", data);
		}
	};

	return (
		<form className="create" onSubmit={handleSubmit}>
			<h3>Create A New Workout</h3>

			<label>Exercise Name: </label>
			<input
				type="text"
				onChange={(e => setTitle(e.target.value))}
				value={title}
			/>

			<label>Load (In Kg): </label>
			<input
				type="number"
				onChange={(e => setLoad(e.target.value))}
				value={load}
			/>

			<label>Reps: </label>
			<input
				type="number"
				onChange={(e => setReps(e.target.value))}
				value={reps}
			/>
			<button>Add Workout</button>

			{error && <div className="error">{error}</div>}
		</form>
	);
};

export default WorkoutForm;
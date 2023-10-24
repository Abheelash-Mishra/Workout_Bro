import {useWorkoutContext} from "../hooks/useWorkoutContext.js";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({workout}) => {
	const {dispatch} = useWorkoutContext();
	const handleClick = async () => {
		const response = await fetch(`/api/workouts/${workout._id}`, {
			method: "DELETE"
		});
		const data = await response.json();

		if(response.ok){
			dispatch({ type: "DELETE_WORKOUT", payload: data });
		}
	};

	return (
		<div className="workout-details">
			<h4>{ workout.title }</h4>
			<p><strong>Load (Kg): </strong>{workout.load}</p>
			<p><strong>Reps: </strong>{workout.load}</p>
			<p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true})}</p>
			<span onClick={handleClick}>Delete</span>
		</div>
	);
};

export default WorkoutDetails;
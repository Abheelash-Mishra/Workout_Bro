import { useWorkoutContext } from "../hooks/useWorkoutContext.js";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../hooks/useAuthContext.js";

const WorkoutDetails = ({ workout }) => {
	const { dispatch } = useWorkoutContext();
	const { user } = useAuthContext();
	const handleClick = async () => {
		if (!user) {
			return;
		}
		const response = await fetch(`/api/workouts/${ workout._id }`, {
			method: "DELETE",
			headers: {
				"Authorization": `Bearer ${ user.token }`
			}
		});
		const data = await response.json();

		if (response.ok) {
			dispatch({ type: "DELETE_WORKOUT", payload: data });
		}
	};

	return (
		<div className="workout-details">
			<h4>{ workout.title }</h4>
			<p><strong>Load (Kg): </strong>{ workout.load }</p>
			<p><strong>Reps: </strong>{ workout.load }</p>
			<p>{ formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true }) }</p>
			<span onClick={ handleClick }>Delete</span>
		</div>
	);
};

export default WorkoutDetails;
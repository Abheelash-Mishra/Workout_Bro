import { useEffect } from 'react';
import { useWorkoutContext } from "../hooks/useWorkoutContext.js";
import WorkoutDetails from "../components/WorkoutDetails.jsx";
import WorkoutForm from "../components/WorkoutForm.jsx";

const Home = () => {
	const { workouts, dispatch } = useWorkoutContext();


	useEffect(() => {
		const fetchWorkouts = async () => {
			const response = await fetch("http://localhost:4000/api/workouts");
			const data = await response.json();

			if (response.ok) {
				dispatch({ type: "SET_WORKOUTS", payload: data });
			}
		};
		const promise = fetchWorkouts(); //Sends undefined back, dunno why the IDE is freaking out when I try to just invoke the func
	}, [dispatch]);

	return (
		<div className={ "home" }>
			<div className="workouts">
				{ workouts && workouts.map((workout) => (
					<WorkoutDetails key={workout._id} workout={workout} />
				)) }
			</div>
			<WorkoutForm />
		</div>
	);
};

export default Home;
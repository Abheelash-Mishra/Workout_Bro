import { useEffect } from 'react';
import { useWorkoutContext } from "../hooks/useWorkoutContext.js";
import WorkoutDetails from "../components/WorkoutDetails.jsx";
import WorkoutForm from "../components/WorkoutForm.jsx";
import {useAuthContext} from "../hooks/useAuthContext.js";

const Home = () => {
	const { workouts, dispatch } = useWorkoutContext();
	const { user } = useAuthContext();


	useEffect(() => {
		const fetchWorkouts = async () => {
			const response = await fetch("/api/workouts", {
				headers: {
					"Authorization": `Bearer ${user.token}`
				}
			});
			const data = await response.json();

			if (response.ok) {
				dispatch({ type: "SET_WORKOUTS", payload: data });
			}
		};

		if(user){
			const promise = fetchWorkouts(); //Sends undefined back anyways, dunno why the IDE is freaking out when I try to just invoke the func
		}
	}, [dispatch, user]);

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
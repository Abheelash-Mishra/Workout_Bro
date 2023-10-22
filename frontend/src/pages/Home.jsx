import React, { useEffect, useState } from 'react';

const Home = () => {
	const [workouts, setWorkouts] = useState(null);


	useEffect(() => {
		const fetchWorkouts = async () => {
			const response = await fetch("http://localhost:4000/api/workouts");
			const data = await response.json();

			if (response.ok) {
				setWorkouts(data);
			}
		};
		const promise = fetchWorkouts(); //Sends undefined back, dunno why the IDE is freaking out when I try to just invoke the func
	}, []);

	return (
		<div className={ "home" }>
			<div className="workouts">
				{ workouts && workouts.map((workout) => (
					<p key={ workout._id }>{ workout.title }</p>
				)) }
			</div>
		</div>
	);
};

export default Home;
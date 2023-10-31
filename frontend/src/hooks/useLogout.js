import { useAuthContext } from "./useAuthContext.js";
import { useWorkoutContext } from "./useWorkoutContext.js";

export const useLogout = () => {
	const { dispatch } = useAuthContext();
	const { dispatch: dispatchWorkout } = useWorkoutContext();

	const logout = () => {
		localStorage.removeItem('user');

		dispatchWorkout({ type: "SET_WORKOUTS", payload: null });
		dispatch({ type: "LOGOUT" });
	}

	return { logout };
};
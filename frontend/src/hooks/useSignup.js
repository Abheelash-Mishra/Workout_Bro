import { useState } from "react";
import { useAuthContext } from "./useAuthContext.js";


export const useSignup = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(null)
	const { dispatch } = useAuthContext();

	const signup = async (email, password) => {
		setIsLoading(null)
		setError(null)

		const response = await fetch("/api/user/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ email, password })
		})

		const data = await response.json();

		if (!response.ok) {
			setIsLoading(false)
			setError(data.message)
		}
		if (response.ok) {
			// Save login session to local storage
			localStorage.setItem("user", JSON.stringify(data));

			// Update Auth Context
			dispatch({type: "LOGIN", payload: data});
			setIsLoading(false)
		}
	}

	return {signup, isLoading, error};
};
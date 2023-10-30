import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout.js";

const Navbar = () => {
	const {logout} = useLogout();

	const handleClick = () => {
		logout();
	};

	return (
		<div className="container">
			<Link to={"/"}>
				<h1>Workout Bro</h1>
			</Link>

			<nav>
				<div>
					<button onClick={handleClick}>Log Out</button>
				</div>
				<div>
					<Link to={"/login"}>Login</Link>
					<Link to={"/signup"}>Sign Up</Link>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
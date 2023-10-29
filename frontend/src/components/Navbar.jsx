import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="container">
			<Link to={"/"}>
				<h1>Workout Bro</h1>
			</Link>

			<nav>
				<div>
					<Link to={"/login"}>Login</Link>
					<Link to={"/signup"}>Sign Up</Link>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="container">
			<Link to={"/"}>
				<h1>Workout Bro</h1>
			</Link>
		</div>
	);
};

export default Navbar;
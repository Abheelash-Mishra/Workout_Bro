import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";

// Pages & Routes
import Home from "./pages/Home.jsx";

// Components
import Navbar from "./components/Navbar.jsx";


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<div className="pages">
					<Routes>
						<Route path={"/"} element={<Home />} />

					</Routes>
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App

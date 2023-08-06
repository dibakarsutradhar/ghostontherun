import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Sidebar } from "./components";
import { Garage, Home, Wardrobe } from "./views";

function App() {
	return (
		<div className="App">
			<Sidebar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/garage" element={<Garage />}></Route>
					<Route path="/wardrobe" element={<Wardrobe />}></Route>
					<Route path="/tracks" element={""}></Route>
					<Route path="/driver" element={""}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

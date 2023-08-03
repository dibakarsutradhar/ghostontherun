import React from "react";
import "./App.css";
import { Sidebar } from "./components";
import { Home } from "./views";

function App() {
	return (
		<div className="App">
			<Sidebar />
			<Home />
		</div>
	);
}

export default App;

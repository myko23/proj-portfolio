import React from "react";
import About from "../../components/About/About";
import Techstack from "../../components/Techstack/Techstack";
import Home from "../Home/Home";
import Sidebar from "../Sidebar/Sidebar";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Sidebar />
			<Home />
			<About />
			<Techstack />
		</div>
	);
}

export default App;

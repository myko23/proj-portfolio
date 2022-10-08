import React from "react";
import About from "../../components/About/About";
import Project from "../../components/Project/Project";
import Techstack from "../../components/Techstack/Techstack";
import WorkHistory from "../../components/WorkHistory/WorkHistory";
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
			<Project />
			<WorkHistory />
		</div>
	);
}

export default App;

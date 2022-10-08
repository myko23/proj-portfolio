import React from "react";
import "./Project.css";

import { Container } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectList from "../ProjectList/ProjectList";

function Project() {
	return (
		<Container className="Project">
			<SectionTitle title="Projects" />
			<ProjectList />
		</Container>
	);
}

export default Project;

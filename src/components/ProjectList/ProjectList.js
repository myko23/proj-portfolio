import React from "react";
import "./ProjectList.css";
import { projectData } from "../../data/projectData";
import ProjectCard from "./ProjectCard";
import { Col, Row } from "react-bootstrap";

function ProjectList() {
	const desc =
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

	const renderProjects = () => {
		return projectData.map((item, index) => (
			<Col
				key={index}
				className="ProjectList__item"
				xl={6}
				lg={6}
				md={12}
				sm={12}
			>
				<ProjectCard
					name={item.name}
					description={item.description}
					link={item.link}
					tech={item.tech}
				/>
			</Col>
		));
	};

	return <Row className="ProjectList">{renderProjects()}</Row>;
}

export default ProjectList;

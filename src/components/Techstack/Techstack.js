import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { techstackData } from "../../data/techstackData";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Techstack.css";

function Techstack() {
	const colors = ["red", "orange", "yellow", "green", "blue"];

	const [stackView, setStackView] = useState(12);

	const [stackSelect, setStackSelect] = useState(-1);

	const loopList = (list, index) => {
		if (list.length >= index) return list[index];
		else {
			const newIndex = index % list.length;
			return list[newIndex];
		}
	};
	const renderTechStack = () => {
		return techstackData.slice(0, stackView).map((item, index) => {
			return (
				<Col
					className={`Techstack__item-container ${
						stackSelect === index
							? "Techstack__item-container--selected"
							: ""
					}`}
					key={index}
					xl={4}
					lg={4}
					md={6}
					sm={12}
					onClick={() => setStackSelect(index)}
				>
					<div
						className="Techstack__item-pin"
						style={{ backgroundColor: loopList(colors, index) }}
					></div>
					<div className="Techstack__item">{item.name}</div>
				</Col>
			);
		});
	};

	return (
		<Container className="Techstack">
			<SectionTitle className="Techstack__title" title="Tech Stack" />
			<Row className="Techstack__item-list">{renderTechStack()}</Row>
			<Button
				className="Techstack__load-btn"
				variant="primary"
				size="lg"
				onClick={() => {
					setStackView(stackView + 3);
				}}
			>
				Load More
			</Button>
		</Container>
	);
}

export default Techstack;

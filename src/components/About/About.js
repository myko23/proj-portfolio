import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import profPic from "../../static/profile-pic.png";
import "./About.css";

function About() {
	return (
		<Container className="About">
			<Row>
				<Col md={6} className="About__pic-container">
					<img
						src={profPic}
						alt="Profile Pic"
						className="About__profile-pic"
					/>
				</Col>
				<Col md={6} className="About__details">
					<div className="About__title">About Myself</div>
					<div className="About__description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Dolorum soluta rerum officiis nam, quos dicta.
						Assumenda, culpa possimus nulla quaerat nostrum non, at
						ipsum ad molestias laboriosam minima. Facere, aperiam
						repudiandae ratione nam ab magni corporis maiores!
						Itaque, rem minus. Dicta provident illo nulla quae illum
						accusamus earum labore dolorum aspernatur exercitationem
						dolores consectetur repudiandae sed, natus laboriosam
						non delectus tempore nemo dolore quibusdam maiores alias
						aliquam. Voluptatibus qui eos quia saepe, eum in dicta
						officiis, tempore assumenda eligendi laborum.
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default About;

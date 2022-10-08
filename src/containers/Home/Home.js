import React from "react";
import { Container } from "react-bootstrap";
import TypewriterComponent from "typewriter-effect";
import "./Home.css";
import Resume from "../../static/Meg Franco Bacal CV.pdf";

function Home() {
	return (
		<div className="Home">
			<Container className="Home__container">
				<div className="Home__content">
					<div className="Home__greetings">Hi, I am Myko</div>
					<TypewriterComponent
						options={{
							strings: ["Software Developer", "MERN STACK"],
							autoStart: true,
							loop: true,
							delay: 5,
						}}
					/>
					<div className="Home__btn-container">
						<div className="Home__btn">Hire Me</div>
						<div className="Home__btn">
							<a href={Resume} download="Bacal CV">
								Get My resume
							</a>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Home;

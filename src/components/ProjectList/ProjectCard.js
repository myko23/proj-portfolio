import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function ProjectCard({ name, description, link, tech }) {
	const [cardExpand, setCardExpand] = useState(false);

	const renderTech = () => {
		return tech.map((item, index) => (
			<div key={index} className="ProjectCard__tech">
				{item || "Default Tech"}
			</div>
		));
	};

	return (
		<div className="ProjectCard">
			<div
				className="ProjectCard__name-container"
				onClick={() => setCardExpand(!cardExpand)}
			>
				<div className="ProjectCard__name">
					{name || "Default Name"}
				</div>
				<FontAwesomeIcon
					className="ProjectCard__name-chev"
					icon={cardExpand ? faChevronUp : faChevronDown}
				/>
			</div>
			<div
				className={`ProjectCard__description-container ${
					cardExpand
						? ""
						: "ProjectCard__description-container--collapse"
				}`}
			>
				{description || "Default Description"}
			</div>
			{tech && tech.length !== 0 ? (
				<div className="ProjectCard__tech-container">
					{renderTech()}
				</div>
			) : null}
			<a href={link || ""} className="ProjectCard__link-container">
				<div className="ProjectCard__link">View Project</div>
			</a>
		</div>
	);
}

export default ProjectCard;

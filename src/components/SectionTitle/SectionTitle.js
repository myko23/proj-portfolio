import React from "react";
import "./SectionTitle.css";

function SectionTitle({ title, className }) {
	return (
		<div className={`SectionTitle ${className || ""}`}>
			{title || "Default Title"}
		</div>
	);
}

export default SectionTitle;

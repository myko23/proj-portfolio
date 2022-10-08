import React from "react";
import { Container } from "react-bootstrap";
import { FcAddColumn, FcMindMap } from "react-icons/fc";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { workhistoryData } from "../../data/workhistoryData";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./WorkHistory.css";

function WorkHistory() {
	const renderWorkHistory = () => {
		return workhistoryData.map((item) => (
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{
					background: "rgb(33, 150, 243)",
					color: "#fff",
				}}
				contentArrowStyle={{
					borderRight: "7px solid  rgb(33, 150, 243)",
				}}
				date="2011 - present"
				iconStyle={{
					background: "rgb(33, 150, 243)",
					color: "#fff",
				}}
				icon={<FcAddColumn />}
			>
				<div className="WorkHistory__name">{item.name}</div>
				<div className="WorkHistory__title">{item.title}</div>
				<div className="WorkHistory__description">
					{item.description}
				</div>
			</VerticalTimelineElement>
		));
	};

	return (
		<Container className="WorkHistory">
			<SectionTitle title="Work History" />
			<div className="WorkHistory__timeline">
				<VerticalTimeline lineColor={"red"}>
					{renderWorkHistory()}
					<VerticalTimelineElement
						iconStyle={{
							background: "rgb(16, 204, 82)",
							color: "#fff",
						}}
						icon={<FcMindMap />}
					/>
				</VerticalTimeline>
			</div>
		</Container>
	);
}

export default WorkHistory;

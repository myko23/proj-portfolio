import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import SidebarList from "../../components/SidebarList/SidebarList";
import profPic from "../../static/profile-pic.png";
import "./Sidebar.css";

function Sidebar() {
	const [sidebarExpand, setSidebarExpand] = useState(true);
	return (
		<div className={`Sidebar ${sidebarExpand ? "" : "Sidebar--collapse"}`}>
			<div className="Sidebar__block">
				<div
					className="Sidebar__collapsible"
					onClick={() => {
						setSidebarExpand(!sidebarExpand);
					}}
				>
					<FontAwesomeIcon
						className="Sidebar__collapse-btn"
						icon={sidebarExpand ? faChevronLeft : faChevronRight}
					/>
				</div>
				{sidebarExpand ? (
					<div className="Sidebar__user-container">
						<img
							src={profPic}
							alt="Profile Pic"
							className="Sidebar__profile-pic"
						/>
						<p className="Sidebar__user-name">Meg Franco Bacal</p>
					</div>
				) : null}
				<SidebarList sidebarExpand={sidebarExpand} />
			</div>
			<div className="Sidebar__background"></div>
		</div>
	);
}

export default Sidebar;

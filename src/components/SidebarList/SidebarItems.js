import React from "react";

function SidebarItem({ icon, text, onClick, sidebarExpand }) {
	return (
		<li className="SidebarItem" onClick={onClick}>
			{icon ? icon : null}
			{sidebarExpand ? (
				<div className="SidebarItem__label">
					{text || "Default Text"}
				</div>
			) : null}
		</li>
	);
}

export default SidebarItem;

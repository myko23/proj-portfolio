import {
	FcAbout,
	FcBusiness,
	FcBusinessman,
	FcConferenceCall,
	FcDataEncryption,
	FcHome,
	FcLibrary,
	FcMultipleSmartphones,
} from "react-icons/fc";
import React from "react";
import SidebarItem from "./SidebarItems";
import "./SidebarList.css";

function SidebarList({ sidebarExpand }) {
	return (
		<ul
			className={`SidebarList ${
				sidebarExpand ? "" : "SidebarList--collapse"
			}`}
		>
			<SidebarItem
				sidebarExpand={sidebarExpand}
				text="Home"
				icon={<FcHome size={30} />}
			/>
			<SidebarItem
				sidebarExpand={sidebarExpand}
				text="About"
				icon={<FcBusinessman size={30} />}
			/>
			<SidebarItem
				sidebarExpand={sidebarExpand}
				text="Work Experience"
				icon={<FcBusiness size={30} />}
			/>
			<SidebarItem
				sidebarExpand={sidebarExpand}
				text="Tech Stack"
				icon={<FcMultipleSmartphones size={30} />}
			/>
			<SidebarItem
				sidebarExpand={sidebarExpand}
				text="Education"
				icon={<FcLibrary size={30} />}
			/>
			<SidebarItem
				sidebarExpand={sidebarExpand}
				text="Projects"
				icon={<FcDataEncryption size={30} />}
			/>
			<SidebarItem
				sidebarExpand={sidebarExpand}
				text="Testimonials"
				icon={<FcConferenceCall size={30} />}
			/>
			<SidebarItem
				sidebarExpand={sidebarExpand}
				text="Contact"
				icon={<FcAbout size={30} />}
			/>
		</ul>
	);
}

export default SidebarList;

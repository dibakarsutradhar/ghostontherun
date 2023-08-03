import { FunctionComponent } from "react";
import "./Sidebar.css";

interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
	return (
		<div className="sidenav">
			<h4>COVERED MAP</h4>
			<h4>GARAGE</h4>
			<h4>WARDROVE</h4>
			<h4>TRACK COURSES</h4>
			<h4>DRIVER</h4>
			<h4>BLOG</h4>
			<h4>FAQ</h4>
		</div>
	);
};

export default Sidebar;

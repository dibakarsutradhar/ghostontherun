import { FunctionComponent } from "react";
import "./Sidebar.css";

interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
	return (
		<div className="sidenav">
			<a href="/">HOME</a>
			<a href="/garage">GARAGE</a>
			<a href="/wardrobe">WARDROBE</a>
			<a href="/tracks">TRACK COURSES</a>
			<a href="/driver">DRIVER</a>
			<a href="#">BLOG</a>
			<a href="#">FAQ</a>
		</div>
	);
};

export default Sidebar;

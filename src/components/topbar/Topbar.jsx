import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export default function Topbar() {
	return (
		<div className="topbar">
			<div className="topbarWrapper">
				<div className="topLeft">
					<span className="logo">Admin Pannel</span>
				</div>
				<div className="topRight">
					<div className="topbarIconContainer">
						<NotificationsNone />
						<span className="topIconBadge">2</span>
					</div>
					<div className="topbarIconContainer">
						<Language />
						<span className="topIconBadge">2</span>
					</div>
					<div className="https://thumbs.dreamstime.com/z/hi-tech-guy-24700382.jpg">
						<Settings />
					</div>
					<img
						src="https://thumbs.dreamstime.com/z/hi-tech-guy-24700382.jpg"
						alt=""
						className="topAvatar"
					/>
				</div>
			</div>
		</div>
	);
}

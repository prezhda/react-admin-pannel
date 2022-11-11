import React from "react";
import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";

export default function WidgetSm() {
	return (
		<div className="widgetSm">
			<span className="widgetSmTitle">New Join Members</span>
			<ul className="widgetSmList">
				<li className="widgetSmListItem">
					<img
						src="https://learnsafe.com/wp-content/uploads/2017/12/IT-Guy-Isolated.png"
						alt=""
						className="widgetSmImg"
					/>
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Name Surname</span>
						<span className="widgetSmUserTitle">Web Developer</span>
					</div>
					<button className="widgetSmButton">
						<Visibility className="widgetSmIcon" />
						Display
					</button>
				</li>
				<li className="widgetSmListItem">
					<img
						src="https://media.istockphoto.com/photos/business-can-not-wait-picture-id1221204650?k=20&m=1221204650&s=612x612&w=0&h=o5ACkYbD8pHjx71Xdgl0NPyySmHk3WsyX3FNFMqCsbU="
						alt=""
						className="widgetSmImg"
					/>
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Name Surname</span>
						<span className="widgetSmUserTitle">Web Developer</span>
					</div>
					<button className="widgetSmButton">
						<Visibility className="widgetSmIcon" />
						Display
					</button>
				</li>
				<li className="widgetSmListItem">
					<img
						src="https://media.istockphoto.com/photos/business-can-not-wait-picture-id1221204650?k=20&m=1221204650&s=612x612&w=0&h=o5ACkYbD8pHjx71Xdgl0NPyySmHk3WsyX3FNFMqCsbU="
						alt=""
						className="widgetSmImg"
					/>
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Name Surname</span>
						<span className="widgetSmUserTitle">Web Developer</span>
					</div>
					<button className="widgetSmButton">
						<Visibility className="widgetSmIcon" />
						Display
					</button>
				</li>
				<li className="widgetSmListItem">
					<img
						src="https://media.istockphoto.com/photos/business-can-not-wait-picture-id1221204650?k=20&m=1221204650&s=612x612&w=0&h=o5ACkYbD8pHjx71Xdgl0NPyySmHk3WsyX3FNFMqCsbU="
						alt=""
						className="widgetSmImg"
					/>
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Name Surname</span>
						<span className="widgetSmUserTitle">Web Developer</span>
					</div>
					<button className="widgetSmButton">
						<Visibility className="widgetSmIcon" />
						Display
					</button>
				</li>
				<li className="widgetSmListItem">
					<img
						src="https://media.istockphoto.com/photos/business-can-not-wait-picture-id1221204650?k=20&m=1221204650&s=612x612&w=0&h=o5ACkYbD8pHjx71Xdgl0NPyySmHk3WsyX3FNFMqCsbU="
						alt=""
						className="widgetSmImg"
					/>
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Name Surname</span>
						<span className="widgetSmUserTitle">Web Developer</span>
					</div>
					<button className="widgetSmButton">
						<Visibility className="widgetSmIcon" />
						Display
					</button>
				</li>
			</ul>
		</div>
	);
}

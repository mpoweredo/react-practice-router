import { Link, useRouteMatch } from "react-router-dom";
import React from "react";

import classes from "./AvailableMenu.module.css";

const AvailableMenu = () => {
	const match = useRouteMatch();

	return (
		<div className={classes.menu}>
			<h1 className={classes.title}>Menu</h1>
			<ul className={classes["menu-list"]}>
				<li>
					<Link to={`${match.url}/vege`}>Vege</Link>
				</li>
				<li>
					<Link to={`${match.url}/protein`}>Protein</Link>
				</li>
				<li>
					<Link to={`${match.url}/fast-food`}>Fast food</Link>
				</li>
			</ul>
		</div>
	);
};

export default AvailableMenu;

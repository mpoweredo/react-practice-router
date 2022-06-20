import { NavLink, useHistory } from "react-router-dom";

import React from "react";

import classes from "./Header.module.css";

const Header = () => {
	const history = useHistory();

	const backToMainPageHandler = () => {
		history.push('/landing-page')
	}

	return (
		<header className={classes.header} >
			<div>
				<h2 className={classes.logo} onClick={backToMainPageHandler}>Food App</h2>
			</div>
			<nav>
				<ul className={classes.navigation}>
					<li><NavLink activeClassName={classes.active} to='/menu'>Menu</NavLink></li>
					<li><NavLink activeClassName={classes.active} to='/about-us'>About us</NavLink></li>
					<li><NavLink activeClassName={classes.active} to='/producers'>Producers</NavLink></li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

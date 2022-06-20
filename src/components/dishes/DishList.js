import { Link, useRouteMatch } from "react-router-dom";

import React, { useEffect, useCallback } from "react";
import { renderAllDishes } from "../../api/api";
import useFetch from "../../hooks/useFetch";
import DishElement from "./DishElement";

import classes from "./DishList.module.css";

const DishList = (props) => {
	const match = useRouteMatch();

	let content;

	if (props.items !== undefined ) {
		content = props.items.map((dish) => {
			return (
				<DishElement
					title={dish.title}
					description={dish.description}
					price={dish.price}
					key={dish.id}
					id={dish.id}
				/>
			);
		});
	}

	return (
		<section>
			<ul className={classes["dish-list"]}>{content}</ul>
			<div className="centered" style={{ marginTop: "2.2em" }}>
				<Link
					style={{ backgroundColor: "green", padding: ".8em" }}
					className="centered"
					to={`${match.url}/add-dish`}
				>
					Add your dish!
				</Link>
			</div>
		</section>
	);
};

export default DishList;

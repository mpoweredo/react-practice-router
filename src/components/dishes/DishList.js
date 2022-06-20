import React, { useEffect, useCallback } from "react";
import { renderAllDishes } from "../../api/api";
import useFetch from "../../hooks/useFetch";
import DishElement from "./DishElement";
import NewDishForm from "./NewDishForm";

import classes from "./DishList.module.css";

const DishList = () => {
	const {
		sendRequest,
		error,
		status,
		data: loadedDishes,
	} = useFetch(renderAllDishes);

	useEffect(() => {
		sendRequest();
	}, [sendRequest]);

    const onAddedDishHandler = useCallback(() => {
		sendRequest();
	}, [sendRequest]);

	let dishes;

	if (status === "done") {
		console.log(loadedDishes);

		dishes = loadedDishes.map((dish) => {
			console.log(dish.title);
			return <DishElement
				title={dish.title}
				description={dish.description}
				price={dish.price}
				key={dish.id}
				id={dish.id}
			/>;
		});
	}

	return (

		<section>
			<NewDishForm onDishAdded={onAddedDishHandler} />

			<ul className={classes["dish-list"]}>{dishes}</ul>
		</section>
	);
};

export default DishList;

import React, { useCallback } from "react";
import { renderAllDishes } from "../../../api/api";
import useFetch from "../../../hooks/useFetch";
import DishList from "../DishList";
import NewDishForm from "../NewDishForm";

const FastFood = () => {
	const { sendRequest } = useFetch(renderAllDishes);

	const onAddedDishHandler = useCallback(() => {
		sendRequest();
	}, [sendRequest]);

	return (
		<div style={{ marginTop: "2em" }}>
			<h1 style={{ marginBottom: ".4em", textAlign: "center" }}>
				All Fast Foods in our Offer
			</h1>
			<DishList />
		</div>
	);
};

export default FastFood;

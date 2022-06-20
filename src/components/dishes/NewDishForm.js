import { useHistory, useRouteMatch } from "react-router-dom";

import React, { useEffect, useRef } from "react";
import useFetch from "../../hooks/useFetch";
import { addNewDishRequest } from "../../api/api";

import classes from "./NewDishForm.module.css";

const NewDishForm = (props) => {
	const match = useRouteMatch()
	console.log(match.url)
	const history = useHistory()
	
	const titleRef = useRef();
	const descRef = useRef();
	const priceRef = useRef();

	const {
		sendRequest,
		status,
		error,
	} = useFetch(addNewDishRequest);

	useEffect(() => {
		if (status === "done" && !error) {
			history.goBack()
		}
	}, [status, error, history]);

	const addNewDish = (requestData) => {
		if (match.url === '/menu/fast-food/add-dish') {
			sendRequest({...requestData, url: '/menu/fast-food'});
		}

		if (match.url === '/menu/protein/add-dish') {
			sendRequest({...requestData, url: '/menu/protein'});
		}

		if (match.url === '/menu/vege/add-dish') {
			sendRequest({...requestData, url: '/menu/vege'});
		}
	};

	const addNewDishHandler = async (event) => {
		event.preventDefault();
		const dishData = {
			title: titleRef.current.value,
			description: descRef.current.value,
			price: priceRef.current.value,
		};

		addNewDish(dishData);
		titleRef.current.value = "";
		descRef.current.value = "";
		priceRef.current.value = "";
	};

	return (
		<div className={classes['form-control']}>
			<form onSubmit={addNewDishHandler} className={classes.form}>
				<h1>{status}</h1>
				<label htmlFor="title">Dish title</label>
				<input
					type="text"
					id="title"
					ref={titleRef}
					style={{ color: "black" }}
				/>
				<label htmlFor="title">Dish price</label>
				<input
					type="number"
					id="price"
					ref={priceRef}
					style={{ color: "black" }}
				/>
				<label htmlFor="title">Dish description</label>
				<input
					type="description"
					id="description"
					ref={descRef}
					style={{ color: "black" }}
				/>
				<button type="submit" style={{ color: "red", padding: ".8em" }}>
					Add dish
				</button>
			</form>
		</div>
	);
};

export default NewDishForm;

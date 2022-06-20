import React, { useEffect } from "react";
import { renderAllDishes } from "../../api/api";
import useFetch from "../../hooks/useFetch";
import DishList from "../../components/dishes/DishList";
import { useRouteMatch } from "react-router-dom";

const Protein = () => {
    const match = useRouteMatch()
    const { url } = match

    const {
		sendRequest,
		status,
		data: loadedDishes,
	} = useFetch(renderAllDishes);

	useEffect(() => {
		sendRequest(url);
	}, [sendRequest, url]);


    if (status === "done") {
        return <DishList items={loadedDishes} />
	}

	return (
		<div style={{ marginTop: "2em" }}>
			<h1 style={{ marginBottom: ".4em", textAlign: "center" }}>
				All Proteins in our Offer
			</h1>
		</div>
	);
};

export default Protein;

import React, { useEffect, useRef } from "react";
import useFetch from "../../hooks/useFetch";
import { addNewDishRequest } from "../../api/api";

const NewDishForm = (props) => {
    const titleRef = useRef()
    const descRef = useRef()
    const priceRef = useRef()

    const { onDishAdded } = props

    const { sendRequest: sendDishReuqest, status, error} = useFetch(addNewDishRequest)

    useEffect(() => {
        if (status === 'done' && !error) {
            onDishAdded()
        }
    }, [status, error, onDishAdded])

    const addNewDish = (requestData) => {
        sendDishReuqest(requestData)
    }


    const addNewDishHandler = async (event) => {
        event.preventDefault();
        const dishData = {
            title: titleRef.current.value,
            description: descRef.current.value,
            price: priceRef.current.value
        }

        addNewDish(dishData)
        titleRef.current.value = ''
        descRef.current.value = ''
        priceRef.current.value = ''
    }

	return <form onSubmit={addNewDishHandler} >
        <h1>{status}</h1>
        <label htmlFor="title">Dish title</label>
        <input type="text" id="title" ref={titleRef} style={{color: 'black'}} />
        <label htmlFor="title">Dish price</label>
        <input type="number" id="price" ref={priceRef} style={{color: 'black'}} />
        <label htmlFor="title">Dish description</label>
        <input type="description" id="description" ref={descRef} style={{color: 'black'}} />
        <button type="submit" style={{color: 'red', padding: '.8em'}}>Add dish</button>
    </form>;
};

export default NewDishForm;

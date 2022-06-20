import React from "react";

import classes from './DishElement.module.css'

const DishElement = props => {
    const { title, description, price, id } = props


	return (
		<li className={classes['product-container']}>
			<div>
				<img
					className={classes['product-img']}
					src="https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80"
					alt=""
				/>
			</div>
            <div className={classes['product-info']}>
                <h1 className={classes['product-title']}>
                    {title}
                </h1>
                <p className={classes['product-price']}>{price}$</p>
                <h3 className={classes['product-description']}>{description}</h3>
                <div className={classes['product-buttons']}>
                    <button className={classes['product-button-more']}>More</button>
                    <button className={classes['product-button-order']}>Add to cart</button>
                </div>
            </div>
		</li>
	);
};

export default DishElement;

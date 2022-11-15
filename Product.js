import React, { useState } from "react";
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
import { addToOrders } from "../slices/ordersSlice";

function Product({ id, title, category, description, image, price }) {
    const [rating, setRating] = useState(Math.floor(Math.random() * 5));
    const [hasPrime, setHasPrime] = useState(Math.random() < 0.5);
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id,
            title, 
            category, 
            description, 
            image, 
            price,
            hasPrime,
            rating
        };
        dispatch(addToBasket(product));
        dispatch(addToOrders(product));
    }
    return (
        <div className=" relative flex flex-col p-10 z-30 m-5 bg-white">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400 ">{category}</p>
            <img src={image}  className="h-20 w-20 object-contain" />
            <h4 className="my-3 font-bold">{title}</h4>
            <div className="flex">
                {Array(rating).fill().map((el,i, []) => (
                    <StarIcon className="h-5 text-yellow-500"  />
                ))}
            </div>
            <p className="my-2 text-xs line-clamp-2">{description}</p>
            <div className="mb-5">
                    <span className="font-bold">
                        <Currency quantity={price} currency="GBP" />
                    </span>
            </div>
            {hasPrime && (
                <div className="flex items-center -mt-5 space-x-2">
                    <img src="https://links.papareact.com/fdw" alt="" className="w-12" />
                    <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                </div>
            )}
            <button onClick={addItemToBasket} className="mt-auto button">Add to Basket</button>
        </div>
    )
}

export default Product

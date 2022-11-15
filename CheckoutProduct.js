import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import { addToBasket } from '../slices/basketSlice';
import { removeFromBasket } from '../slices/basketSlice';
import { useDispatch } from "react-redux";
import { addToOrders, removeFromOrders } from '../slices/ordersSlice';




function CheckoutProduct({ id, price, title, description, hasPrime, rating, image, category}) {
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
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }));
        dispatch(removeFromOrders({ id }));

    }
    return (
        <div className="grid grid-cols-5">
            <img src={image} className='object-contain h-20 w-20' />
            <div className="col-span-3 mx-5">
                <p className="font-bold">{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((el,i,[]) => (
                        <StarIcon key={i} className="h-5 text-yellow-500 " />
                    ))}
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                        <span className="font-bold">
                            <Currency quantity={price} currency="GBP" />
                        </span>
                    {hasPrime && (
                        <div className="space-x-2 flex items-center">
                            <img src="https://links.papareact.com/fdw" alt="" className="w-12" loading="lazy" />
                            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                        </div>
                    )}
            </div>
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button onClick={addItemToBasket} className="button">Add to Basket</button>
                <button onClick={removeItemFromBasket} className="button">Remove From Basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct

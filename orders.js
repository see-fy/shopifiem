import React, { useEffect }  from 'react';
import Header from "../components/Header";
import Order from "../components/Order";
import { selectUser } from "../slices/userSlice";
import { selectOrders } from "../slices/ordersSlice";
import { useSelector } from 'react-redux';


function Orders() {
    const user = useSelector(selectUser);
    const orders = useSelector(selectOrders);
    //console.log(orders);
    return (
        <div>
            <Header />
            <main className="max-w-screen-lg mx-auto p-10">
                <h1 className="text-3xl mb-2 pb-1 border-b border-yellow-400">Your Orders...</h1>
                {user ? 
                    <h2>{orders.length}</h2>
                    : "Please Sign in to see your orders..."
                }
                <div className="mt-5 space-y-4">
                    {orders?.map(({ id, price, image, amountShipping, timestamp, items }, i, arr) => (
                        <Order
                            key={id}
                            id={id}
                            amount={price}
                            images={image}
                            amountShipping={Math.floor(price * 1/10)}
                            timestamp={new Date()}
                            items={arr.length}
                         />
                    ))}
                </div>
            </main>
        </div>
    )
}

export default Orders


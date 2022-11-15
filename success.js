import React  from 'react';
import { CheckCircleIcon } from "@heroicons/react/outline"
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header"

function Success() {
    const navigate = useNavigate();
    return (
        <div className="bg-gray-100 h-screen">
            <Header />
            <main className=" max-w-screen-lg  mx-auto">
                <div className="flex flex-col p-10 bg-white">
                    <div className="flex items-center space-x-2 mb-5">
                        <CheckCircleIcon className="text-green-600 h-10" />
                        <h1 className="text-3xl">Thank You, Your order has been confirmed...!!!</h1>
                    </div>
                    <p className="text-xs mb-5">
                        Thank you, for shopping with us Jamber we truly appreciate it. We will
                        send you a confirmation massage afterwards.
                        If you would like to check the orders status please press the link "Go to myOders" below...
                    </p>
                    <button onClick={()=>navigate('/orders')} className="button">Go to my orders</button>
                </div>
            </main>
        </div>
    )
}

export default Success

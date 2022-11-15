import moment from "moment";
import Currency from 'react-currency-formatter';


function Order({ id, amount, images, amountShipping, timestamp, items }) {
    return (
        <div className="relative border rounded-md">
            <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
                <div>
                    <p className="font-bold text-xs">ORDER PLACED</p>
                    <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
                </div>
                <div>
                    <p className="font-bold text-xs">TOTAL</p>
                    <p>
                        <Currency currency="GBP" quantity={amount} />- Next-Day Delivery {" "}
                        <Currency currency="GBP" quantity={amountShipping} />
                    </p>
                </div>
                <p className=" text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500 ">{items.length} items</p>
                <p className=" top-2 right-2 absolute w-40 lg:w-72 truncate text-xs whitespace-nowrap">ORDER # {id} items</p>
            </div>
            <div className="p-5 sm:p-10">
                <div className="flex space-x-6 overflow-x-auto bg-gray-100 p-4 rounded">
                        <img src={images} alt="" className="h-20 object-fit sm:h-32" />
                    
                </div>
            </div>
        </div>
    )
}

export default Order

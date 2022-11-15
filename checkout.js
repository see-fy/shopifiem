import Header from "../components/Header";
import { selectItems } from "../slices/basketSlice";
import { selectUser } from "../slices/userSlice";
import { useSelector } from 'react-redux';
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from 'react-currency-formatter';
import { useNavigate } from 'react-router-dom';



function Checkout() {
    const items = useSelector(selectItems);
    const user = useSelector(selectUser);
    const total = items.reduce((acc, el,i ) => acc + el.price, 0);
    const  navigate = useNavigate();

    
    return (
        <div className="bg-gray-100">
            <Header />
            <main className="lg:flex max-w-screen-2xl mx-auto">
                <div className="flex-grow m-5 shadow-sm">
                    <img 
                        src="https://links.papareact.com/ikj"
                        className="w-full h-[24rem]"
                        alt=""
                    />
                    <div className="flex space-y-10 flex-col p-5 bg-white">
                        <h1 className="text-3xl border-b pb-4">
                            {items.length === 0 ? 'Your Basket is Empty' : 'Your Shopping Basket...'}
                        </h1>
                        {items.map((item, i) => (
                            <CheckoutProduct
                            key={i}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                            category={item.category}
                            hasPrime={item.hasPrime}
                            rating={item.rating}
                            image={item.image}
                             />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col bg-white p-10 shadow-md">
                    {items.length > 0 && 
                        (<>
                            <h2 className="whitespace-nowrap">
                                Subtotal ({items.length} items):{" "} 
                                <span className="font-bold">
                                    <Currency quantity={total} currency="GBP" />
                                </span> 
                            </h2>   
                            <button 
                                onClick={() => navigate("/payment", { state: {total: total, items: items}})}
                                role="link" 
                                disabled={!user} 
                                className={`button mt-2 ${!user && "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"}`}>
                                    {!user ? 'Sign In To Checkout' : 'Proceed To Checkout'}
                            </button>
                        </>
                        )
                    }
                </div>

            </main>
        </div>
    )
}

export default Checkout

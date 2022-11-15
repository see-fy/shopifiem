import React, { useRef }  from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../slices/basketSlice';


export default function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef  = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();

  const signin = (event) => {
    event.preventDefault();
    location.state.items.map(({ id }) => (
      dispatch(removeFromBasket({ id }))
    ))
    navigate("/success")

  }

  return (
    <div className="bg-black h-full flex flex-col p-10">
     <div className="h-full flex p-20 flex-row items-center justify-center">
     <div className="w-full h-full relative">
        <img src="https://cdn.pixabay.com/photo/2016/12/20/22/32/holiday-shopping-1921658__480.jpg"  alt="" className="object-cover w-full h-[46rem]" />
        <h1  className="text-white  text-6xl top-5 absolute left-20">Payment Options</h1>
        <h1 className="text-pink-300 text-7xl font-bold top-28 left-20 absolute">{location.state.total}$</h1>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-96 bg-gray-700 opacity-80 p-10" >
          <form>
              <h1 className="text-white text-xl font-bold mb-4">Fill the infos to proceed</h1>
              <input type="text" placeholder='Full Name' required ref={passwordRef}  className="bg-gray-800 h-14 text-white rounded p-2 my-3  w-full" />
              <input type="email" placeholder='Email' required ref={emailRef} className="bg-gray-800 h-14 text-white rounded p-2 my-3  w-full" />
              <input type="text" placeholder='Gender' required className="bg-gray-800 h-14 text-white rounded p-2 my-3  w-full" />
              <input type="numeric" placeholder='Birth Date' required  className="bg-gray-800 h-14 text-white rounded p-2 my-3  w-full" />
              <input type="numeric" placeholder='Phone Number' required  className="bg-gray-800 h-14 text-white rounded p-2 my-3  w-full" />
              <input type="numeric" placeholder='Card Number' required  className="bg-gray-800 h-14 text-white rounded p-2 my-3  w-full" />
              <div className=" flex flex-row items-center justify-between">
              <input type="numeric" placeholder='Expiration Date' required  className="bg-gray-800 h-14 text-white rounded p-2 my-3 mr-4 w-full" />
              <input type="password" placeholder='Code' required  className="bg-gray-800 h-14 text-white rounded p-2 my-3  w-20" />
              </div>
              <button type="submit" onClick={signin} className="bg-pink-300 text-gray-100 font-bold text-2xl rounded h-14 p-3 w-full" >Pay</button>
          </form>
        </div>
      </div>
     </div>
        <div className="flex flex-col items-center justify-between">
          <h1 className="text-white text-lg mb-10">Or proceed with our parteners</h1>
          <button type="submit" onClick={signin} className="bg-orange-500 text-gray-100 font-bold text-2xl my-3 rounded h-14 p-3 w-96" >Pay with Orange Money</button>
          <button type="submit" onClick={signin} className="bg-blue-900 text-gray-100 font-bold text-2xl my-3 rounded h-14 p-3 w-96" >Pay with Wave</button>
          <button type="submit" onClick={signin} className="bg-gray-900 text-gray-100 font-bold text-2xl my-3 rounded h-14 p-3 w-96" >Pay with Paypal</button>
        </div>
    </div>
  );
}


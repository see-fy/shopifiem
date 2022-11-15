import React from 'react';
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon
} from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';
import { selectItems } from "../slices/basketSlice";
import { selectUser } from "../slices/userSlice";
import { useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
import { auth } from '../firebase';


function Header() {
    const navigate = useNavigate();
    const items = useSelector(selectItems);
    const user = useSelector(selectUser);

    const logout = () => { 
        signOut(auth).then(() => {
          // Sign-out successful.
        
        }).catch((error) => {
          // An error happened.
          console.log(error)
        });
      }

    return (
        <header>
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2  ">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <img
                        onClick={() => navigate('/')}
                        src='https://links.papareact.com/f90'
                        alt=""
                        className="cursor-pointer object-contain h-20 w-40 mr-4 mt-2"
                    />
                </div>
                <div className=" hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 ">
                    <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none" />
                    <SearchIcon className="h-12 p-4" />
                </div>
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div onClick={!user && navigate('/login')} className="link cursor-pointer">
                        <p>
                            {user ? `Hello, ${user.email.slice(0,10)}...` : 'Sign In'}
                        </p>
                        <p className="font-extrabold md:text-sm" onClick={logout}>Sign Out</p>
                    </div>
                    <div onClick={() => user && navigate("/orders")} className=" cursor-pointer link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div onClick={() => navigate('/checkout')} className="relative link flex items-center cursor-pointer">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center text-black rounded-full font-bold" >{items.length}</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2 ">Basket</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-sm text-white">
                <p className="link flex items-center">
                    <MenuIcon  className="h-6 mr-1" />
                    All
                </p>
                <p className="link">Prime video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today's Deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>
            </div>
        </header>
    )
}

export default Header

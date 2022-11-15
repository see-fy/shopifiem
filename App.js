import React, { useEffect }  from 'react';
import Home from './pages/home';
import Checkout from './pages/checkout';
import Success from './pages/success';
import Orders from './pages/orders';
import Payment from './pages/payment';
import Login from './pages/login';
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login, logout, selectUser, } from './slices/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import { useSelector } from 'react-redux';
import './styles/global.css'



function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        dispatch(login({
          uid: user.uid,
          email: user.email
        }));
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(logout())
      }
    });
    return unsub;
  }, [dispatch])


  return (
    <div className="bg-black">
      <Routes>
      { !user && (
        <>
        <Route path="login" element={<Login />} />

        </>
      ) 
      }
      { user && (
      <>
        <Route exact path="/" element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="orders" element={<Orders />} />
        <Route path="success" element={<Success />} />
        <Route path="payment" element={<Payment />} />
      </>
      )
      }
      <Route path="*" element={<Navigate to={user ? "/" : "/login" } />} />

      </Routes>
    </div>
  );
}

export default App;

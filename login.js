import React, { useRef } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup  } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from "firebase/auth";


const provider = new GoogleAuthProvider();



function Login() {
  const navigate = useNavigate();
  const emailRef  = useRef(null);
  const passwordRef = useRef(null);



  const signup =  (event) => {
    event.preventDefault();
 createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user);
    navigate('/')
    

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorCode, errorMessage);
  });
  }
  const signin = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...

    console.log(user);
    navigate('/')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);

  });
  }
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token)
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        navigate('/')

        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(errorCode, errorMessage, email, credential)
      });
  }

  return (

      <div className="relative items-center justify-center flex ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRekq6G-JknX5yi05SKnQL9i5Ejvtv4bL0Jtw&usqp=CAU" className="h-full w-full object-cover" alt="" />
          <div className="absolute h-[42rem] w-96 bg-black opacity-80 p-10" >
            <form>
                <h1 className="text-white text-4xl font-bold">Sign In</h1>
                <input type="email" placeholder='Email or Phone Number' required ref={emailRef} className="bg-gray-800 h-14 text-white rounded p-2 my-6  w-full" />
                <input type="password" placeholder='Enter Password' required ref={passwordRef}  className="bg-gray-800 h-14 text-white rounded p-2 mb-12  w-full" />
                <button type="submit" onClick={signin} className="bg-red-700 text-gray-100 font-bold text-2xl rounded h-14 p-3 w-full" >Sign In</button>
                <div className=" flex flex-row items-center justify-between mt-2 mb-20">
                  <div className="flex flex-row items-center justify-around">
                    <input type="checkbox" className="p-2 text-white h-4 w-4 rounded bg-gray-800" defaultChecked />
                    <p className="text-gray-400 text-md ml-2 cursor-pointer">Remember Me</p>
                  </div>
                  <h1 className="text-gray-400 text-md cursor-pointer">Need Help?</h1>
                </div>
                <button onClick={loginWithGoogle} className="text-gray-400 mb-3 cursor-pointer text-md font-semibold">Login with Google</button>
                <div className="flex flex-row mb-3">
                  <h1 className="text-gray-400 text-md mr-2">New To Shopifiem?</h1>
                  <button type="submit" onClick={signup} className="text-white cursor-pointer text-md font-semibold hover:border-b">Sign Up Now</button>
                </div>
                <div className="flex flex-row">
                  <p className="text-gray-400  text-sm font-semibold">This page is protected by Google reCAPTCHA to <br /> ensure you're not a bot. <span className="text-blue-900 cursor-pointer text-lg font-semibold hover:border-b">Learn More.</span> </p>
                  

                </div>
            </form>

          </div>
      </div>
  )
}

export default Login;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from 'firebase/app';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDEtlhAn_NBLr7fLyfHeH29U9mD3hQ_fcc",
    authDomain: "shopify-8fd89.firebaseapp.com",
    projectId: "shopify-8fd89",
    storageBucket: "shopify-8fd89.appspot.com",
    messagingSenderId: "294271325891",
    appId: "1:294271325891:web:f0e916eca5876a6462f476",
    measurementId: "G-LGR4MYCWKJ"
  };

  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export  { auth, db };
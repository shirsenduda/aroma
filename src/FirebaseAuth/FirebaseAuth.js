import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDOE1MtAozROn6jNjtrkM2KXtPwUBxMJIE",
  authDomain: "cafe-shop-1d0ca.firebaseapp.com",
  projectId: "cafe-shop-1d0ca",
  storageBucket: "cafe-shop-1d0ca.appspot.com",
  messagingSenderId: "863773331634",
  appId: "1:863773331634:web:fb7b2496f7d3ccc35e39ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export{app,auth}
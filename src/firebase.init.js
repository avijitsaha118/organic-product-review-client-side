// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnEZ7iahjRiUzVaQf6g2oMDf4SQFHZ7zU",
    authDomain: "organic-product-review-site.firebaseapp.com",
    projectId: "organic-product-review-site",
    storageBucket: "organic-product-review-site.appspot.com",
    messagingSenderId: "739122807092",
    appId: "1:739122807092:web:0a22e875c1e4e6df396561"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
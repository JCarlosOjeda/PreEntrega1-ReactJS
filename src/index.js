import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkZaWgYUShw5WwGSeu3yf3Sms1TT3Udfc",
  authDomain: "holapatio-81af7.firebaseapp.com",
  projectId: "holapatio-81af7",
  storageBucket: "holapatio-81af7.appspot.com",
  messagingSenderId: "831150389202",
  appId: "1:831150389202:web:9ec78f31e55cbd20b5fa0b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


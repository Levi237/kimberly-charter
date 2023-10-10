import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// import dotenv from 'dotenv';
// dotenv.config();

// import firebase from "firebase/compat/app";
// import 'firebase/firestore';
 
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// firebase.initializeApp({
//   apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
//   authDomain: "kimberly-charter.firebaseapp.com",
//   projectId: "kimberly-charter",
//   storageBucket: "kimberly-charter.appspot.com",
//   messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
//   appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
//   measurementId: `${process.env.REACT_APP_FIREBASE_MEASUREMENT_ID}`
// });

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

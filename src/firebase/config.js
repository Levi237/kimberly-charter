import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase } from "firebase/database";
import { getFirestore } from 'firebase/firestore'
// import { getAuth } from "firebase/auth";

    const firebaseConfig = {
          apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
          authDomain: "kimberly-charter.firebaseapp.com",
          databaseURL: "https://kimberly-charter-default-rtdb.firebaseio.com",
          projectId: "kimberly-charter",
          storageBucket: "kimberly-charter.appspot.com",
          messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
          appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
          measurementId: `${process.env.REACT_APP_FIREBASE_MEASUREMENT_ID}`
    };

    const firebaseApp = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);

    // export const auth = getAuth(firebaseApp);
    // const db = getDatabase(firebaseApp);
    const fs = getFirestore(firebaseApp);
    export default fs;
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

function initConnexion()
{
    const firebaseConfig = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: "rdv-client-1b59f.firebaseapp.com",
        databaseURL: "https://rdv-client-1b59f-default-rtdb.firebaseio.com",
        projectId: "rdv-client-1b59f",
        storageBucket: "rdv-client-1b59f.appspot.com",
        messagingSenderId: "82592629973",
        appId: "1:82592629973:web:a8430e2ba9826b5cc14e5c",
        measurementId: "G-7ZNQV4TNXG"
      };

      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app); 
      
}

export default initConnexion
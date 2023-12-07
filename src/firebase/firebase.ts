import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBHxtBuqzS0QorMkGLnjFa9l5XBYCXlOks",
  authDomain: "auth-firebase-14ed3.firebaseapp.com",
  projectId: "auth-firebase-14ed3",
  storageBucket: "auth-firebase-14ed3.appspot.com",
  messagingSenderId: "874340827689",
  appId: "1:874340827689:web:6def7e52bf0f2e4df11238"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db= getFirestore(app)

export const auth= getAuth(app);

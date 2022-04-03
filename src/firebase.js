import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzoqfr3wcHLO26on5k2Ma6xw-yTbgDx2k",
  authDomain: "clone-5845d.firebaseapp.com",
  databaseURL: "https://clone-5845d-default-rtdb.firebaseio.com",
  projectId: "clone-5845d",
  storageBucket: "clone-5845d.appspot.com",
  messagingSenderId: "349479016660",
  appId: "1:349479016660:web:3217922783bbeb2d7bc341",
  measurementId: "G-LT5RF7STSN"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(firebaseApp);

export { db, auth };

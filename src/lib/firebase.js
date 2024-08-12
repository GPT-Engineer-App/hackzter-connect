import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLspPreZIlDHoK6D0BDInsLTNBio_QzOA",
  authDomain: "firstsee-cb8d8.firebaseapp.com",
  projectId: "firstsee-cb8d8",
  storageBucket: "firstsee-cb8d8.appspot.com",
  messagingSenderId: "972127925585",
  appId: "1:972127925585:web:4d9acbe4c9cd9b82f30f70"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

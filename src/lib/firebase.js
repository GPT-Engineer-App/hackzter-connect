import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDLspPreZIlDHoK6D0BDInsLTNBio_QzOA",
  authDomain: "firstsee-cb8d8.firebaseapp.com",
  databaseURL: "https://firstsee-cb8d8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "firstsee-cb8d8",
  storageBucket: "firstsee-cb8d8.appspot.com",
  messagingSenderId: "972127925585",
  appId: "1:972127925585:web:4d9acbe4c9cd9b82f30f70",
  measurementId: "G-RC8FT0XVFK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };

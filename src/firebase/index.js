
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqC_Ee17QQ6dNebSRLuQ12j9zgnZcHgO8",
  authDomain: "app-portifolios.firebaseapp.com",
  databaseURL: "https://app-portifolios-default-rtdb.firebaseio.com",
  projectId: "app-portifolios",
  storageBucket: "app-portifolios.appspot.com",
  messagingSenderId: "974212528268",
  appId: "1:974212528268:web:4d112c10d361c57a1063a9",
  measurementId: "G-6NP3MXRJQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  apiKey: "AIzaSyDaDLXag1Vm61NjlFrUQkvInSWo8FCG01w",
  authDomain: "havenly-de0a6.firebaseapp.com",
  projectId: "havenly-de0a6",
  storageBucket: "havenly-de0a6.appspot.com",
  messagingSenderId: "1083060262159",
  appId: "1:1083060262159:web:fa6852877f8d787b2a5a7a"
=======
>>>>>>> e5c84867ed06d42e58e327361c020f410e03d491

    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
<<<<<<< HEAD
=======
>>>>>>> 93ac0196f84472666c7a4e710e3f02fdfbb820d9
>>>>>>> e5c84867ed06d42e58e327361c020f410e03d491
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
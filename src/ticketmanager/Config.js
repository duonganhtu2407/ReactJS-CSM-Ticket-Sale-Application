import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9C0wsveBqGGy4mRkMff8msxCDUZaKyHI",
  authDomain: "cms-react-2c0d4.firebaseapp.com",
  projectId: "cms-react-2c0d4",
  storageBucket: "cms-react-2c0d4.appspot.com",
  messagingSenderId: "194917677857",
  appId: "1:194917677857:web:5752deedc113f5a60a9c60",
  measurementId: "G-EXSLPM0EG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn4PbSX-TwWhTnDCHmWBRdpekzx1rHCrE",
  authDomain: "contactapp-b901e.firebaseapp.com",
  projectId: "contactapp-b901e",
  storageBucket: "contactapp-b901e.firebasestorage.app",
  messagingSenderId: "46232102698",
  appId: "1:46232102698:web:bfdda9f00063ff4b872053"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
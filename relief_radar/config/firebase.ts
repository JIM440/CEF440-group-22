
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA8Upx8sXo5UV9_YfwRLFrwKgAyXUlDsy0",
  authDomain: "relief-radar.firebaseapp.com",
  projectId: "relief-radar",
  storageBucket: "relief-radar.appspot.com",
  messagingSenderId: "345836559744",
  appId: "1:345836559744:web:f37c8cb83d03e32d71f565",
  measurementId: "G-KM76HFVDN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);


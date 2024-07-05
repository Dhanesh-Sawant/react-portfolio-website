
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// const cors = require('cors')({origin: true})

const firebaseConfig = {
  apiKey: "AIzaSyC66uIsnSSKMBI_bJ2TlRJCO_Nh0xU1M2E",
  authDomain: "my-portfolio-dashboard-7de85.firebaseapp.com",
  projectId: "my-portfolio-dashboard-7de85",
  storageBucket: "my-portfolio-dashboard-7de85.appspot.com",
  messagingSenderId: "101106416212",
  appId: "1:101106416212:web:e24f91b5da79e1e9c00bc1",
  measurementId: "G-VFD06WQ8VP"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

// app.use(cors({ origin: "http://localhost:3000", credentials: true }));

;

export const signInWithGoogle = () => signInWithPopup(auth, provider);
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDWmaW90aVilPbyZOhm8IvakgEzDBn24tw",
  authDomain: "fir-admin-387f1.firebaseapp.com",
  projectId: "fir-admin-387f1",
  storageBucket: "fir-admin-387f1.appspot.com",
  messagingSenderId: "564610751667",
  appId: "1:564610751667:web:b30fe984afd2aaaadde4c6",
  measurementId: "G-NM57HHGE3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;

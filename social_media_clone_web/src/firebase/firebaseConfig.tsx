import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAhfwJrimoDwe9o5QMBiYVKCOpz_Zy-BLU",
  authDomain: "facespace-ad0f1.firebaseapp.com",
  projectId: "facespace-ad0f1",
  storageBucket: "facespace-ad0f1.appspot.com",
  messagingSenderId: "309158886505",
  appId: "1:309158886505:web:05e0a4b3b0651c0f0836f8",
  measurementId: "G-TLHQRD3N68"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const db = getFirestore(app)
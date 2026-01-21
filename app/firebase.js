import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";



const firebaseConfig = {
  apiKey: "AIzaSyD2ZgOEob7w2LF8o3TpxUQr7uLTRSCagXo",
  authDomain: "crud-c0fd1.firebaseapp.com",
  projectId: "crud-c0fd1",
  storageBucket: "crud-c0fd1.firebasestorage.app",
  messagingSenderId: "332483569563",
  appId: "1:332483569563:web:fe2db7c61da2ab4b6f233e",
  measurementId: "G-NFBMW5N79N"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

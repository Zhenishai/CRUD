import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const msg = document.getElementById("authMsg");
const emailInput = document.getElementById("authEmail");
const passwordInput = document.getElementById("authPassword");

document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = emailInput.value;
  const pass = passwordInput.value;

  try {
    const res = await signInWithEmailAndPassword(auth, email, pass);
    msg.textContent = `Hello, ${res.user.email}!`;
  } catch (error) {
    if (error.code === "auth/user-not-found") {
      msg.textContent = "No such user — first register";
    } else if (error.code === "auth/wrong-password") {
      msg.textContent = "Wrong password";
    } else {
      msg.textContent = error.message;
    }
  }
});

document.getElementById("registerBtn").addEventListener("click", async () => {
  const email = emailInput.value;
  const pass = passwordInput.value;

  try {
    await createUserWithEmailAndPassword(auth, email, pass);
    msg.textContent = "Registration successful — now login";
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      msg.textContent = "User already exists — try login";
    } else {
      msg.textContent = error.message;
    }
  }
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.dispatchEvent(new CustomEvent("authChanged"));
  }
});

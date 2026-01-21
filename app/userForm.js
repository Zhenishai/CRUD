import { db, auth } from "./firebase.js";
import {doc, setDoc
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const form = document.getElementById("userForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  msg.textContent = ""; 

  const user = auth.currentUser;
  if (!user) return alert("Login first!");

  const name = form.name.value.trim();
  const surname = form.surname.value.trim();
  const age = form.age.value.trim();
  const color = form.color.value.trim();

  if (!name || !surname || !age || !color) {
    msg.textContent = "Please fill out all fields before saving.";
    msg.style.color = "red";
    return;
  }

  const data = { name, surname, age, color };

  try {
    await setDoc(doc(db, "users", user.email), data);
    msg.textContent = "Saved!";
    msg.style.color = "green";
    form.reset();
    document.dispatchEvent(new CustomEvent("dataChanged"));
  } catch (err) {
    msg.textContent = "Error saving: " + err.message;
    msg.style.color = "red";
  }
});


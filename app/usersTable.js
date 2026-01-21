import { db } from "./firebase.js";
import {
  collection, getDocs
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const body = document.getElementById("usersBody");

async function loadTable() {
  const query = await getDocs(collection(db, "users"));
  body.innerHTML = "";
  query.forEach((docSnap) => {
    const d = docSnap.data();
    body.innerHTML += `
      <tr>
        <td>${d.name || ""}</td>
        <td>${d.surname || ""}</td>
        <td>${d.age || ""}</td>
        <td>${d.color || ""}</td>
      </tr>`;
  });
}

document.addEventListener("authChanged", loadTable);
document.addEventListener("dataChanged", loadTable);

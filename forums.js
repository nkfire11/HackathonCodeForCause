
console.log("Initializing Database...")
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHKaVTCeF_7nOSv8UW5AFRA5iUCaxkW1M",
  authDomain: "tmas-academy.firebaseapp.com",
  projectId: "tmas-academy",
  storageBucket: "tmas-academy.appspot.com",
  messagingSenderId: "1085855121963",
  appId: "1:1085855121963:web:bf449b4cbbc01b507e606e",
  measurementId: "G-63SFYHGS25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
console.log("Database loaded!: ", database)
console.log(ref)

let postRef = ref(database, "posts");

onValue(postRef, (data) => {
    let q = data.val();
    let values = Object.values(q);
    renderAllPosts(values);
}, (errorObject) => {
    alert(`Error! ${errorObject.name}`)
})

function pushToDatabase(title, text, time) {
    let obj = {
        title: title,
        text: text,
        time: time
    }
    const getRef = ref(database, "posts")
    console.log(getRef)
    push(getRef, obj)
}

document.getElementById("sendPost").onclick = () => {
    pushToDatabase(document.getElementById("postCreateTitle").value, document.getElementById("postCreateContent").value, new Date().valueOf());
    //renderNewPost()
}

function renderAllPosts(list) {
    let postDiv = document.getElementById('postDivs');
    postDiv.innerHTML = "";
    list.reverse();
    list.forEach((post) => {
        console.log(post);
        postDiv.innerHTML += `<div class = "post">
        <h1 class = "title">
        ${post.title}
        </h1>
        <time>${new Date(post.time)}</time>
        <p>
        ${post.text}
        <p>
    </div>`
    })
}
const firebaseConfig = {
    apiKey: "AIzaSyCIMm6SbM4N71D7fj54dwboARFllwdD2f8",
    authDomain: "letschat-197bb.firebaseapp.com",
    databaseURL: "https://letschat-197bb-default-rtdb.firebaseio.com",
    projectId: "letschat-197bb",
    storageBucket: "letschat-197bb.appspot.com",
    messagingSenderId: "471854169710",
    appId: "1:471854169710:web:ad04c2e0619ff8cc4cb07f"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function addUser(){
    username = document.getElementById("username").value;

    localStorage.setItem("Username", username);
    console.log(username);
    window.location = "kwitter_room.html";
}

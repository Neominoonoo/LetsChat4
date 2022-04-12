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
 firebase.initializeApp(firebaseConfig);


Username = localStorage.getItem("Username");
document.getElementById("Username").innerHTML = "Welcome "+Username+"!";

function addRoom(){
    roomname = document.getElementById("roomname").value;
    firebase.database().ref("/").child(roomname).update({
          purpose:"room" 
    });
    localStorage.setItem("roomname", roomname);
    window.location ="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room names - "+Room_names);
    row ="<div class='roomname' id="+Room_names+"onclick='goToRoomname(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function goToRoomname(name){
    console.log(name);
    localStorage.setItem("roomname", name);
    window.location = "kwitter_page.html";
}

function logout(){
    localStorage.removeItem("Username");
    localStorage.removeItem("roomname");
    window.location ="index.html";
}
const firebaseConfig = {
    apiKey: "AIzaSyDTJMArjUo3pv6b9OEjw8Nn3Lm0z2Wg8XU",
    authDomain: "kwitterapp-381b7.firebaseapp.com",
    databaseURL: "https://kwitterapp-381b7-default-rtdb.firebaseio.com",
    projectId: "kwitterapp-381b7",
    storageBucket: "kwitterapp-381b7.appspot.com",
    messagingSenderId: "345341495795",
    appId: "1:345341495795:web:e5b81d71d9fb3e06ccea86"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
username = localStorage.getItem("username");
roomname = localStorage.getItem("roomname");
function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
          like: 0,
          name: username,
          message: msg
    });
document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location ="index.html";
}
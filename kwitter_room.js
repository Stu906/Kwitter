var firebaseConfig = {
      apiKey: "AIzaSyBd2BAaLgEv7L8unSacMg0qZVeovLDBWwM",
      authDomain: "kwitter-51c26.firebaseapp.com",
      databaseURL: "https://kwitter-51c26-default-rtdb.firebaseio.com",
      projectId: "kwitter-51c26",
      storageBucket: "kwitter-51c26.appspot.com",
      messagingSenderId: "51155221187",
      appId: "1:51155221187:web:50474ed1d040cc1ff24076"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("User_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - "+ room_name);
      row = "<div class='room_name' id='+Room_names+' onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML = row;
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}


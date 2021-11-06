// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCNYHMr9GXZCE5yqlDcqwjiC56vuvkaXjU",
      authDomain: "kwitter-a381f.firebaseapp.com",
      databaseURL: "https://kwitter-a381f-default-rtdb.firebaseio.com",
      projectId: "kwitter-a381f",
      storageBucket: "kwitter-a381f.appspot.com",
      messagingSenderId: "363813664578",
      appId: "1:363813664578:web:9670b06213a79b06ba7adb"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").vlaue="";

}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
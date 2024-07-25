// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTVo9KsOFOtqtZV3BZzcpr_J-HVJxM-JA",
    authDomain: "sitioweb2-75ac7.firebaseapp.com",
    projectId: "sitioweb2-75ac7",
    storageBucket: "sitioweb2-75ac7.appspot.com",
    messagingSenderId: "165952004299",
    appId: "1:165952004299:web:77aac2672a8a9774c2bb4e"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapchot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    //Inicia el código
    console.log("Nombre de la sala: "+ Room_names);
    row = "<div class='romm_name' id =" +Room_names+ onclick="'redirectionToRoomName(this.id)' >#" + Room_names + "</div><hr>";
    

//Finaliza el código
});});}
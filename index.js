import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAGk__X_RX1Sce-XTJSEycswOVi7M_1Ba8",
  authDomain: "tutorial-13697.firebaseapp.com",
  databaseURL: "https://tutorial-13697-default-rtdb.firebaseio.com",
  projectId: "tutorial-13697",
  storageBucket: "tutorial-13697.appspot.com",
  messagingSenderId: "543465819597",
  appId: "1:543465819597:web:0b20bc40f94bc5056a4884"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

send.addEventListener('click',(e) =>{ 
Sends();
});

function Sends(){
    Number = parseFloat(document.getElementById('Number').value);
    if (Number < 255){
      const db = getDatabase();
  set(ref(db, 'Number/'), {
    value : Number
  });
    }
    else{
      alert("Value not higher than 255")
    }
}

function Getval(){
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Checker` + '/value')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        if (snapshot.val() == "Chac la chua chay dau!"){
          document.getElementById('Texter').innerHTML = "Chắc là chưa cháy đâu!";
          document.getElementById("body").style.backgroundColor = '#41f1b6';
        }
        else {
          document.getElementById('Texter').innerHTML = "Cháy rồi đựu mắ!!!!!!!";
          document.getElementById("body").style.backgroundColor = '#ff7782';
        }

      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
}

setInterval(function(){Getval()},20);

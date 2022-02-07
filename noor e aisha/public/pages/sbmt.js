// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoP6-kuewi0-Zy5NooyywBpeMSONJeycM",
  authDomain: "noor-e-aisha-institute.firebaseapp.com",
  projectId: "noor-e-aisha-institute",
  storageBucket: "noor-e-aisha-institute.appspot.com",
  messagingSenderId: "735331336788",
  appId: "1:735331336788:web:38832889336d320fffa3c1",
  measurementId: "G-XLV13K6K9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { getDatabase, ref, get, set, child, update, remove,push } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";

 const db = getDatabase();


  //=================================submit Work==============================


   
      
  var frmname = document.getElementById("frmname")
  var frmfathername = document.getElementById("frmfathername")
  var frmaddress = document.getElementById("frmaddress")
  var frmmobno = document.getElementById("frmmobno")
  
  var frmwano = document.getElementById("frmwano")
  var frmbirth = document.getElementById("frmbirth")
  var frmemail = document.getElementById("frmemail")
  var gender = document.getElementById("gender")
  var course = document.getElementById("course")
  


// ======================Insert Data Function===================
function InsertFormData() {
const reference =  ref(db, "Message")
const newRef = push(reference)



var Formobj = {

stdname : frmname.value,
stdfathername:frmfathername .value,
stdaddress : frmaddress .value,
stdmobno: frmmobno .value,
stdwano : frmwano .value,
stdbirth :  frmbirth .value,
stdemail :  frmemail .value,
stdgender :  gender.value,
stdcourse : course.value,
id:newRef.key
}
set(newRef,Formobj)



.then(()=>{
alert("Your Form Has Been Sent Successfully");

})
.catch((error)=>{
alert("Unsuccessful, error"+error)
});
}



//===============================button============================
sbmtbtn.addEventListener('click', InsertFormData)

// function courseform(){
//     var Form = {
//       frmname : document.getElementById("frmname").value,
//       frmfathername : document.getElementById("frmfathername").value,
//       frmaddress : document.getElementById("frmaddress").value,
//       frmmobno : document.getElementById("frmmobno").value,
//       frmwano : document.getElementById("frmwano").value,
//       frmbirth : document.getElementById("frmbirth").value,
//       frmemail : document.getElementById("frmemail").value,
  

//     }
//     console.log(Form)
//   }
//   sbmtbtn.addEventListener("click" , function(){
//     courseform();
//   })


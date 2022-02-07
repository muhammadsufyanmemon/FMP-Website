 
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

 //=======================================msg function==========================
        
 var msgname = document.getElementById("msgname")
 var  msgemail = document.getElementById("msgemail")
 var  msgsbject = document.getElementById("msgsbject")
 var  msgmsg = document.getElementById("msgmsg")
 
 // firebase.database().ref('message').set(message)



 

   
// ======================Insert Data Function===================

       function InsertData() {
         const reference =  ref(db, "Message")
         const newRef = push(reference)
       
         var obj = {
           namee : msgname.value,
           email : msgemail.value,
           subject : msgsbject.value,
           msg : msgmsg.value,
           id:newRef.key
         }
           set(newRef,obj)

           .then(()=>{
             alert("Message sent succesfully");

           })
           .catch((error)=>{
             alert("Unsuccessful, error"+error)
           });
       }


// function functionality(){
//        if (msgname.value == "" && msgemail == "" && msgsbject.value == "" && msgmsg.value == "") {
//         nameerror.innerHTML = "Enter your name"
//         emailerror.innerHTML = "Enter your email"
//         sbjecterror.innerHTML = "Enter Subject"
//         msgerror.innerHTML = "Enter Your Message"
//     } else if (msgname.value== '') {
//         nameerror.innerHTML = "Enter your name"
//     } else if (msgemail.value == '') {
//         emailerror.innerHTML = "Enter your email"
//     } else if (msgsbject.value == '') {
//       sbjecterror.innerHTML = "Enter Subject"
//   } else if (msgmsg.value == '') {
//     msgerror.innerHTML = "Enter your Message"
// }
//     if (msgname.value != "") {
//         nameerror.innerHTML = ""
//     }
//     if (msgemail.value != "") {
//         emailerror.innerHTML = ""
//     }
//     if (msgsbject.value != "") {
//       sbjecterror.innerHTML = ""
//   }
//   if (msgmsg.value != "") {
//     msgerror.innerHTML = ""
// }
//   }     
//==================selct data function=====================

// function SelectData(){
//   const dbref = ref(db);

//   get(child(dbref,"Message/")).then((snapshot)=>{
//     if(snapshot.exists()){
//       msgname.value = snapshot.val().name;
//       msgemail.value = snapshot.val().email;
//       msgsbject.value = snapshot.val().subject;
//       msgmsg.value = snapshot.val().msg;
//     }
//     else{
//       console.log("NO Data Found");
//     }
//   })
//   .catch((error)=>{
//     console.log("unsuccessful , error"+error);
//   })
// }


//==================================

       
//=========================================button =========================
sndmsgbtn.addEventListener('click', InsertData )

// function checkvalue(){
  
//     var a = document.getElementById("msgname");
//     var b = document.getElementById("msgemail");
//     var c = document.getElementById("msgsbject");
//     var d = document.getElementById("msgmsg")
//     if (a.value == "" || a.value == " "){
//         alert("Enter Full Name");
//         return;
//     }
//     if (b.value == ""){
//         alert("Enter Email")
//         return;
//     }
//     if(c.value == ""){
//         alert("Enter Subject")
//         return;
//     }
//     if(d.value==""){
//         alert("Enter Message")
//         return;
//     }
// }
// sndmsgbtn.addEventListener("click" , function(){
//     checkvalue();
// })


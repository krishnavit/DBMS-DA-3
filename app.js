var firebaseConfig = {
  apiKey: "AIzaSyA0Uy5BiJyDjXv8_M_wwsjbSJFscM3LWgE",
  authDomain: "dbms-swe1004.firebaseapp.com",
  databaseURL: "https://dbms-swe1004-default-rtdb.firebaseio.com",
  projectId: "dbms-swe1004",
  storageBucket: "dbms-swe1004.appspot.com",
  messagingSenderId: "495651807115",
  appId: "1:495651807115:web:855399b8152f0233f7198e",
  measurementId: "G-FYKWNKRYVS"
  };
  firebase.initializeApp(firebaseConfig);
  let contactInfo = firebase.database().ref("User Information");
  document.querySelector(".contact-form").addEventListener("submit", submitForm);
  function submitForm(e) {
    e.preventDefault();
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    console.log(name, email, message);
  
    saveContactInfo(name, email, message);
  
    document.querySelector(".contact-form").reset();
  }
  function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      Name: name,
      Email: email,
      Message: message,
    });
  }
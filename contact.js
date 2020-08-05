// Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyBuGL2QzDvZqoRgKwJLpwmS2s5CdnQ6sd0",
      authDomain: "contactform-f979d.firebaseapp.com",
      databaseURL: "https://contactform-f979d.firebaseio.com",
      projectId: "contactform-f979d",
      storageBucket: "contactform-f979d.appspot.com",
      messagingSenderId: "548522574947",
      appId: "1:548522574947:web:f5db46da2c6c184d252456"
    };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var messagesRef = firebase.firestore();

// Listen for form submit
  document.getElementById('button').addEventListener('click', submitForm);

// Submit form
  function submitForm(e){
    e.preventDefault();

    //Get value
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

  //validate email
  var dotposition=email.lastIndexOf("."); 
  var atposition=email.indexOf("@");  

  if(name.trim() === "" || email.trim() ==="" || message.trim()==="" ) {
      alert("all field must be filled");
      return false;
  } else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
    alert("Please enter a valid e-mail address");
    return false;  
    } 
    else{

      return true;
    };



    // Save message
    saveMessage(name,  email, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 5 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },5000);

    // Clear form
    document.getElementById('form').reset();
      }
      // Function to get form value
      function getInputVal(id){
        return document.getElementById(id).value;
      }
      // Save message to firebase
      function saveMessage(name, email, message){
        var newMessageRef = messagesRef.collection("Contactform").add({
          name: name,
          email: email,
          message: message
        }).then(function(docRef) {
          console.log("information submited(name,email,message)"+ name +"," +email+ ","+ message);
      })
      .catch(function(error) {
          console.error("There is error in the document.", error);
      });
      }

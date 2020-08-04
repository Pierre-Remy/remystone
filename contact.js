document.getElementById('form').addEventListener('submit', validate);

function Validate(e) {
  e.preventDefault();

var name1 = document.getElementById("name1");
var email1 = document.getElementById("email1");
var message = document.getElementById("message");

//checking the name
if(name1.value.trim() === "") {
 alert ("Please, fill in your name");
     return false;
 
} 
//checking email
if (email1.value.trim() === "") {
 alert ("Please, fill in your email");
 return false;
}
 //checking message

if(message.value.trim() === "")
{
 alert ("Please, leave message");
     return false;
}
}
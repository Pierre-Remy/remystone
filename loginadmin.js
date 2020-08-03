function validateLogin () {

    var name, password, passwordresult;
    name=document.getElementById("name").value;
    password= document.getElementById("password").value;


if(name === "pierre" && password === "ama")
  {
    window.open('blogadmin.html');
  }
 else
 {
    document.getElementById("passwordresult").innerHTML = "The email or password is not wrong";
}
}
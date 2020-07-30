function signUpVal () {
    var y=document.form.name.value;
    var x=document.form.email.value;
    var z=document.form.password1.value;
    var password=document.form.password1.value;
    var z2=document.form.password2.value;
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf("."); 

    if(y.trim() === "") {
        alert("the name cannot be blank");
        return false;
    } 

    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
      alert("Please enter a valid e-mail address");
      return false;  
      } 
    if (password.length<6 || password.trim() === "") {
        alert ("Please, the password must be greater than 6 characters and must not be blank");
        return false;
    }
    
    if(z===z2){  
        return true;  
        }  
        else{  
        alert("password must be same!");  
        return false;  
        }  
}
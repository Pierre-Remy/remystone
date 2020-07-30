function signVal () {
    var x=document.form.name.value;
    var password=document.form.password.value;
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf("."); 

    if(x.trim() === "") {
        alert("the email cannot be blank");
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
    
}
const name1= document.getElementById("name1");
const email1= document.getElementById("email1");
const message= document.getElementById("message");
const form= document.getElementById ("form")
const error= document.getElementById ("error")
   
form.addEventListener ('submit', (e) => {

        let messages= [];
        //Checking for errors in name space//

        if (name1 === "" || x == null) {
            messages.push("Please, the name cannot be blank");
        }
          
          if(messages.length < 0 ) {
            errorElement.innertext= messages.join(",")
            e.preventDefault();
          } 
          if (name1 === "" || x == null) {
            messages.push("Please, the email cannot be blank");
        }
        
        if (message === "" || message==="Type your message here!") {
            messages.push("Please, Type something in message space!");
        }
        })



function subscribe () {
    var data, result;

    data = document.getElementById("email").value;
    var beforeposition=data.indexOf("@");  
    var afterposition=data.lastIndexOf(".");
    if (data.trim() =="") {
        document.getElementById("subscriberesult").innerHTML ="Please, leave your email";
    }
    else if (beforeposition<1 || afterposition<atposition+2 || afterposition+2>=data.length){  
        document.getElementById("subscriberesult").innerHTML ="Please, leave valid and active email";
}
}
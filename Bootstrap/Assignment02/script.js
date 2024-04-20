document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();

    checkdata();
});

var email = document.getElementById("form2Example1");

function checkdata(){
    var emailValue = email.value.trim();

    if (emailValue=="") {
        seterror(emailValue, "Please enter a valid email");
        // alert("Please enter a valid email");
    }else{
        setSuccess(emailValue);
    }
}

function seterror(E, msg) {
    console.log(E);
}
// var old = JSON.parse(localStorage.getItem('details')) || [];
// var newdata = 
// {
//  name:'sreekanth',
// }
//  old.push(newdata);
//  localStorage.setItem('details', JSON.stringify(old));

 var email = document.getElementById("caemail").value 
 var password = document.getElementById("capassword").value

 function CreateAccount(){
     
     matchPassword()
     
        var email = document.getElementById("caemail").value
        var password = document.getElementById("capassword").value
     
     localStorage.setItem("Email", email)
     localStorage.setItem("Password",password)

     document.getElementById("cabutton").value = "";

}


function matchPassword() {


    var pw1 = document.getElementById("capassword").value
    var pw2 = document.getElementById("caconpassword").value

    if (pw1 != pw2) {
        alert("Passwords did not match")
    }
    else {
        alert("Your Account Successfully Created")
    }
}
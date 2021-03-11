// var old = JSON.parse(localStorage.getItem('details')) || [];
// var newdata = 
// {
//  name:'sreekanth',
// }
//  old.push(newdata);
//  localStorage.setItem('details', JSON.stringify(old));

//  var firstname = document.getElementById("cafirstname").value
//  var surname = document.getElementById("casurname").value
//  var email = document.getElementById("caemail").value 
//  var password = document.getElementById("capassword").value
//  var conpassword = document.getElementById("caconpassword").value

 function CreateAccount(e){
     e.preventDefault()
     

     var firstname = document.getElementById("cafirstname").value
     var surname = document.getElementById("casurname").value
     var email = document.getElementById("caemail").value 
     var password = document.getElementById("capassword").value
     var conpassword = document.getElementById("caconpassword").value

     if (password != conpassword) {
         alert("Password did not match")
     }
     else if(email.length == 0 || firstname.length == 0 || surname.length == 0 || password.length == 0 || conpassword.length == 0) {
         alert("Please Enter your Input fields")
        
     }
     else {
        localStorage.setItem("FirstName", firstname)
        localStorage.setItem("Surname", surname)
        localStorage.setItem("Surname",surname)
        localStorage.setItem("Email", email)
         localStorage.setItem("Password", password)
         alert("Your Account Created Successful")
         window.location.href = "http://127.0.0.1:5500/signin.html"
     }


    //window.location.href = `./signin.html`
}
document.getElementById("cabutton").addEventListener("click",CreateAccount)

// function matchPassword() {


//     var pw1 = document.getElementById("capassword").value
//     var pw2 = document.getElementById("caconpassword").value

//     if (pw1 != pw2) {
//         alert("Passwords did not match")
//     }
//    else if(email.length == 0 || firstname.length == 0 || surname.length == 0 || password.length == 0 || conpassword.length == 0) {
//         alert("Please Enter your Input fields")
//     }
        
//     else {
//         alert("Account Created Successful")
//     }
     
    
// }
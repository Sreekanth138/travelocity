function Signin(){
    var storedemail = localStorage.getItem("Email")
    var storedpassword = localStorage.getItem("Password")


    console.log(storedpassword)
    var email = document.getElementById("signin-username-signin").value
    var password = document.getElementById("signin-password-signin").value

    if(email == storedemail && password == storedpassword){
        alert("Log in Successful")
    }
    else{
        alert("Error")
    }
}
  
document.getElementById("signin-button-signin").addEventListener("click",Signin)
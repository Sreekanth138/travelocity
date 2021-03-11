function Signin(e) {
    e.preventDefault()
    var storedemail = localStorage.getItem("Email")
    var storedpassword = localStorage.getItem("Password")
    var para = document.getElementById("invaliduser")

    var email = document.getElementById("signin-username-signin").value
    var password = document.getElementById("signin-password-signin").value


    if(email == storedemail && password == storedpassword){
        alert("Log in Successful")
        window.location.href = "http://127.0.0.1:5500/create_account.html";
    }
    else if(password.length == 0 || email.length == 0){
        alert("Please Enter Your Input Fields")
    }
    else if (password != storedpassword || email != storedemail) {
        e.preventDefault()
       // alert("Username or Password Incorrect")
        para.textContent = "Invalid User"
        para.style.color = "red"
        document.getElementById("forgot").append(para)
    }

}
  
document.getElementById("signin-button-signin").addEventListener("click",Signin)

  
//   To Get the Data of the PooransDiv6 it starts here
  var pbtn = document.getElementById("getlinkbtnmain")
  function getappbtnclick(){ 
      let num = document.getElementById("phonenumber").value
      alert(`A link has been sent to ${num}`)
      document.getElementById("phonenumber").value = ""
  }
  pbtn.addEventListener("click",getappbtnclick)
  async function getcountrycode(){
      var req1 = fetch("https://restcountries.eu/rest/v2/all")
      var req2 = await req1;
      var req3 = await req2.json();
      for(var i = 0; i<req3.length ; i++){
          let a = document.createElement("option")
          a.value = "+" + req3[i].callingCodes[0] + " " + req3[i].alpha3Code
          a.textContent = "+" + req3[i].callingCodes[0] + "[" + req3[i].alpha3Code + "]"
          document.getElementById("countrycode").append(a)
      }
  }
  
  getcountrycode();
  //   To Get the Data of the PooransDiv6 it ends here

function show(elementId) {
    document.getElementById("hotels_all").style.display = "none";
    document.getElementById("flights_all").style.display = "none";
    document.getElementById("cars_all").style.display = "none";
    document.getElementById("packages_all").style.display = "none";
    document.getElementById("things_to_do_all").style.display = "none";
    document.getElementById("cruises_all").style.display = "none";
    document.getElementById(elementId).style.display = "block";


}

function checkbox_CreateElement() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}









// function openSearch() {
//     document.getElementById("mySignin").classList.toggle("signinShow");
//     window.onclick = function (event) {
//         if (!event.target.matches('.signinBtn')) {
//             let Signins = document.getElementsByClassName("Signin-content");
//             let i;
//             for (i = 0; i < Signins.length; i++) {
//                 let openSignin = Signins[i];
//                 if (openSignin.classList.contains('signinShow')) {
//                     openSignin.classList.remove('signinShow');
//                 }
//             }
//         }
//     }
// }



  
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
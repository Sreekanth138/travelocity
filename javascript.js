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





var count = 1;
function plus() {
var countEl = document.getElementById("count")
  count++;
  countEl.value = count;
  
}

function minus() {
var countEl = document.getElementById("count")
  if (count > 1) {
      count--;
      countEl.value = count;
  }
}




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


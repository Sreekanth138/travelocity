    function moreTravel() {
        document.getElementById("myDropdown").classList.toggle("navShow");

        window.onclick = function (event) {
            if (!event.target.matches('.navDropbtn')) {
                let dropdowns = document.getElementsByClassName("navDropdown_cont");
                let i;
                for (i = 0; i < dropdowns.length; i++) {
                    let openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('navShow')) {
                        openDropdown.classList.remove('navShow');
                    }
                }
            }
        }
    }


    function myFunction() {
        document.getElementById("mySignin").classList.toggle("signinShow");
        window.onclick = function (event1) {
            if (!event1.target.matches('.signinBtn')) {
                let Signins = document.getElementsByClassName("Signin-content");
                let i;
                for (i = 0; i < Signins.length; i++) {
                    let openSignin = Signins[i];
                    if (openSignin.classList.contains('signinShow')) {
                        openSignin.classList.remove('signinShow');
                    }
                }
            }
        }
    }





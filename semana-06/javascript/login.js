window.onload = function () {
    
    function validateEmail () {

        var emailInput = document.getElementById("email-login");
        var regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

        if (regex.text(emailInput)) {
            alert('Good Email');
            return true;
        } else {
            alert('Bad Email');
            return false;
        }
    }

    function clickButton () {
        var logInButton = document.getElementsByTagName("button").addEventListener( "click", validateEmail); 
    }
}

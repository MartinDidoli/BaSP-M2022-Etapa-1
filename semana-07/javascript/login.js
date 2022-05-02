window.onload = function() {

    var emailVar = document.querySelector("input[type=email]");
    var passwordVar = document.querySelector("input[type=password]");
    var btn = document.querySelector("button");
    var textEmailLogin = document.getElementById("text-email-login");
    var textPasswordLogin = document.getElementById("text-password-login");
    var regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    function validateEmail() {
        if (regex.test(emailVar.value)){
            emailVar.style.borderColor = "rgb(55, 56, 103)";
            return true;
        } else {
            emailVar.style.borderColor = "rgb(255,0,0)";
            textEmailLogin.innerHTML = 'Enter a valid Email' ;
            return false;
        }
    }

    function deleteEmailText() {
        textEmailLogin.innerHTML = '' ;
    }

    function deletePasswordText() {
        textPasswordLogin.innerHTML = '' ;
    }

    function emptyness() {
        if (passwordVar.value == ''){
            passwordVar.style.borderColor = "rgb(255,0,0)";
            textPasswordLogin.innerHTML = 'Enter a valid Password';
            return true;
        } else {
            passwordVar.style.borderColor = "rgb(55, 56, 103)";
            return false;
        }
    }

    function buttonCheck() {

        var firstCompare = validateEmail();
        var secondCompare = emptyness();

        if ( firstCompare === true && secondCompare === false) {
            alert('Email: ' + emailVar.value + '\nPassword: ' + passwordVar.value  );
        } else if (firstCompare === false) {
            alert('Email invalid');
            if (secondCompare === true) {
                alert('Password invalid');
            }
        } else if (secondCompare === true) {
            alert('Password invalid')
        }
    }

    emailVar.addEventListener("blur", validateEmail);
    emailVar.addEventListener("focus", deleteEmailText);
    passwordVar.addEventListener("blur", emptyness);
    passwordVar.addEventListener("focus", deletePasswordText);
    btn.addEventListener("click", buttonCheck);
}
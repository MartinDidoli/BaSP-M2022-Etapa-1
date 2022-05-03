window.onload = function() {

    var emailVar = document.querySelector("input[type=email]");
    var passwordVar = document.querySelector("input[type=password]");
    var btn = document.querySelector("button");
    var textEmailLogin = document.getElementById("text-email-login");
    var textPasswordLogin = document.getElementById("text-password-login");
    var regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var loginServer = 'https://basp-m2022-api-rest-server.herokuapp.com/login';
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var letters = ["a","b","c","d","e","f","g","h","i","j","k",
    "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z"];

    function validateEmail() {
        if (regex.test(emailVar.value)){
            emailVar.classList.remove("input-red");
            return true;
        } else {
            emailVar.classList.add("input-red");
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

        var passwordCheck = passwordVar.value.split("");

        if (passwordCheck.some(passwordCheck => letters.includes(passwordCheck)) === true &&
            passwordCheck.some(passwordCheck => numbers.includes(passwordCheck)) === true) {
            passwordVar.classList.remove("input-red");
            return false;
        } else if (passwordCheck == '') {
            passwordVar.classList.add("input-red");
            textPasswordLogin.innerHTML = 'Enter a Password';
            return true;
        } else {
            passwordVar.classList.add("input-red");
            textPasswordLogin.innerHTML = 'Enter a Password with numbers and letters';
            return true;
        }
    }

    function buttonCheck() {

        var firstCompare = validateEmail();
        var secondCompare = emptyness();

        if (emailVar.value === 'rose@radiumrocket.com' && passwordVar.value === 'BaSP2022') {
            fetch(loginServer+'?email='+emailVar.value+'?password='+passwordVar.value);
            alert('Successful login');
        } else if (firstCompare === false && secondCompare === true) {
            alert('Email invalid \nPassword Invalid');
        } else if (secondCompare === true) {
            alert('Password invalid')
        } else if ( firstCompare === true && secondCompare === false) {
            fetch(loginServer+'?email='+emailVar.value+'?password='+passwordVar.value);
            alert('Email: ' + emailVar.value + '\nPassword: ' + passwordVar.value + '\nThe request was done successfully');
        } else {
            alert('Email invalid')
        }
    }

    emailVar.addEventListener("blur", validateEmail);
    emailVar.addEventListener("focus", deleteEmailText);
    passwordVar.addEventListener("blur", emptyness);
    passwordVar.addEventListener("focus", deletePasswordText);
    btn.addEventListener("click", buttonCheck);
}
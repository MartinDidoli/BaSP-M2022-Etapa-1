window.onload = function () {

    var inputArrayVar = document.getElementsByTagName("input");
    var btnCreate = document.querySelector("button");
    var regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var symbols = ["!","#","$","%","&","/","(",")","=","?","¡","¿","+","*","[","]","{","}","-",".", "@"];
    var letters = ["a","b","c","d","e","f","g","h","i","j","k",
    "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z"];

    function validateInput() {
        for (var i = 0; i <= 10; i++) {
            switch(i){
                case 0:
                    var firstNameId = document.getElementById("first-name-id");
                    temporalInput = inputArrayVar[i].value;
                    console.log(temporalInput);
                    str = temporalInput.split("");
                    console.log(str);
                    if (str.length > 3 && str.some(str => letters.includes(str)) === true && str.some(str =>
                        numbers.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                        console.log();
                    } else {
                        inputArrayVar[i].style.borderColor = "rgb(255,0,0)";
                        firstNameId.innerHTML = 'Enter a valid First Name';
                    }
                    break;
                case 1:
                    var fullAddressId = document.getElementById("full-address-id");
                    temporalInput = inputArrayVar[i].value;
                    console.log(temporalInput);
                    str = temporalInput.split("");
                    console.log(str);
                    if (str.length > 4 && str.some(str => letters.includes(str)) === true && str.some(str =>
                        numbers.includes(str)) === true && str.includes(' ') === true && str.some(str =>
                        symbols.includes(str)) === false) {
                        console.log();
                    } else {
                        inputArrayVar[i].style.borderColor = "rgb(255,0,0)";
                        fullAddressId.innerHTML = 'Enter a valid Address';
                    }
                    break;
                case 2:
                    var lastNameId = document.getElementById("last-name-id");
                    temporalInput = inputArrayVar[i].value;
                    console.log(temporalInput);
                    str = temporalInput.split("");
                    console.log(str);
                    if (str.length > 3 && str.some(str => letters.includes(str)) === true && str.some(str =>
                        numbers.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                        console.log();
                    } else {
                        inputArrayVar[i].style.borderColor = "rgb(255,0,0)";
                        lastNameId.innerHTML = 'Enter a valid Last Name';
                    }
                    break;
                case 3:
                    var cityId = document.getElementById("city-id");
                    temporalInput = inputArrayVar[i].value;
                    console.log(temporalInput);
                    str = temporalInput.split("");
                    console.log(str);
                    if (str.length > 3 && str.some(str => letters.includes(str)) === true && str.some(str =>
                        numbers.includes(str)) === true && str.some(str => symbols.includes(str)) === false) {
                        console.log();
                    } else {
                        inputArrayVar[i].style.borderColor = "rgb(255,0,0)";
                        cityId.innerHTML = 'Enter a valid city';
                    }
                    break;
                case 4:
                    var idId = document.getElementById("id-id");
                    temporalInput = inputArrayVar[i].value;
                    console.log(temporalInput);
                    str = temporalInput.split("");
                    console.log(str);
                    if (str.length > 6 && str.some(str => numbers.includes(str)) === true && str.some(str =>
                        letters.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                        console.log();
                    } else {
                        inputArrayVar[i].style.borderColor = "rgb(255,0,0)";
                        idId.innerHTML = 'Enter a valid ID';
                    }
                    break;
                case 5:
                    var postalCodeId = document.getElementById("postal-code-id");
                    temporalInput = inputArrayVar[i].value;
                    console.log(temporalInput);
                    str = temporalInput.split("");
                    console.log(str);
                    if (str.length > 3 && str.length < 6 && str.some(str => numbers.includes(str)) === true &&
                        str.some(str => letters.includes(str)) === false && str.some(str => symbols.includes(str))
                        === false) {
                        console.log();
                    } else {
                        inputArrayVar[i].style.borderColor = "rgb(255,0,0)";
                        postalCodeId.innerHTML = 'Enter a valid Postal Code';
                    }
                    break;
                case 6:
                    temporalInput = inputArrayVar[i].value;
                    if (temporalInput.length > 7) {
                        console.log();
                    } else {
                        
                    }
                    break;
                case 7:
                    var emailId = document.getElementById("email-id");
                    temporalInput = inputArrayVar[i].value;
                    if (regex.test(temporalInput)) {
                        console.log();
                    } else {
                        inputArrayVar[i].style.borderColor = "rgb(255,0,0)";
                        emailId.innerHTML = 'Enter a valid Email';
                    }
                    break;
                case 8:
                    var phoneNumberId = document.getElementById("phone-number-id");
                    temporalInput = inputArrayVar[i].value;
                    console.log(temporalInput);
                    str = temporalInput.split("");
                    console.log(str);
                    if (str.length === 10 && str.some(str => numbers.includes(str)) === true && str.some(str =>
                        letters.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                        console.log();
                    } else {
                        inputArrayVar[i].style.borderColor = "rgb(255,0,0)";
                        phoneNumberId.innerHTML = 'Enter a valid Phone Number';
                    }
                    break;
                case 9:
                    var password1Id = document.getElementById("password-1-id");
                    temporalInput = inputArrayVar[i].value;
                    console.log(temporalInput);
                    str = temporalInput.split("");
                    console.log(str);
                    if (str.length > 7 && str.some(str => letters.includes(str)) === true  && str.some(str =>
                        numbers.includes(str)) === true && str.some(str => symbols.includes(str)) === false) {
                        console.log();
                    } else {
                        inputArrayVar[i].style.borderColor = "rgb(255,0,0)";
                        password1Id.innerHTML = 'Enter a valid Password';
                    }
                    break;
                case 10:
                    var password2Id = document.getElementById("password-2-id");
                    temporalInput = inputArrayVar[i].value;
                    str = inputArrayVar[9].value;
                    if (str === temporalInput && temporalInput.length > 7) {
                        console.log();
                    } else {
                        inputArrayVar[i].style.borderColor = "rgb(255,0,0)";
                        password2Id.innerHTML = 'Enter a valid Password';
                    }
                    break;
                default:
                    console.log();
                }
        }
    }

    function deleteText() {
        for (var i = 0; i <= 10; i++) {
            switch(i){
                case 0:
                    var firstNameId = document.getElementById("first-name-id");
                    temporalInput = inputArrayVar[i].value;
                    console.log(temporalInput);
                    str = temporalInput.split("");
                    console.log(str);
                    if (str.length > 3 && str.some(str => letters.includes(str)) === true && str.some(str =>
                        numbers.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                        console.log();
                    } else {
                        inputArrayVar[i].style.borderColor = "rgb(55, 56, 103)";
                        firstNameId.innerHTML = '';
                    }
                    break;
                case 1:
                    var fullAddressId = document.getElementById("full-address-id");
                    temporalInput = inputArrayVar[i].value;
                    console.log(temporalInput);
                    str = temporalInput.split("");
                    console.log(str);
                    if (str.length > 4 && str.some(str => letters.includes(str)) === true && str.some(str =>
                        numbers.includes(str)) === true && str.includes(' ') === true && str.some(str =>
                        symbols.includes(str)) === false) {
                        console.log();
                    } else {
                        inputArrayVar[i].style.borderColor = "rgb(55, 56, 103)";
                        fullAddressId.innerHTML = '';
                    }
                    break;
                case 2:
                    var lastNameId = document.getElementById("last-name-id");
                    temporalInput = inputArrayVar[i].value;
                    console.log(temporalInput);
                    str = temporalInput.split("");
                    console.log(str);
                    if (str.length > 3 && str.some(str => letters.includes(str)) === true && str.some(str =>
                        numbers.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                        console.log();
                    } else {
                        inputArrayVar[i].style.borderColor = "rgb(55, 56, 103)";
                        lastNameId.innerHTML = '';
                    }
                    break;
                case 3:
                    var cityId = document.getElementById("city-id");
                    temporalInput = inputArrayVar[i].value;
                    console.log(temporalInput);
                    str = temporalInput.split("");
                    console.log(str);
                    if (str.length > 3 && str.some(str => letters.includes(str)) === true && str.some(str =>
                        numbers.includes(str)) === true && str.some(str => symbols.includes(str)) === false) {
                        console.log();
                    } else {
                        inputArrayVar[i].style.borderColor = "rgb(55, 56, 103)";
                        cityId.innerHTML = '';
                    }
                    break;
                case 4:
                    var idId = document.getElementById("id-id");
                    temporalInput = inputArrayVar[i].value;
                    console.log(temporalInput);
                    str = temporalInput.split("");
                    console.log(str);
                    if (str.length > 6 && str.some(str => numbers.includes(str)) === true && str.some(str =>
                        letters.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                        console.log();
                    } else {
                        inputArrayVar[i].style.borderColor = "rgb(55, 56, 103)";
                        idId.innerHTML = '';
                    }
                    break;
                case 5:
                    var postalCodeId = document.getElementById("postal-code-id");
                    temporalInput = inputArrayVar[i].value;
                    console.log(temporalInput);
                    str = temporalInput.split("");
                    console.log(str);
                    if (str.length > 3 && str.length < 6 && str.some(str => numbers.includes(str)) === true &&
                        str.some(str => letters.includes(str)) === false && str.some(str => symbols.includes(str))
                        === false) {
                        console.log();
                    } else {
                        inputArrayVar[i].style.borderColor = "rgb(55, 56, 103)";
                        postalCodeId.innerHTML = '';
                    }
                    break;
                case 6:
                    temporalInput = inputArrayVar[i].value;
                    if (temporalInput.length > 7) {
                        console.log();
                    } else {
                        
                    }
                    break;
                case 7:
                    var emailId = document.getElementById("email-id");
                    temporalInput = inputArrayVar[i].value;
                    if (regex.test(temporalInput)) {
                        console.log();
                    } else {
                        inputArrayVar[i].style.borderColor = "rgb(55, 56, 103)";
                        emailId.innerHTML = '';
                    }
                    break;
                case 8:
                    var phoneNumberId = document.getElementById("phone-number-id");
                    temporalInput = inputArrayVar[i].value;
                    console.log(temporalInput);
                    str = temporalInput.split("");
                    console.log(str);
                    if (str.length === 10 && str.some(str => numbers.includes(str)) === true && str.some(str =>
                        letters.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                        console.log();
                    } else {
                        inputArrayVar[i].style.borderColor = "rgb(55, 56, 103)";
                        phoneNumberId.innerHTML = '';
                    }
                    break;
                case 9:
                    var password1Id = document.getElementById("password-1-id");
                    temporalInput = inputArrayVar[i].value;
                    console.log(temporalInput);
                    str = temporalInput.split("");
                    console.log(str);
                    if (str.length > 7 && str.some(str => letters.includes(str)) === true  && str.some(str =>
                        numbers.includes(str)) === true && str.some(str => symbols.includes(str)) === false) {
                        console.log();
                    } else {
                        inputArrayVar[i].style.borderColor = "rgb(55, 56, 103)";
                        password1Id.innerHTML = '';
                    }
                    break;
                case 10:
                    var password2Id = document.getElementById("password-2-id");
                    temporalInput = inputArrayVar[i].value;
                    str = inputArrayVar[9].value;
                    if (str === temporalInput && temporalInput.length > 7) {
                        console.log();
                    } else {
                        inputArrayVar[i].style.borderColor = "rgb(55, 56, 103)";
                        password2Id.innerHTML = '';
                    }
                    break;
                default:
                    console.log();
                }
        }
    }

    function buttonClicked() {
        
        var temporalInput,str;

        for (var i = 0; i <= 10; i++){
            switch(i){
                case 0:
                    temporalInput = inputArrayVar[i].value;
                    console.log(temporalInput);
                    str = temporalInput.split("");
                    console.log(str);
                    if (str.length > 3 && str.some(str => letters.includes(str)) === true && str.some(str =>
                        numbers.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                        alert('First Name: ' + temporalInput);
                    } else {
                        alert('First Name Invalid');
                    }
                    break;
                case 1:
                    temporalInput = inputArrayVar[i].value;
                    console.log(temporalInput);
                    str = temporalInput.split("");
                    console.log(str);
                    if (str.length > 4 && str.some(str => letters.includes(str)) === true && str.some(str =>
                        numbers.includes(str)) === true && str.includes(' ') === true && str.some(str =>
                        symbols.includes(str)) === false) {
                        alert('Address: ' + temporalInput);
                    } else {
                        alert('Address Invalid');
                    }
                    break;
                case 2:
                    temporalInput = inputArrayVar[i].value;
                    console.log(temporalInput);
                    str = temporalInput.split("");
                    console.log(str);
                    if (str.length > 3 && str.some(str => letters.includes(str)) === true && str.some(str =>
                        numbers.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                        alert('Last Name: ' + temporalInput);
                    } else {
                        alert('Last Name Invalid');
                    }
                    break;
                case 3:
                    temporalInput = inputArrayVar[i].value;
                    console.log(temporalInput);
                    str = temporalInput.split("");
                    console.log(str);
                    if (str.length > 3 && str.some(str => letters.includes(str)) === true && str.some(str =>
                        numbers.includes(str)) === true && str.some(str => symbols.includes(str)) === false) {
                        alert('City: ' + temporalInput);
                    } else {
                        alert('City Invalid');
                    }
                    break;
                case 4:
                    temporalInput = inputArrayVar[i].value;
                    console.log(temporalInput);
                    str = temporalInput.split("");
                    console.log(str);
                    if (str.length > 6 && str.some(str => numbers.includes(str)) === true && str.some(str =>
                        letters.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                        alert('ID Number: ' + temporalInput);
                    } else {
                        alert('ID Number Invalid');
                    }
                    break;
                case 5:
                    temporalInput = inputArrayVar[i].value;
                    console.log(temporalInput);
                    str = temporalInput.split("");
                    console.log(str);
                    if (str.length > 3 && str.length < 6 && str.some(str => numbers.includes(str)) === true &&
                        str.some(str => letters.includes(str)) === false && str.some(str => symbols.includes(str))
                        === false) {
                        alert('Postal Code: ' + temporalInput);
                    } else {
                        alert('Postal Code Invalid');
                    }
                    break;
                case 6:
                    temporalInput = inputArrayVar[i].value;
                    if (temporalInput.length > 7) {
                        alert('Birth Date: ' + temporalInput);
                    } else {
                        alert('Birth date Invalid');
                    }
                    break;
                case 7:
                    temporalInput = inputArrayVar[i].value;
                    if (regex.test(temporalInput)) {
                        alert('Email: ' + temporalInput);
                    } else {
                        alert('Email invalid');
                    }
                    break;
                case 8:
                    temporalInput = inputArrayVar[i].value;
                    console.log(temporalInput);
                    str = temporalInput.split("");
                    console.log(str);
                    if (str.length === 10 && str.some(str => numbers.includes(str)) === true && str.some(str =>
                        letters.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                        alert('Phone Number: ' + temporalInput);
                    } else {
                        alert('Phone Number Invalid');
                    }
                    break;
                case 9:
                    temporalInput = inputArrayVar[i].value;
                    console.log(temporalInput);
                    str = temporalInput.split("");
                    console.log(str);
                    if (str.length > 7 && str.some(str => letters.includes(str)) === true  && str.some(str =>
                        numbers.includes(str)) === true && str.some(str => symbols.includes(str)) === false) {
                        alert('Password: ' + temporalInput);
                    } else {
                        alert('Password Invalid');
                    }
                    break;
                case 10:
                    temporalInput = inputArrayVar[i].value;
                    str = inputArrayVar[9].value;
                    if (str === temporalInput && temporalInput.length > 7) {
                        alert('Both are the same');
                    } else {
                        alert('Not the same as the first');
                    }
                    break;
                default:
                    console.log();
            }
        }
        
    }

    for (var i = 0; i <= 10; i++){
        inputArrayVar[i].addEventListener("blur", validateInput);
        inputArrayVar[i].addEventListener("focus", deleteText);
    }
    btnCreate.addEventListener("click", buttonClicked);

}

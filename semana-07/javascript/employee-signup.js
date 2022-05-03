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

    function validateInput(numberToValid) {
        console.log(numberToValid);
        switch(numberToValid){
            case 0:
                var firstNameId = document.getElementById("first-name-id");
                temporalInput = inputArrayVar[numberToValid].value;
                str = temporalInput.split("");
                if (str.length > 3 && str.some(str => letters.includes(str)) === true && str.some(str =>
                    numbers.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                } else {
                    inputArrayVar[numberToValid].classList.add("input-red");
                    firstNameId.innerHTML = 'It needs at least 3 letters';
                }
                break;
            case 1:
                var fullAddressId = document.getElementById("full-address-id");
                temporalInput = inputArrayVar[i].value;
                str = temporalInput.split("");
                if (str.length > 4 && str.some(str => letters.includes(str)) === true && str.some(str =>
                    numbers.includes(str)) === true && str.includes(' ') === true && str.some(str =>
                    symbols.includes(str)) === false) {
                } else {
                    inputArrayVar[i].classList.add("input-red");
                    fullAddressId.innerHTML = 'It needs 5 nrs/ltrs +space';
                }
                break;
            case 2:
                var lastNameId = document.getElementById("last-name-id");
                temporalInput = inputArrayVar[i].value;
                str = temporalInput.split("");
                if (str.length > 3 && str.some(str => letters.includes(str)) === true && str.some(str =>
                    numbers.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                } else {
                    inputArrayVar[i].classList.add("input-red");
                    lastNameId.innerHTML = 'It needs at least 3 letters';
                }
                break;
            case 3:
                var cityId = document.getElementById("city-id");
                temporalInput = inputArrayVar[i].value;
                str = temporalInput.split("");
                if (str.length > 3 && str.some(str => letters.includes(str)) === true && str.some(str =>
                    numbers.includes(str)) === true && str.some(str => symbols.includes(str)) === false) {
                } else {
                    inputArrayVar[i].classList.add("input-red");
                    cityId.innerHTML = 'It needs 3 characters';
                }
                break;
            case 4:
                var idId = document.getElementById("id-id");
                temporalInput = inputArrayVar[i].value;
                str = temporalInput.split("");
                if (str.length > 6 && str.some(str => numbers.includes(str)) === true && str.some(str =>
                    letters.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                } else {
                    inputArrayVar[i].classList.add("input-red");
                    idId.innerHTML = 'It needs +7 numbers';
                }
                break;
            case 5:
                var postalCodeId = document.getElementById("postal-code-id");
                temporalInput = inputArrayVar[i].value;
                str = temporalInput.split("");
                if (str.length > 3 && str.length < 6 && str.some(str => numbers.includes(str)) === true &&
                    str.some(str => letters.includes(str)) === false && str.some(str => symbols.includes(str))
                    === false) {
                } else {
                    inputArrayVar[i].classList.add("input-red");
                    postalCodeId.innerHTML = 'Between 4 and 5 numbers';
                }
                break;
            case 6:
                temporalInput = inputArrayVar[i].value;
                if (temporalInput.length > 7) {
                } else {
                }
                break;
            case 7:
                var emailId = document.getElementById("email-id");
                temporalInput = inputArrayVar[i].value;
                if (regex.test(temporalInput)) {
                } else {
                    inputArrayVar[i].classList.add("input-red");
                    emailId.innerHTML = 'Enter a valid Email';
                }
                break;
            case 8:
                var phoneNumberId = document.getElementById("phone-number-id");
                temporalInput = inputArrayVar[i].value;
                str = temporalInput.split("");
                if (str.length === 10 && str.some(str => numbers.includes(str)) === true && str.some(str =>
                    letters.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                } else {
                    inputArrayVar[i].classList.add("input-red");
                    phoneNumberId.innerHTML = 'It needs +10 numbers';
                }
                break;
            case 9:
                var password1Id = document.getElementById("password-1-id");
                temporalInput = inputArrayVar[i].value;
                str = temporalInput.split("");
                if (str.length > 7 && str.some(str => letters.includes(str)) === true  && str.some(str =>
                    numbers.includes(str)) === true && str.some(str => symbols.includes(str)) === false) {
                } else {
                    inputArrayVar[i].classList.add("input-red");
                    password1Id.innerHTML = 'It needs +8 characters';
                }
                break;
            case 10:
                var password2Id = document.getElementById("password-2-id");
                temporalInput = inputArrayVar[i].value;
                str = inputArrayVar[9].value;
                if (str === temporalInput && temporalInput.length > 7) {
                } else {
                    inputArrayVar[i].classList.add("input-red");
                    password2Id.innerHTML = 'Not the same as the first one';
                }
                break;
            default:
            }
    }

    function deleteText() {
        for (var i = 0; i <= 10; i++) {
            switch(i){
                case 0:
                    var firstNameId = document.getElementById("first-name-id");
                    temporalInput = inputArrayVar[i].value;
                    str = temporalInput.split("");
                    if (str.length > 3 && str.some(str => letters.includes(str)) === true && str.some(str =>
                        numbers.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                    } else {
                        inputArrayVar[i].classList.remove("input-red");
                        firstNameId.innerHTML = '';
                    }
                    break;
                case 1:
                    var fullAddressId = document.getElementById("full-address-id");
                    temporalInput = inputArrayVar[i].value;
                    str = temporalInput.split("");
                    if (str.length > 4 && str.some(str => letters.includes(str)) === true && str.some(str =>
                        numbers.includes(str)) === true && str.includes(' ') === true && str.some(str =>
                        symbols.includes(str)) === false) {
                    } else {
                        inputArrayVar[i].classList.remove("input-red");
                        fullAddressId.innerHTML = '';
                    }
                    break;
                case 2:
                    var lastNameId = document.getElementById("last-name-id");
                    temporalInput = inputArrayVar[i].value;
                    str = temporalInput.split("");
                    if (str.length > 3 && str.some(str => letters.includes(str)) === true && str.some(str =>
                        numbers.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                    } else {
                        inputArrayVar[i].classList.remove("input-red");
                        lastNameId.innerHTML = '';
                    }
                    break;
                case 3:
                    var cityId = document.getElementById("city-id");
                    temporalInput = inputArrayVar[i].value;
                    str = temporalInput.split("");
                    if (str.length > 3 && str.some(str => letters.includes(str)) === true && str.some(str =>
                        numbers.includes(str)) === true && str.some(str => symbols.includes(str)) === false) {
                    } else {
                        inputArrayVar[i].classList.remove("input-red");
                        cityId.innerHTML = '';
                    }
                    break;
                case 4:
                    var idId = document.getElementById("id-id");
                    temporalInput = inputArrayVar[i].value;
                    str = temporalInput.split("");
                    if (str.length > 6 && str.some(str => numbers.includes(str)) === true && str.some(str =>
                        letters.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                    } else {
                        inputArrayVar[i].classList.remove("input-red");
                        idId.innerHTML = '';
                    }
                    break;
                case 5:
                    var postalCodeId = document.getElementById("postal-code-id");
                    temporalInput = inputArrayVar[i].value;
                    str = temporalInput.split("");
                    if (str.length > 3 && str.length < 6 && str.some(str => numbers.includes(str)) === true &&
                        str.some(str => letters.includes(str)) === false && str.some(str => symbols.includes(str))
                        === false) {
                    } else {
                        inputArrayVar[i].classList.remove("input-red");
                        postalCodeId.innerHTML = '';
                    }
                    break;
                case 6:
                    temporalInput = inputArrayVar[i].value;
                    if (temporalInput.length > 7) {
                    } else {
                        
                    }
                    break;
                case 7:
                    var emailId = document.getElementById("email-id");
                    temporalInput = inputArrayVar[i].value;
                    if (regex.test(temporalInput)) {
                    } else {
                        inputArrayVar[i].classList.remove("input-red");
                        emailId.innerHTML = '';
                    }
                    break;
                case 8:
                    var phoneNumberId = document.getElementById("phone-number-id");
                    temporalInput = inputArrayVar[i].value;
                    str = temporalInput.split("");
                    if (str.length === 10 && str.some(str => numbers.includes(str)) === true && str.some(str =>
                        letters.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                    } else {
                        inputArrayVar[i].classList.remove("input-red");
                        phoneNumberId.innerHTML = '';
                    }
                    break;
                case 9:
                    var password1Id = document.getElementById("password-1-id");
                    temporalInput = inputArrayVar[i].value;
                    str = temporalInput.split("");
                    if (str.length > 7 && str.some(str => letters.includes(str)) === true  && str.some(str =>
                        numbers.includes(str)) === true && str.some(str => symbols.includes(str)) === false) {
                    } else {
                        inputArrayVar[i].classList.remove("input-red");
                        password1Id.innerHTML = '';
                    }
                    break;
                case 10:
                    var password2Id = document.getElementById("password-2-id");
                    temporalInput = inputArrayVar[i].value;
                    str = inputArrayVar[9].value;
                    if (str === temporalInput && temporalInput.length > 7) {
                    } else {
                        inputArrayVar[i].classList.remove("input-red");
                        password2Id.innerHTML = '';
                    }
                    break;
                default:
                }
        }
    }

    function buttonClicked() {
        
        var temporalInput,str;

        for (var i = 0; i <= 10; i++){
            switch(i){
                case 0:
                    temporalInput = inputArrayVar[i].value;
                    str = temporalInput.split("");
                    if (str.length > 3 && str.some(str => letters.includes(str)) === true && str.some(str =>
                        numbers.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                        alert('First Name: ' + temporalInput);
                    } else {
                        alert('First Name Invalid');
                    }
                    break;
                case 1:
                    temporalInput = inputArrayVar[i].value;
                    str = temporalInput.split("");
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
                    str = temporalInput.split("");
                    if (str.length > 3 && str.some(str => letters.includes(str)) === true && str.some(str =>
                        numbers.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                        alert('Last Name: ' + temporalInput);
                    } else {
                        alert('Last Name Invalid');
                    }
                    break;
                case 3:
                    temporalInput = inputArrayVar[i].value;
                    str = temporalInput.split("");
                    if (str.length > 3 && str.some(str => letters.includes(str)) === true && str.some(str =>
                        numbers.includes(str)) === true && str.some(str => symbols.includes(str)) === false) {
                        alert('City: ' + temporalInput);
                    } else {
                        alert('City Invalid');
                    }
                    break;
                case 4:
                    temporalInput = inputArrayVar[i].value;
                    str = temporalInput.split("");
                    if (str.length > 6 && str.some(str => numbers.includes(str)) === true && str.some(str =>
                        letters.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                        alert('ID Number: ' + temporalInput);
                    } else {
                        alert('ID Number Invalid');
                    }
                    break;
                case 5:
                    temporalInput = inputArrayVar[i].value;
                    str = temporalInput.split("");
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
                    str = temporalInput.split("");
                    if (str.length === 10 && str.some(str => numbers.includes(str)) === true && str.some(str =>
                        letters.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                        alert('Phone Number: ' + temporalInput);
                    } else {
                        alert('Phone Number Invalid');
                    }
                    break;
                case 9:
                    temporalInput = inputArrayVar[i].value;
                    str = temporalInput.split("");
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
            }
        }
        
    }

    inputArrayVar[i].addEventListener("blur", validateInput(i));
    inputArrayVar[i].addEventListener("focus", deleteText(i));
    btnCreate.addEventListener("click", buttonClicked);

}

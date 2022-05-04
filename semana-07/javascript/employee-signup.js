window.onload = function () {

    /*var inputArrayVar = document.getElementsByTagName("input");*/
    var firstNameId = document.getElementById("only-name");
    var fullAddressId = document.getElementById("full-address");
    var lastNameId = document.getElementById("only-last-name");
    var cityId = document.getElementById("city-live");
    var idId = document.getElementById("id-number");
    var postalCodeId = document.getElementById("postal-code");
    var birthDateId = document.getElementById("birth-date");
    var fullDate;
    var emailId = document.getElementById("email-login");
    var phoneNumberId = document.getElementById("phone-number");
    var password1Id = document.getElementById("password-login");
    var password2Id = document.getElementById("repeat-password");
    var btnCreate = document.querySelector("button");
    var regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var symbols = ["!","#","$","%","&","/","(",")","=","?","¡","¿","+","*","[","]","{","}","-",".", "@"];
    var letters = ["a","b","c","d","e","f","g","h","i","j","k",
    "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z"];

    function validateFirstName() {
        var nameFirstError = document.getElementById("first-name-id");
        temporalInput = firstNameId.value;
        str = temporalInput.split("");
        if (str.length > 3 && str.some(str => letters.includes(str)) === true && str.some(str =>
            numbers.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
        } else {
            firstNameId.classList.add("input-red");
            nameFirstError.innerHTML = 'It needs at least 4 letters';
        }
    }

    function validatefullAddressId() {
        var addressError = document.getElementById("full-address-id");
        temporalInput = fullAddressId.value;
        str = temporalInput.split("");
        if (str.length > 4 && str.some(str => letters.includes(str)) === true && str.some(str =>
            numbers.includes(str)) === true && str.includes(' ') === true && str.some(str =>
            symbols.includes(str)) === false) {
        } else {
            fullAddressId.classList.add("input-red");
            addressError.innerHTML = 'It needs 5 nrs/ltrs +space';
        }
    }

    function validatelastNameId() {
        var lastNameError = document.getElementById("last-name-id");
        temporalInput = lastNameId.value;
        str = temporalInput.split("");
        if (str.length > 3 && str.some(str => letters.includes(str)) === true && str.some(str =>
            numbers.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
        } else {
            lastNameId.classList.add("input-red");
            lastNameError.innerHTML = 'It needs at least 4 letters';
        }
    }

    function validatecityId() {
        var cityError = document.getElementById("city-id");
        temporalInput = cityId.value;
        str = temporalInput.split("");
        if (str.length > 3 && str.some(str => letters.includes(str)) === true && str.some(str =>
            numbers.includes(str)) === true && str.some(str => symbols.includes(str)) === false) {
        } else {
            cityId.classList.add("input-red");
            cityError.innerHTML = 'It needs 4 numbers&letters';
        }
    }

    function validateidId() {
        var idError = document.getElementById("id-id");
        temporalInput = idId.value;
        str = temporalInput.split("");
        if (str.length > 6 && str.some(str => numbers.includes(str)) === true && str.some(str =>
            letters.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
        } else {
            idId.classList.add("input-red");
            idError.innerHTML = 'It needs +7 numbers';
        }
    }

    function validatepostalCodeId() {
        var postalCodeError = document.getElementById("postal-code-id");
        temporalInput = postalCodeId.value;
        str = temporalInput.split("");
        if (str.length > 3 && str.length < 6 && str.some(str => numbers.includes(str)) === true &&
            str.some(str => letters.includes(str)) === false && str.some(str => symbols.includes(str))
            === false) {
        } else {
            postalCodeId.classList.add("input-red");
            postalCodeError.innerHTML = 'Between 4 and 5 numbers';
        }
    }

    function validatebirthDateId() {
        var birthDateError = document.getElementById("birth-date-id");
        temporalInput = birthDateId.value.split('-');
        year = temporalInput[0];
        month = temporalInput[1];
        day = temporalInput[2];
        fullDate = day + '/' + month + '/' + year;
        if (year > 1920 && year < 2002 && month > 0 && month < 13 && day > 0 && day < 32) {
        } else {
            birthDateId.classList.add("input-red");
            birthDateError.innerHTML = 'Enter a valid Date';
        }
    }

    function validateemailId() {
        var emailError = document.getElementById("email-id");
        temporalInput = emailId.value;
        if (regex.test(temporalInput)) {
        } else {
            emailId.classList.add("input-red");
            emailError.innerHTML = 'Enter a valid Email';
        }
    }

    function validatephoneNumberId() {
        var phoneNumberError = document.getElementById("phone-number-id");
        temporalInput = phoneNumberId.value;
        str = temporalInput.split("");
        if (str.length === 10 && str.some(str => numbers.includes(str)) === true && str.some(str =>
            letters.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
        } else {
            phoneNumberId.classList.add("input-red");
            phoneNumberError.innerHTML = 'It needs 10 numbers';
        }
    }

    function validatepassword1Id() {
        var password1Error = document.getElementById("password-1-id");
        temporalInput = password1Id.value;
        str = temporalInput.split("");
        if (str.length > 7 && str.some(str => letters.includes(str)) === true  && str.some(str =>
            numbers.includes(str)) === true && str.some(str => symbols.includes(str)) === false) {
        } else {
            password1Id.classList.add("input-red");
            password1Error.innerHTML = 'It needs +8 nrs/ltrs';
        }
    }

    function validatepassword2Id() {
        var password2Error = document.getElementById("password-2-id");
        temporalInput = password2Id.value;
        str = password1Id.value;
        if (str === temporalInput && temporalInput.length > 7) {
        } else {
            password2Id.classList.add("input-red");
            password2Error.innerHTML = 'Not the same as the first one';
        }
    }

    function deleteFirstName() {
        var nameFirstError = document.getElementById("first-name-id");
        temporalInput = firstNameId.value;
        str = temporalInput.split("");
        if (str.length > 3 && str.some(str => letters.includes(str)) === true && str.some(str =>
            numbers.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
        } else {
            firstNameId.classList.remove("input-red");
            nameFirstError.innerHTML = '';
        }
    }

    function deletefullAddressId() {
        var addressError = document.getElementById("full-address-id");
        temporalInput = fullAddressId.value;
        str = temporalInput.split("");
        if (str.length > 4 && str.some(str => letters.includes(str)) === true && str.some(str =>
            numbers.includes(str)) === true && str.includes(' ') === true && str.some(str =>
            symbols.includes(str)) === false) {
        } else {
            fullAddressId.classList.remove("input-red");
            addressError.innerHTML = '';
        }
    }

    function deletelastNameId() {
        var lastNameError = document.getElementById("last-name-id");
        temporalInput = lastNameId.value;
        str = temporalInput.split("");
        if (str.length > 3 && str.some(str => letters.includes(str)) === true && str.some(str =>
            numbers.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
        } else {
            lastNameId.classList.remove("input-red");
            lastNameError.innerHTML = '';
        }
    }

    function deletecityId() {
        var cityError = document.getElementById("city-id");
        temporalInput = cityId.value;
        str = temporalInput.split("");
        if (str.length > 3 && str.some(str => letters.includes(str)) === true && str.some(str =>
            numbers.includes(str)) === true && str.some(str => symbols.includes(str)) === false) {
        } else {
            cityId.classList.remove("input-red");
            cityError.innerHTML = '';
        }
    }

    function deleteidId() {
        var idError = document.getElementById("id-id");
        temporalInput = idId.value;
        str = temporalInput.split("");
        if (str.length > 6 && str.some(str => numbers.includes(str)) === true && str.some(str =>
            letters.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
        } else {
            idId.classList.remove("input-red");
            idError.innerHTML = '';
        }
    }

    function deletepostalCodeId() {
        var postalCodeError = document.getElementById("postal-code-id");
        temporalInput = postalCodeId.value;
        str = temporalInput.split("");
        if (str.length > 3 && str.length < 6 && str.some(str => numbers.includes(str)) === true &&
            str.some(str => letters.includes(str)) === false && str.some(str => symbols.includes(str))
            === false) {
        } else {
            postalCodeId.classList.remove("input-red");
            postalCodeError.innerHTML = '';
        }
    }

    function deletebirthDateId() {
        var birthDateError = document.getElementById("birth-date-id");
        temporalInput = birthDateId.value.split('-');
        year = temporalInput[0];
        month = temporalInput[1];
        day = temporalInput[2];
        fullDate = day + '/' + month + '/' + year;
        if (year > 1920 && year < 2002 && month > 0 && month < 13 && day > 0 && day < 32) {
        } else {
            birthDateId.classList.remove("input-red");
            birthDateError.innerHTML = '';
        }
    }

    function deleteemailId() {
        var emailError = document.getElementById("email-id");
        temporalInput = emailId.value;
        if (regex.test(temporalInput)) {
        } else {
            emailId.classList.remove("input-red");
            emailError.innerHTML = '';
        }
    }

    function deletephoneNumberId() {
        var phoneNumberError = document.getElementById("phone-number-id");
        temporalInput = phoneNumberId.value;
        str = temporalInput.split("");
        if (str.length === 10 && str.some(str => numbers.includes(str)) === true && str.some(str =>
            letters.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
        } else {
            phoneNumberId.classList.remove("input-red");
            phoneNumberError.innerHTML = '';
        }
    }

    function deletepassword1Id() {
        var password1Error = document.getElementById("password-1-id");
        temporalInput = password1Id.value;
        str = temporalInput.split("");
        if (str.length > 7 && str.some(str => letters.includes(str)) === true  && str.some(str =>
            numbers.includes(str)) === true && str.some(str => symbols.includes(str)) === false) {
        } else {
            password1Id.classList.remove("input-red");
            password1Error.innerHTML = '';
        }
    }

    function deletepassword2Id() {
        var password2Error = document.getElementById("password-2-id");
        temporalInput = password2Id.value;
        str = password1Id.value;
        if (str === temporalInput && temporalInput.length > 7) {
        } else {
            password2Id.classList.remove("input-red");
            password2Error.innerHTML = '';
        }
    }

    function buttonClicked() {
        var temporalInput,str;
        varBig = [];

        for (var i = 0; i <= 10; i++){
            switch(i){
                case 0:
                    temporalInput = firstNameId.value;
                    str = temporalInput.split("");
                    if (str.length > 3 && str.some(str => letters.includes(str)) === true && str.some(str =>
                        numbers.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                        varBig[i] = temporalInput;
                    } else {
                        varBig[11] = 'The first name '+ temporalInput + ' needs at least 4 letters';
                    }
                    break;
                case 1:
                    temporalInput = fullAddressId.value;
                    str = temporalInput.split("");
                    if (str.length > 4 && str.some(str => letters.includes(str)) === true && str.some(str =>
                        numbers.includes(str)) === true && str.includes(' ') === true && str.some(str =>
                        symbols.includes(str)) === false) {
                        varBig[i] = temporalInput;
                    } else {
                        varBig[11] += '\nThe address ' + temporalInput + ' needs at least 5 numbers&letters and a space';
                    }
                    break;
                case 2:
                    temporalInput = lastNameId.value;
                    str = temporalInput.split("");
                    if (str.length > 3 && str.some(str => letters.includes(str)) === true && str.some(str =>
                        numbers.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                        varBig[i] = temporalInput;
                    } else {
                        varBig[11] += '\nThe Last Name ' + temporalInput + ' needs at least 4 letters';
                    }
                    break;
                case 3:
                    temporalInput = cityId.value;
                    str = temporalInput.split("");
                    if (str.length > 3 && str.some(str => letters.includes(str)) === true && str.some(str =>
                        numbers.includes(str)) === true && str.some(str => symbols.includes(str)) === false) {
                        varBig[i] = temporalInput;
                    } else {
                        varBig[11] += '\nThe city '+ temporalInput +' needs at least 4 numbers&letters';
                    }
                    break;
                case 4:
                    temporalInput = idId.value;
                    str = temporalInput.split("");
                    if (str.length > 6 && str.some(str => numbers.includes(str)) === true && str.some(str =>
                        letters.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                        varBig[i] = temporalInput;
                    } else {
                        varBig[11] += '\nThe ID '+temporalInput+' needs at least 7 numbers';
                    }
                    break;
                case 5:
                    temporalInput = postalCodeId.value;
                    str = temporalInput.split("");
                    if (str.length > 3 && str.length < 6 && str.some(str => numbers.includes(str)) === true &&
                        str.some(str => letters.includes(str)) === false && str.some(str => symbols.includes(str))
                        === false) {
                        varBig[i] = temporalInput;
                    } else {
                        varBig[11] += '\nThe Postal Code '+temporalInput+' needs between 4 and 5 numbers';
                    }
                    break;
                case 6:
                    temporalInput = birthDateId.value.split('-');
                    year = temporalInput[0];
                    month = temporalInput[1];
                    day = temporalInput[2];
                    fullDate = day + '/' + month + '/' + year;
                    if (year > 1920 && year < 2002 && month > 0 && month < 13 && day > 0 && day < 32) {
                        varBig[i] = fullDate;
                    } else {
                        varBig[11] += '\nThe birth Date '+fullDate+' needs to be valid';
                    }
                    break;
                case 7:
                    temporalInput = emailId.value;
                    if (regex.test(temporalInput)) {
                        varBig[i] = temporalInput;
                    } else {
                        varBig[11] += '\nThe email'+temporalInput+' needs to be valid';
                    }
                    break;
                case 8:
                    temporalInput = phoneNumberId.value;
                    str = temporalInput.split("");
                    if (str.length === 10 && str.some(str => numbers.includes(str)) === true && str.some(str =>
                        letters.includes(str)) === false && str.some(str => symbols.includes(str)) === false) {
                        varBig[i] = temporalInput;
                    } else {
                        varBig[11] += '\nThe phone number '+temporalInput+' needs to have 10 numbers';
                    }
                    break;
                case 9:
                    temporalInput = password1Id.value;
                    str = temporalInput.split("");
                    if (str.length > 7 && str.some(str => letters.includes(str)) === true  && str.some(str =>
                        numbers.includes(str)) === true && str.some(str => symbols.includes(str)) === false) {
                        varBig[i] = temporalInput;
                    } else {
                        varBig[11] += '\nThe password '+temporalInput+' needs at least 8 numbers and letters';
                    }
                    break;
                case 10:
                    temporalInput = password2Id.value;
                    str = password1Id.value;
                    if (str === temporalInput && temporalInput.length > 7) {
                        varBig[i] = temporalInput;
                    } else {
                        varBig[11] += '\nThe password '+temporalInput+' is not the same as the first one';
                    }
                    break;
                default:
            }
        }
        if (varBig[11] != '') {
            alert(varBig[11]);
        }
    }


    firstNameId.addEventListener("blur", validateFirstName);
    firstNameId.addEventListener("focus", deleteFirstName);
    fullAddressId.addEventListener("blur", validatefullAddressId);
    fullAddressId.addEventListener("focus", deletefullAddressId);   
    lastNameId.addEventListener("blur", validatelastNameId);
    lastNameId.addEventListener("focus", deletelastNameId);
    cityId.addEventListener("blur", validatecityId);
    cityId.addEventListener("focus", deletecityId);
    idId.addEventListener("blur", validateidId);
    idId.addEventListener("focus", deleteidId);
    postalCodeId.addEventListener("blur", validatepostalCodeId);
    postalCodeId.addEventListener("focus", deletepostalCodeId);
    birthDateId.addEventListener("blur", validatebirthDateId);
    birthDateId.addEventListener("focus", deletebirthDateId);
    emailId.addEventListener("blur", validateemailId);
    emailId.addEventListener("focus", deleteemailId);
    phoneNumberId.addEventListener("blur", validatephoneNumberId);
    phoneNumberId.addEventListener("focus", deletephoneNumberId);
    password1Id.addEventListener("blur", validatepassword1Id);
    password1Id.addEventListener("focus", deletepassword1Id);
    password2Id.addEventListener("blur", validatepassword2Id);
    password2Id.addEventListener("focus", deletepassword2Id);
    btnCreate.addEventListener("click", buttonClicked);

/*
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
    inputArrayVar[i].addEventListener("focus", deleteText(i));*/

}

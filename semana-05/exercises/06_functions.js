//*Funciones

console.log('--EXERCISE: FUNCTIONS');

//*Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log('-Exercise 6.a:');

var resultado;

function suma(a, b){
    return (a+b);
}

resultado = suma(8,7);

console.log(resultado);

//*A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

console.log('-Exercise 6.b:');

function sumav2(a, b){
    if (typeof(a) != 'number' || typeof(b) != 'number'){
        console.log('Uno de los parámetros tiene error.');
        return (NaN);
    } else {
        return (a+b);
    }
}

resultado = sumav2(4,5);

console.log(resultado);

//*Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

console.log('-Exercise 6.c:');

function validateInteger(a){
    return Number.isInteger(a);
}

console.log(validateInteger(4));

//*A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

console.log('-Exercise 6.d:');

function sumav3(a, b){
    if (Number.isInteger(a) && Number.isInteger(b)){
        return (a+b);
    } else {
        console.log('Uno de los números tiene decimales.');
        return (Math.round(a+b));
    }
}

resultado = sumav3(9,2);

console.log(resultado);

//*Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

console.log('-Exercise 6.e:');

function validacion(a, b){
    return Number.isInteger(a) && Number.isInteger(b);
}

function sumav4(a, b){
    if (validacion(a,b) === true){
        return (a+b);
    } else {
        console.log('Uno de los números tiene decimales.');
        return (Math.round(a+b));
    }
}

resultado = sumav4(4, 1);

console.log(resultado);
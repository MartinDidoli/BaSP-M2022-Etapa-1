//*Arrays

console.log('--EXERCISE 3: ARRAYS');

//*Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

console.log('-Exercise 3.a:');

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"];

console.log(meses[4]);
console.log(meses[10]);

//*Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log('-Exercise 3.b:');

meses.sort();

console.log(meses);

//*Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log('-Exercise 3.c:');

meses.push('Conejo');
meses.unshift('Gato');

console.log(meses);

//*Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log('-Exercise 3.d:');

meses.shift();
meses.pop();

console.log(meses);

//*Invertir el orden del array (utilizar reverse).

console.log('-Exercise 3.e:');

console.log(meses.reverse());

//*Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log('-Exercise 3.f:');

console.log(meses.join('-'));

//*Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log('-Exercise 3.g:');

var meses1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"];

console.log(meses1.slice(4,11));
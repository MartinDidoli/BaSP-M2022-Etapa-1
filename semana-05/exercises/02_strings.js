/*
Strings
Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/

var a;

a = 'hola, soy Martín.';

console.log(a.toUpperCase());

var b, c;

b = '¿Cómo te llamás?';

c = b.substring(0,5);

console.log(c);

var d, e;

d = 'No tengo un perro';

e = d.substring(14,17);

console.log(e);

var f, g;

f = 'vamos a LA Playa.';

g = f.substring(0,1).toUpperCase() + f.substring(1,17).toLowerCase();

console.log(g);

var h, i;

h = 'No quiero ir a la playa.';

i = h.indexOf(' ');

console.log(i);

var j, k;

j = 'pterodáctilo anguRRIento';

k = j.substring(0,1).toUpperCase() + j.substring(1,j.indexOf('a')).toLowerCase() +
j.substring(j.indexOf('a'),j.indexOf('a')+1).toUpperCase() + j.substring(j.indexOf('a')+1,24).toLowerCase();

console.log(k);
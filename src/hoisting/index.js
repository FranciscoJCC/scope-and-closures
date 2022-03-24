//El hoisting eleva las declaraciones.
//Esto pasa en la compilación del código, antes de ser interpretado por el navegador.
 
a = 2;

var a;

console.log(a);



/**
 * EJEMPLO 2
 */
//En este caso aún no esta definida la variable.
//El hoisting se usa en las declaraciones y no en las inicializaciones.
console.log(b);
var b = 2;

//Ejemplo 3
//El hoisting eleva las funciones.
nameOfDog('Elmo');
function nameOfDog(name){
    console.log(name);
}


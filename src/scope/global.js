//Scope global
var hello = "Hello";
let world = "World"; //No se puede reasignar el valor
const helloWorld = "Hello World"; //No se puede reasignar el valor. 


//arrow function
const anotherFunction = () =>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

//Mala práctica, no se deben usar variables de funcines fuera del scope local de la función.
const helloWorldFunction = () => {
    globalVar = 'Im Global';
}

helloWorldFunction();
console.log(globalVar);











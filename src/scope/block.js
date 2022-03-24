const fruits = () => {
    if(true){
        var fruits1 = 'Apple'; //Scope de la funcion (local)
        let fruits2 = 'Banana'; //Scope de bloque
        const fruits3 = 'Kiwi'; //Scope de bloque
        console.log(fruits2);
        console.log(fruits3);
    }

    console.log(fruits1);
    /* console.log(fruits2);
    console.log(fruits3); */
}

fruits();

/**
 * EJEMPLO 2
 */
var x = 1; //Scope global
{
    /* let x = 2; */ //Scope local
    var x = 2; //Scope global
    console.log(x); //Scope local, de bloque
}
console.log(x);


/**
 * EJEMPLO 3
 */

const anotherFunction = () => {
    //Al usar la variable tipo var, es global. Deberiamos usar una variable tipo let para trabajar con el scope de bloque
    /* for(var i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i);
        }, 1000);
    } */

    for(let i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
    //la variable i solo funciona dentro del for.
    //console.log(i);
}

anotherFunction();

const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
};

helloWorld();
console.log(hello); //No se puede acceder por que no está definida en el scope global


//Ámbito lexico
//scope global
var scope = "i am global";

const functionScope = () =>{
    //Scope global
    var scope = 'i am just a local';
    const func = () =>{
        return scope;
    }
    console.log(func());
}

functionScope();
console.log(scope);
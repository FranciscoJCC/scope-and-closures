
const fruits = () => {
    var fruit = 'Apple';
    console.log(fruit);
}

fruits()
console.log(fruit); //No es posible acceder, ya que está en el scope local de la función


const anotherFunction = () =>{
    var x = 1;
    var x = 2;
    let y = 1;
    //let y = 2; //No se puede redeclarar

    console.log(x);
    console.log(y);

}

anotherFunction();

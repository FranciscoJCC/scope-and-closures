/**
 * No podemos modificar las variables dentro de la función directamente. Se tienen que usar las funciones dentro del return
 */

const person = () => {
    var saveName = 'Name';

    return{
        getName: () =>{
            return saveName;
        },
        setName: (name) =>{
            saveName = name;
        }
    };
};

newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Diego');
console.log(newPerson.getName());
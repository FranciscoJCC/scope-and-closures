//No genera un clousure, 
const moneyBox = (coins) =>{
    var saveCoins = 0;
    saveCoins += coins;
    console.log("MoneyBox:" + saveCoins);
}

//las cantidades no se suman
moneyBox(5);
moneyBox(10);

/**
 * CLOSURE
 */

const moneyBoxClosure = () =>{
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log("MoneyBox: $" + saveCoins)
    }
    return countCoins;
}

let myMoneyBox = moneyBoxClosure();

myMoneyBox(4); //4
myMoneyBox(6); //10
myMoneyBox(10); //20



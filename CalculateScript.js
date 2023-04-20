let numberInput = document.getElementById("input");
let storedNumber;
const resultOutput = document.getElementById("result")

const addButton = document.getElementById("addButton");

addButton.addEventListener("click", storeNumber);
equalButton.addEventListener("click", sumNumber);


function storeNumber(){
    storedNumber=Number(numberInput.value);
    numberInput.value=0; 
}

function sumNumber(){
    const numberInputValue = Number(numberInput.value);
    const sum = numberInputValue + storedNumber;
    resultOutput.textContent = `The sum of ${storedNumber} and ${numberInputValue} is ${sum}`;

}
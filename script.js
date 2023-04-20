//TAKE USER INPUT AND DISPLAY
const firstNumberInput = document.getElementById("firstNumber");
const secondNumberInput = document.getElementById("secondNumber");

firstNumberInput.addEventListener("input", () => {
    console.log("First number entered:", firstNumberInput.value);
});

secondNumberInput.addEventListener("input", () => {
    console.log("Second number entered:", secondNumberInput.value);
      });

//BUTTON TO SUM TWO INPUTS
const sumButton = document.getElementById("sumButton");
const resultOutput = document.getElementById("result")


sumButton.addEventListener("click", addNumbers)


function addNumbers(){
    const firstNumberValue = Number(firstNumberInput.value);
    const secondNumberValue = Number(secondNumberInput.value);
    const sum = firstNumberValue + secondNumberValue;
    resultOutput.textContent = `The sum of ${firstNumberValue} and ${secondNumberValue} is ${sum}`;

    
}
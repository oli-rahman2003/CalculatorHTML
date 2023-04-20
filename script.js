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

function addNumbers(){
    const firstNumberValue = Number(firstNumberInput.value);
    const secondNumberValue = Number(secondNumberInput.value);
    const sum = firstNumberValue + secondNumberValue;
    console.log ("the sum is ", sum)

    
}
sumButton.addEventListener("click", addNumbers)



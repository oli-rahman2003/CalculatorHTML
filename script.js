const firstNumberInput = document.getElementById("firstNumber");
const secondNumberInput = document.getElementById("secondNumber");

firstNumberInput.addEventListener("input", () => {
    console.log("First number entered:", firstNumberInput.value);
});

secondNumberInput.addEventListener("input", () => {
    console.log("Second number entered:", secondNumberInput.value);
      });
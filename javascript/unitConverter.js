//UNIT CONVERTER

//Global Variables
const fromUnit = document.getElementById("from");
const toUnit = document.getElementById("to");
const button = document.getElementById("convertBtn");
const input = document.getElementById("userInput");

//Converter Function
function convert() {
  //Get Values from inputs
  const inputValue = input.value;
  const fromUnitValue = fromUnit.value;
  const toUnitValue = toUnit.value;
  let outputText = document.getElementById("output");

  //Check if an inputValue is given.
  if (inputValue.length === 0) {
    outputText.textContent = "Please enter a value!";
  } else {
    //If/else block and formulas for conversion.
    // PRETTIER WILL LIKELY BREAK ALL FORMULAS INVOLVING FAHRENHEIT AS THE fromUnitValue OR toUnitValue! Use "prettier-ignore" for this block!
    // prettier-ignore
    if (fromUnitValue === "Celsius" && toUnitValue === "Kelvin") {
      outputValue = parseInt(inputValue) + 273.15;
      resultText = inputValue + " " + fromUnitValue + " = " + outputValue.toFixed(2) + " " + toUnitValue;
      outputText.textContent = resultText;
    } else if (fromUnitValue === "Kelvin" && toUnitValue === "Celsius") {
      outputValue = parseInt(inputValue) - 273.15;
      resultText = inputValue + " " + fromUnitValue + " = " + outputValue.toFixed(2) + " " + toUnitValue;
      outputText.textContent = resultText;
    } else if (fromUnitValue === "Celsius" && toUnitValue === "Fahrenheit") {
      outputValue = (parseInt(inputValue)*9/5) +32;
      resultText = inputValue + " " + fromUnitValue + " = " + outputValue.toFixed(2) + " " + toUnitValue;
      outputText.textContent = resultText;
    } else if (fromUnitValue === "Fahrenheit" && toUnitValue === "Celsius") {
      outputValue = (parseInt(inputValue)-32)*5/9;
      resultText = inputValue + " " + fromUnitValue + " = " + outputValue.toFixed(2) + " " + toUnitValue;
      outputText.textContent = resultText;
    } else if (fromUnitValue === "Fahrenheit" && toUnitValue === "Kelvin") {
      outputValue = (parseInt(inputValue)-32)*5/9+273.15;
      resultText = inputValue + " " + fromUnitValue + " = " + outputValue.toFixed(2) + " " + toUnitValue;
      outputText.textContent = resultText;
    } else if (fromUnitValue === "Kelvin" && toUnitValue === "Fahrenheit") {
      outputValue = (parseInt(inputValue)-273.15)*9/5+32;
      resultText = inputValue + " " + fromUnitValue + " = " + outputValue.toFixed(2) + " " + toUnitValue;
      outputText.textContent = resultText;
    } else {
      outputText.textContent = "I have no idea what you just did, but it's not gonna work!"
    }
  }
}

// Function to disable conversion button if the toUnit and fromUnit values are equal.
function sameUnits() {
  if (fromUnit.value === toUnit.value) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}

//EventListener
button.addEventListener("click", convert);
fromUnit.addEventListener("change", sameUnits);
toUnit.addEventListener("change", sameUnits);

// Event listener listening for the Enter button being clicked, targeting the entire document. Adds task to the list if it happens.
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    convert();
  }
});

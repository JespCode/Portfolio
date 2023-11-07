// VERSION SUBMITTED TO KODELOFTET

//UNIT CONVERTER

//Global Variables
const fromUnitTemp = document.querySelector("#fromTemp");
const toUnitTemp = document.querySelector("#toTemp");
const buttonTemp = document.querySelector("#convertBtnTemp");
const inputTemp = document.querySelector("#userInputTemp");

const fromUnitDistance = document.querySelector("#fromDistance");
const toUnitDistance = document.querySelector("#toDistance");
const buttonDistance = document.querySelector("#convertBtnDistance");
const inputDistance = document.querySelector("#userInputDistance");

//Temperature Converter Function
function convertTemp() {
  //Get Values from inputs
  const inputValueTemp = inputTemp.value;
  const fromUnitValueTemp = fromUnitTemp.value;
  const toUnitValueTemp = toUnitTemp.value;
  let outputTextTemp = document.querySelector("#outputTemp");

  //Check if an inputValueTemp is given.
  if (inputValueTemp.length === 0) {
    outputTextTemp.textContent = "Please enter a value!";
  } else {
    //If/else block and formulas for conversion.
    // PRETTIER WILL LIKELY BREAK ALL FORMULAS INVOLVING FAHRENHEIT AS THE fromUnitValue OR toUnitValue! Use "prettier-ignore" for this block!
    // prettier-ignore
    if (fromUnitValueTemp === "Celsius" && toUnitValueTemp === "Kelvin") {
      outputValueTemp = parseInt(inputValueTemp) + 273.15;
      resultTextTemp = inputValueTemp + " " + fromUnitValueTemp + " = " + outputValueTemp.toFixed(2) + " " + toUnitValueTemp;
      outputTextTemp.textContent =  resultTextTemp;
    } else if (fromUnitValueTemp === "Kelvin" && toUnitValueTemp === "Celsius") {
      outputValueTemp = parseInt(inputValueTemp) - 273.15;
      resultTextTemp = inputValueTemp + " " + fromUnitValueTemp + " = " + outputValueTemp.toFixed(2) + " " + toUnitValueTemp;
      outputTextTemp.textContent =  resultTextTemp;
    } else if (fromUnitValueTemp === "Celsius" && toUnitValueTemp === "Fahrenheit") {
      outputValueTemp = (parseInt(inputValueTemp)*9/5) +32;
      resultTextTemp = inputValueTemp + " " + fromUnitValueTemp + " = " + outputValueTemp.toFixed(2) + " " + toUnitValueTemp;
      outputTextTemp.textContent =  resultTextTemp;
    } else if (fromUnitValueTemp === "Fahrenheit" && toUnitValueTemp === "Celsius") {
      outputValueTemp = (parseInt(inputValueTemp)-32)*5/9;
      resultTextTemp = inputValueTemp + " " + fromUnitValueTemp + " = " + outputValueTemp.toFixed(2) + " " + toUnitValueTemp;
      outputTextTemp.textContent =  resultTextTemp;
    } else if (fromUnitValueTemp === "Fahrenheit" && toUnitValueTemp === "Kelvin") {
      outputValueTemp = (parseInt(inputValueTemp)-32)*5/9+273.15;
      resultTextTemp = inputValueTemp + " " + fromUnitValueTemp + " = " + outputValueTemp.toFixed(2) + " " + toUnitValueTemp;
      outputTextTemp.textContent =  resultTextTemp;
    } else if (fromUnitValueTemp === "Kelvin" && toUnitValueTemp === "Fahrenheit") {
      outputValueTemp = (parseInt(inputValueTemp)-273.15)*9/5+32;
      resultTextTemp = inputValueTemp + " " + fromUnitValueTemp + " = " + outputValueTemp.toFixed(2) + " " + toUnitValueTemp;
      outputTextTemp.textContent =  resultTextTemp;
    } else {
      outputTextTemp.textContent = "I have no idea what you just did, but it's not gonna work!"
    }
    //Reset placeholder text and clear the input field.
    input.value = "";
  }
}

// Function to disable temperature conversion button if the toUnitTemp and fromUnitTemp values are equal.
function sameUnitsTemp() {
  if (fromUnitTemp.value === toUnitTemp.value) {
    buttonTemp.disabled = true;
  } else {
    buttonTemp.disabled = false;
  }
}

//Distance Converter Function
function convertDistance() {
  //Get Values from inputs
  const inputValueDistance = inputDistance.value;
  const fromUnitValueDistance = fromUnitDistance.value;
  const toUnitValueDistance = toUnitDistance.value;
  let outputTextDistance = document.querySelector("#outputDistance");

  //Check if an inputValueDistance is given.
  if (inputValueDistance.length === 0) {
    outputTextDistance.textContent = "Please enter a value!";
  } else {
    //If/else block and formulas for conversion.
    // Ignore prettier as it simply does undesirable formatting.
    // prettier-ignore
    if (fromUnitValueDistance === "Miles" && toUnitValueDistance === "Kilometers") {
      outputValueDistance = parseInt(inputValueDistance) * 1.609344;
      resultTextDistance = inputValueDistance + " " + fromUnitValueDistance + " = " + outputValueDistance.toFixed(2) + " " + toUnitValueDistance;
      outputTextDistance.textContent = resultTextDistance;
    } else if (fromUnitValueDistance === "Kilometers" && toUnitValueDistance === "Miles") {
      outputValueDistance = parseInt(inputValueDistance) / 1.609344;
      resultTextDistance = inputValueDistance + " " + fromUnitValueDistance + " = " + outputValueDistance.toFixed(2) + " " + toUnitValueDistance;
      outputTextDistance.textContent = resultTextDistance;
    } else {
      outputTextDistance.textContent = "I have no idea what you just did, but it's not gonna work!"
    }
    //Reset placeholder text and clear the input field.
    input.value = "";
  }
}

// Function to disable distance conversion button if the toUnitDistance and fromUnitDistance values are equal.
function sameUnitsDistance() {
  if (fromUnitDistance.value === toUnitDistance.value) {
    buttonDistance.disabled = true;
  } else {
    buttonDistance.disabled = false;
  }
}

//EventListener
buttonTemp.addEventListener("click", convertTemp);
fromUnitTemp.addEventListener("change", sameUnitsTemp);
toUnitTemp.addEventListener("change", sameUnitsTemp);

buttonDistance.addEventListener("click", convertDistance);
fromUnitDistance.addEventListener("change", sameUnitsDistance);
toUnitDistance.addEventListener("change", sameUnitsDistance);

// Event listener listening for the Enter button being clicked, targeting the entire document. Adds task to the list if it happens.
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    convertTemp();
    convertDistance();
  }
});

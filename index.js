// Conversion Constants
// --------------------

// Constants for unit conversion values.
const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204
const feetToMeter = 0.3048
const gallonToLiter = 3.78541
const poundToKilogram = 0.453592

// DOM Elements
// ------------

// References to necessary HTML elements.
const convertBtnEl = document.getElementById("convert-btn")
const inputNumberEl = document.getElementById("number-to-convert")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

// Event Listeners
// ---------------

// Enables the convert button if valid number input.
inputNumberEl.addEventListener("input", function() {
    if (!isNaN(Number(inputNumberEl.value))) {
        convertBtnEl.disabled = false
    }
})

// Clears the placeholder when the input field is clicked.
inputNumberEl.addEventListener("click", function(event) {
    event.target.placeholder = ""
})

// Allows the Enter key to trigger the conversion.
inputNumberEl.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        convertBtnEl.click()
    }
})

// Conversion Utility Functions
// ----------------------------

// Converts meters to feet and vice versa.
function convertLength(value) {
    return `${value} meter = ${(value * meterToFeet).toFixed(2)} feet | ${value} feet = ${(value * feetToMeter).toFixed(2)} meter`
}

// Converts liters to gallons and vice versa.
function convertVolume(value) {
    return `${value} liters = ${(value * literToGallon).toFixed(2)} gallons | ${value} gallons = ${(value * gallonToLiter).toFixed(2)} liters`
}

// Main conversion function triggered on button click.
function convertMass(value) {
    return `${value} kilos = ${(value * kilogramToPound).toFixed(2)} pounds | ${value} pounds = ${(value * poundToKilogram).toFixed(2)} kilos`
}

convertBtnEl.addEventListener("click", function() {
    let baseValue = Number(inputNumberEl.value)

    // Alert and exit if the value is not a valid number.
    if (isNaN(baseValue)) {
        alert("Please enter a valid number.")
        convertBtnEl.disabled = true
        return
    }
    
    // Set the results using the utility functions.
    lengthEl.textContent = convertLength(baseValue)
    volumeEl.textContent = convertVolume(baseValue)
    massEl.textContent = convertMass(baseValue)
})
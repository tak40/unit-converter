/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtnEl = document.getElementById("convert-btn")
const resultNumberEl = document.getElementById("result-number")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204
const feetToMeter = 0.3048
const gallonToLiter = 3.78541
const poundToKilogram = 0.453592

resultNumberEl.addEventListener("input", function() {
    if (!isNaN(Number(resultNumberEl.value))) {
        convertBtnEl.disabled = false;
    }
});

resultNumberEl.addEventListener("click", function(event) {
    event.target.placeholder = ""
});

convertBtnEl.addEventListener("click", function() {
    let baseValue = Number(resultNumberEl.value)
    if (isNaN(baseValue)) {
        alert("Please enter a valid number.")
        convertBtnEl.disabled = true;
        return
    }
    const lengthResult = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(2)} feet | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(2)} meter`
    const volumeResult = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(2)} gallons | ${baseValue} gallons = ${(baseValue * gallonToLiter).toFixed(2)} liters`
    const massResult = `${baseValue} kilos = ${(baseValue * kilogramToPound).toFixed(2)} pounds | ${baseValue} pounds = ${(baseValue * poundToKilogram).toFixed(2)} kilos` 
    
    lengthEl.textContent = lengthResult
    volumeEl.textContent = volumeResult
    massEl.textContent = massResult
})
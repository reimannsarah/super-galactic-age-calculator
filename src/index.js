// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import EarthAge from "./js/age";

let earthAge = new EarthAge();
console.log(earthAge);
 
function setAge() {
  earthAge.age = parseInt(document.getElementById("currentAge").value);
  return earthAge.age;
}

function clearForm() {
  let input = document.querySelectorAll("input");
  input.value = "";
  }



function showMercuryAge(e) {
  e.preventDefault();
  let age = parseInt(setAge());
  let showNumber = document.getElementById("showNumber");
  showNumber.innerText = `If you are ${age} years old on Earth, you are ${earthAge.calculateMercuryAge(age)} years old on Mercury`;
  clearForm();
}
function showVenusAge(e) {
  e.preventDefault();
  let age = parseInt(setAge());
  let showNumber = document.getElementById("showNumber");
  showNumber.innerText = `If you are ${age} years old on Earth, you are ${earthAge.calculateVenusAge(age)} years old on Venus`;
  clearForm();
}
function showMarsAge(e) {
  e.preventDefault();
  let age = parseInt(setAge());
  let showNumber = document.getElementById("showNumber");
  showNumber.innerText = `If you are ${age} on Earth, you are ${earthAge.calculateMarsAge(age)} on Mars`;
  resultsDiv.append(showNumber);
  clearForm();
}
function showJupiterAge(e) {
  e.preventDefault();
  let age = parseInt(setAge());
  let showNumber = document.getElementById("showNumber");
  showNumber.innerText = `If you are ${age} on Earth, you are ${earthAge.calculateJupiterAge(age)} years old on Jupiter`;
  resultsDiv.append(showNumber);
  clearForm();
}

function howManyMercuryYearsUntil(e) {
  e.preventDefault();
  setAge();
  let futureAge = parseInt(document.getElementById("futureMercury").value);
  earthAge.addFutureBDay(futureAge);
  let showNumber = document.getElementById("showNumber");
  showNumber.innerText = `It will be ${earthAge.mercuryYearsUntilNextBDay()} Mercury years until you are ${futureAge}`
  clearForm();
}
function howManyVenusYearsUntil(e) {
  e.preventDefault();
  setAge();
  let futureAge = parseInt(document.getElementById("futureVenus").value);
  earthAge.addFutureBDay(futureAge);
  let showNumber = document.getElementById("showNumber");
  showNumber.innerText = `It will be ${earthAge.venusYearsUntilNextBDay()} Venus years until you are ${futureAge}`
  clearForm();
}
function howManyMarsYearsUntil(e) {
  e.preventDefault();
  setAge();
  let futureAge = parseInt(document.getElementById("futureMars").value);
  earthAge.addFutureBDay(futureAge);
  let showNumber = document.getElementById("showNumber");
  showNumber.innerText = `It will be ${earthAge.marsYearsUntilNextBDay()} Mars years until you are ${futureAge}`
  clearForm();
}
function howManyJupiterYearsUntil(e) {
  e.preventDefault();
  setAge();
  let futureAge = parseInt(document.getElementById("futureJupiter").value);
  earthAge.addFutureBDay(futureAge);
  let showNumber = document.getElementById("showNumber");
  showNumber.innerText = `It will be ${earthAge.jupiterYearsUntilNextBDay()} Jupiter years until you are ${futureAge}`
  clearForm();
}

function howManyMercuryYearsSince(e) {
  e.preventDefault();
  setAge();
  let pastAge = parseInt(document.getElementById("pastMercury").value);
  earthAge.addPastBDay(pastAge);
  let showNumber = document.getElementById("showNumber");
  showNumber.innerText = `It has been ${earthAge.mercuryYearsSinceLastBDay()} Mercury years since you were ${pastAge}`
  clearForm();
}

function howManyVenusYearsSince(e) {
  e.preventDefault();
  setAge();
  let pastAge = parseInt(document.getElementById("pastVenus").value);
  earthAge.addPastBDay(pastAge);
  let showNumber = document.getElementById("showNumber");
  showNumber.innerText = `It has been ${earthAge.venusYearsSinceLastBDay()} Venus years since you were ${pastAge}`
  clearForm();
}

function howManyMarsYearsSince(e) {
  e.preventDefault();
  setAge();
  let pastAge = parseInt(document.getElementById("pastMars").value);
  earthAge.addPastBDay(pastAge);
  let showNumber = document.getElementById("showNumber");
  showNumber.innerText = `It has been ${earthAge.marsYearsSinceLastBDay()} Mars years since you were ${pastAge}`
  clearForm();
}

function howManyJupiterYearsSince(e) {
  e.preventDefault();
  setAge();
  let pastAge = parseInt(document.getElementById("pastJupiter").value);
  earthAge.addPastBDay(pastAge);
  let showNumber = document.getElementById("showNumber");
  showNumber.innerText = `It has been ${earthAge.jupiterYearsSinceLastBDay()} Jupiter years since you were ${pastAge}`
  clearForm();
}


document.getElementById("ageInMercuryYears").addEventListener("click",showMercuryAge);
document.getElementById("ageInVenusYears").addEventListener("click", showVenusAge);
document.getElementById("ageInMarsYears").addEventListener("click", showMarsAge);
document.getElementById("ageInJupiterYears").addEventListener("click", showJupiterAge);
document.getElementById("mercuryYearsUntil").addEventListener("click", howManyMercuryYearsUntil);
document.getElementById("venusYearsUntil").addEventListener("click", howManyVenusYearsUntil);
document.getElementById("marsYearsUntil").addEventListener("click", howManyMarsYearsUntil);
document.getElementById("jupiterYearsUntil").addEventListener("click", howManyJupiterYearsUntil);
document.getElementById("mercuryYearsSince").addEventListener("click", howManyMercuryYearsSince);
document.getElementById("venusYearsSince").addEventListener("click", howManyVenusYearsSince);
document.getElementById("marsYearsSince").addEventListener("click", howManyMarsYearsSince);
document.getElementById("jupiterYearsSince").addEventListener("click", howManyJupiterYearsSince);
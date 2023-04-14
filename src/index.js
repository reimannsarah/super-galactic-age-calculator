import EarthAge from "./js/age";

let earthAge = new EarthAge();
console.log(earthAge);
 
function setAge() {
  earthAge.age = parseInt(document.getElementById("currentAge").value);
  return earthAge.age;
}

function showMercuryAge(e) {
  e.preventDefault();
  let age = setAge();
  let resultsDiv = document.getElementById("showResults");
  let showNumber = document.createElement("p");
  showNumber.innerText = `Your age in Mercury years is: ${earthAge.calculateMercuryAge(age)}`;
  resultsDiv.append(showNumber);
}
function showVenusAge(e) {
  e.preventDefault();
  let age = setAge();
  let resultsDiv = document.getElementById("showResults");
  let showNumber = document.createElement("p");
  showNumber.innerText = `Your age in Venus years is: ${earthAge.calculateVenusAge(age)}`;
  resultsDiv.append(showNumber);
}
function showMarsAge(e) {
  e.preventDefault();
  let age = setAge();
  let resultsDiv = document.getElementById("showResults");
  let showNumber = document.createElement("p");
  showNumber.innerText = `Your age in Mercury years is: ${earthAge.calculateMarsAge(age)}`;
  resultsDiv.append(showNumber);
}
function showJupiterAge(e) {
  e.preventDefault();
  let age = setAge();
  let resultsDiv = document.getElementById("showResults");
  let showNumber = document.createElement("p");
  showNumber.innerText = `Your age in Mercury years is: ${earthAge.calculateJupiterAge(age)}`;
  resultsDiv.append(showNumber);
}

function howManyMercuryYearsSince(e) {
  e.preventDefault();
  setAge();
  let futureAge = document.getElementById("")
  let resultsDiv = document.getElementById("showResults");
  let showNumber = document.createElement("p");
  showNumber.innerText = `It will be ${earthAge.mercuryYearsSinceLastBDay()} years until you are `
}


document.getElementById("ageInMercuryYears").addEventListener("click",showMercuryAge);
document.getElementById("ageInVenusYears").addEventListener("click", showVenusAge);
document.getElementById("ageInMarsYears").addEventListener("click", showMarsAge);
document.getElementById("ageInJupiterYears").addEventListener("click", showJupiterAge);
// document.getElementById("mercuryYearsUntil").addEventListener()
// document.getElementById("venusYearsUntil").addEventListener()
// document.getElementById("marsYearsUntil").addEventListener()
// document.getElementById("jupiterYearsUntil").addEventListener()
// document.getElementById("mercuryYearsSince").addEventListener()
// document.getElementById("venusYearsSince").addEventListener()
// document.getElementById("marsYearsSince").addEventListener()
// document.getElementById("jupiterYearsSince").addEventListener()
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
  let mercuryAge = earthAge.calculateMercuryAge(age);
  showNumber.innerText
  resultsDiv.append(mercuryAge);
}
function showVenusAge(e) {
  e.preventDefault();
  let age = setAge();
  let resultsDiv = document.getElementById("showResults");
  let venusAge = earthAge.calculateVenusAge(age);
  resultsDiv.append(venusAge);
}
function showMarsAge(e) {
  e.preventDefault();
  let age = setAge();
  let resultsDiv = document.getElementById("showResults");
  let marsAge = earthAge.calculateMarsAge(age);
  resultsDiv.append(marsAge);
}
function showJupiterAge(e) {
  e.preventDefault();
  let age = setAge();
  let resultsDiv = document.getElementById("showResults");
  let JupiterAge = earthAge.calculateJupiterAge(age);
  resultsDiv.append(JupiterAge);
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
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import EarthAge from "./js/age";

let earthAge = new EarthAge();
 
function setAge() {
  earthAge.age = parseInt(document.getElementById("currentAge").value);
  return earthAge.age;
}

function clearForm() {
  let form = document.getElementById("currentAgeForm");
  if(form){
    form.reset();
  }
}



function showMercuryAge(e) {
  e.preventDefault();
  let age = parseInt(setAge());
  let showNumber = document.getElementById("showNumber");
  if(isNaN(age)) {
    showNumber.innerText = "Please enter a current age";
  }else {
    showNumber.innerText = `If you are ${age} years old on Earth, you are ${earthAge.calculateMercuryAge(age)} years old on Mercury`;   
  }
  clearForm();
}
function showVenusAge(e) {
  e.preventDefault();
  let age = parseInt(setAge());
  let showNumber = document.getElementById("showNumber");
  if(isNaN(age)) {
    showNumber.innerText = "Please enter a current age";
  }else {
    showNumber.innerText = `If you are ${age} years old on Earth, you are ${earthAge.calculateVenusAge(age)} years old on Venus`;    
  }
  clearForm();
}
function showMarsAge(e) {
  e.preventDefault();
  let age = parseInt(setAge());
  let showNumber = document.getElementById("showNumber");
  if(isNaN(age)) {
    showNumber.innerText = "Please enter a current age";
  }else {
    showNumber.innerText = `If you are ${age} on Earth, you are ${earthAge.calculateMarsAge(age)} on Mars`;    
  }
  clearForm();
}
function showJupiterAge(e) {
  e.preventDefault();
  let age = parseInt(setAge());
  let showNumber = document.getElementById("showNumber");
  if(isNaN(age)) {
    showNumber.innerText = "Please enter a current age";
  }else {
    showNumber.innerText = `If you are ${age} on Earth, you are ${earthAge.calculateJupiterAge(age)} years old on Jupiter`;    
  }
  clearForm();
}

function howManyMercuryYearsUntil(e) {
  e.preventDefault();
  setAge();
  let futureAge = parseInt(document.getElementById("futureMercury").value);
  let showNumber = document.getElementById("showNumber");
  if(isNaN(setAge()) || isNaN(futureAge)) {
    showNumber.innerText = "Please enter a number";
  }else {
    earthAge.addFutureBDay(futureAge);
    showNumber.innerText = `It will be ${earthAge.mercuryYearsUntilNextBDay()} Mercury years until you are ${futureAge}`;    
  }
  clearForm();
  let input = document.getElementById("futureMercury");
  input.value = "";
}
function howManyVenusYearsUntil(e) {
  e.preventDefault();
  setAge();
  let futureAge = parseInt(document.getElementById("futureVenus").value);
  earthAge.addFutureBDay(futureAge);
  let showNumber = document.getElementById("showNumber");
  if (isNaN(setAge()) || isNaN(futureAge)) {
    showNumber.innerText = "Please enter a number";
  }else {
    showNumber.innerText = `It will be ${earthAge.venusYearsUntilNextBDay()} Venus years until you are ${futureAge}`;

  }
  clearForm();
  let input = document.getElementById("futureVenus");
  input.value = "";
}
function howManyMarsYearsUntil(e) {
  e.preventDefault();
  setAge();
  let futureAge = parseInt(document.getElementById("futureMars").value);
  earthAge.addFutureBDay(futureAge);
  let showNumber = document.getElementById("showNumber");
  if (isNaN(setAge()) || isNaN(futureAge)) {
    showNumber.innerText = "Please enter a number";
  }else {
    showNumber.innerText = `It will be ${earthAge.marsYearsUntilNextBDay()} Mars years until you are ${futureAge}`;
  }
  clearForm();
  let input = document.getElementById("futureMars");
  input.value = "";
}
function howManyJupiterYearsUntil(e) {
  e.preventDefault();
  setAge();
  let futureAge = parseInt(document.getElementById("futureJupiter").value);
  earthAge.addFutureBDay(futureAge);
  let showNumber = document.getElementById("showNumber");
  if (isNaN(setAge()) || isNaN(futureAge)) {
    showNumber.innerText = "Please enter a number";
  }else {
    showNumber.innerText = `It will be ${earthAge.jupiterYearsUntilNextBDay()} Jupiter years until you are ${futureAge}`;
  }
  clearForm();
  let input = document.getElementById("futureJupiter");
  input.value = "";
}

function howManyMercuryYearsSince(e) {
  e.preventDefault();
  setAge();
  let pastAge = parseInt(document.getElementById("pastMercury").value);
  earthAge.addPastBDay(pastAge);
  let showNumber = document.getElementById("showNumber");
  if (isNaN(setAge()) || isNaN(pastAge)) {
    showNumber.innerText = "Please enter a number";
  }else {
    showNumber.innerText = `It has been ${earthAge.mercuryYearsSinceLastBDay()} Mercury years since you were ${pastAge}`;
  }
  clearForm();
  let input = document.getElementById("pastMercury");
  input.value = "";
}

function howManyVenusYearsSince(e) {
  e.preventDefault();
  setAge();
  let pastAge = parseInt(document.getElementById("pastVenus").value);
  earthAge.addPastBDay(pastAge);
  let showNumber = document.getElementById("showNumber");
  if (isNaN(setAge()) || isNaN(pastAge)) {
    showNumber.innerText = "Please enter a number";
  }else {
    showNumber.innerText = `It has been ${earthAge.venusYearsSinceLastBDay()} Venus years since you were ${pastAge}`;
  }
  clearForm();
  let input = document.getElementById("pastVenus");
  input.value = "";
}

function howManyMarsYearsSince(e) {
  e.preventDefault();
  setAge();
  let pastAge = parseInt(document.getElementById("pastMars").value);
  earthAge.addPastBDay(pastAge);
  let showNumber = document.getElementById("showNumber");
  if (isNaN(setAge()) || isNaN(pastAge)) {
    showNumber.innerText = "Please enter a number";
  }else {
    showNumber.innerText = `It has been ${earthAge.marsYearsSinceLastBDay()} Mars years since you were ${pastAge}`;
  }
  clearForm();
  let input = document.getElementById("pastMars");
  input.value = "";
}

function howManyJupiterYearsSince(e) {
  e.preventDefault();
  setAge();
  let pastAge = parseInt(document.getElementById("pastJupiter").value);
  earthAge.addPastBDay(pastAge);
  let showNumber = document.getElementById("showNumber");
  if (isNaN(setAge()) || isNaN(pastAge)) {
    showNumber.innerText = "Please enter a number";
  }else {
    showNumber.innerText = `It has been ${earthAge.jupiterYearsSinceLastBDay()} Jupiter years since you were ${pastAge}`;
  }
  clearForm();
  let input = document.getElementById("pastJupiter");
  input.value = "";
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
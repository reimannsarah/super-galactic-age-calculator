export default class EarthAge {
  constructor(age) {
    this.age = age;
    this.mercuryAge;
    this.venusAge;
    this.marsAge;
    this.jupiterAge;
    this.pastBDay;
    this.futureBDay;
  }
  
  calculateMercuryAge(age) {
    this.mercuryAge = parseFloat((age / 0.24).toFixed(4));  
    return this.mercuryAge;
  }

  calculateVenusAge(age) {
    this.venusAge = parseFloat((age / 0.62).toFixed(4));
    return this.venusAge;
  }
  
  calculateMarsAge(age) {
    this.marsAge = parseFloat((age / 1.88).toFixed(4));
    return this.marsAge;
  }

  calculateJupiterAge(age) {
    this.jupiterAge = parseFloat((age / 11.86).toFixed(4));
    return this.jupiterAge;
  }

  addPastBDay(pastBDay) {
    this.pastBDay = pastBDay;
    return this.pastBDay;  
  }
  
  addFutureBDay(futureBDay) {
   this.futureBDay = futureBDay;
   return this.futureBDay;
  }

  mercuryYearsSinceLastBDay() {
    let difference = this.age - this.pastBDay;
    let mercuryDifference = parseFloat((difference / 0.24).toFixed(4));
    return mercuryDifference;
  }

  venusYearsSinceLastBDay() {
    let difference = this.age - this.pastBDay;
    let venusDifference = parseFloat((difference / 0.62).toFixed(4));
    return venusDifference;
  }

  marsYearsSinceLastBDay() {
    let difference = this.age - this.pastBDay;
    let marsDifference = parseFloat((difference / 1.88).toFixed(4));
    return marsDifference;
  }

  jupiterYearsSinceLastBDay() {
    let difference = this.age - this.pastBDay;
    let jupiterDifference = parseFloat((difference / 11.86).toFixed(4));
    return jupiterDifference;
  }

  mercuryYearsUntilNextBDay() {
    let difference = this.futureBDay - this.age;
    let mercuryDifference = parseFloat((difference / 0.24).toFixed(4));
    return mercuryDifference;
  }
  
  venusYearsUntilNextBDay() {
    let difference = this.futureBDay - this.age;
    let venusDifference = parseFloat((difference / 0.62).toFixed(4));
    return venusDifference;
  }

  marsYearsUntilNextBDay() {
    let difference = this.futureBDay - this.age;
    let marsDifference = parseFloat((difference / 1.88).toFixed(4));
    return marsDifference;
  }

  jupiterYearsUntilNextBDay() {
    let difference = this.futureBDay - this.age;
    let jupiterDifference = parseFloat((difference / 11.86).toFixed(4));
    return jupiterDifference;
  }

  }


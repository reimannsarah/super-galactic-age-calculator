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
  
}

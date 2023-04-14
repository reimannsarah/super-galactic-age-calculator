export default class EarthAge {
  constructor(age) {
    this.age = age;
    this.mercuryAge;
    this.venusAge;
    this.marsAge;
    this.jupiterAge;
  }
  
  calculateMercuryAge(age) {
    mercuryAge = parseFloat((age / 0.24).toFixed(4));  
    return this.mercuryAge;
  }

  calculateVenusAge(age) {
    venusAge = parseFloat((age / 0.62).toFixed(4));
    return this.venusAge;
  }
  
  calculateMarsAge(age) {
    marsAge = parseFloat((age / 1.88).toFixed(4));
    return this.marsAge;
  }

  calculateJupiterAge(age) {
    jupiterAge = parseFloat((age / 11.86).toFixed(4));
    return this.jupiterAge;
  }
  
}

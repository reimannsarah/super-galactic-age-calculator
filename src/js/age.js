export default class EarthAge {
  constructor(age) {
    this.age = age;
  }
  
  calculateMercuryAge(age) {
    let mercuryAge = parseFloat((age / 0.24).toFixed(4));  
    return mercuryAge;
  }

  calculateVenusAge (age) {
    let venusAge = parseFloat((age / 0.62).toFixed(4));
    return venusAge;
  }
  
}

export default class EarthAge {
  constructor(age) {
    this.age = age;
  }
  
  calculateMercuryAge(number) {
    let mercuryAge = parseFloat((number / 0.24).toFixed(4));  
    console.log(mercuryAge);
    return mercuryAge;
  }
}

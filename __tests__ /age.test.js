import EarthAge from './../src/js/age.js';

describe('EarthAge', () => {

  let earthAge;

  beforeEach(() => {
    earthAge = new EarthAge(34)
  });

  test('should correctly create an age object with one property of age', () => {
    expect(earthAge.age).toEqual(34);
  });

  test('should correctly calculate mercury age', ()=> {
    expect(earthAge.calculateMercuryAge()).toEqual(34);
  });
});
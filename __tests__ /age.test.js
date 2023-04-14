import EarthAge from '../src/js/age.js';

describe('EarthAge', () => {

  test('should correctly create an age object with one property of age', () => {
    let earthAge = new EarthAge(34);
    expect(earthAge.age).toEqual(34);
  });
});
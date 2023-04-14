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
    expect(earthAge.calculateMercuryAge(34)).toEqual(141.6667);
  });

  test('should correctly calculate venus age', () => {
    expect(earthAge.calculateVenusAge(34)).toEqual(54.8387);
  });

  test('should correctly calculate mars age', () => {
    expect(earthAge.calculateMarsAge(34)).toEqual(18.0851)
  })
});
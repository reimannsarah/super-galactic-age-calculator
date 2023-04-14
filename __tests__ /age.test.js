import EarthAge from './../src/js/age.js';

describe('EarthAge', () => {

  let earthAge;
  let lastBDay;

  beforeEach(() => {
    earthAge = new EarthAge(34);
    lastBDay = new EarthAge(22);
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
    expect(earthAge.calculateMarsAge(34)).toEqual(18.0851);
  });

  test('should correctly calculate jupiter age', () => {
    expect(earthAge.calculateJupiterAge(34)).toEqual(2.8668);
  })

  test('should correctly calculate the difference between two numbers in mercury years', () => {
    expect
  })
});
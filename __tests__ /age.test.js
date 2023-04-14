import EarthAge from './../src/js/age.js';

describe('EarthAge', () => {

  let earthAge;

  beforeEach(() => {
    earthAge = new EarthAge(34);
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

  test('should add a value to the pastBDay property in the EarthAge constructor', () => {
    expect(earthAge.addPastBDay(23)).toEqual(23);
  });

  test('should add a value to the futureBDay property in the EarthAge constructor', () => {
    expect(earthAge.addFutureBDay(45)).toEqual(45);
  });

  test('should correctly calculate difference between a current age and a past age in mercury years', () => {
    earthAge.addPastBDay(23);
    expect(earthAge.mercuryYearsSinceLastBDay()).toEqual(45.8333);
  });

  test('should correctly calculate difference between a current age and a past age in venus years', () => {
    earthAge.addPastBDay(23);
    expect(earthAge.venusYearsSinceLastBDay()).toEqual(17.7419);
  });

  test('should correctly calculate difference between a current age and a past age in mars years', () => {
    earthAge.addPastBDay(23);
    expect(earthAge.marsYearsSinceLastBDay()).toEqual(5.8511);
  });

  test('should correctly calculate difference between a current age and a past age in jupiter years', () => {
    earthAge.addPastBDay(23);
    expect(earthAge.jupiterYearsSinceLastBDay()).toEqual(0.9275);
  });

  test('should correctly calculate difference between a current age and a future age in mercury years', () => {
    earthAge.addFutureBDay(49);
    expect(earthAge.mercuryYearsUntilNextBDay()).toEqual(62.5000);
  });

  test('should correctly calculate difference between a current age and a future age in venus years', () => {
    earthAge.addFutureBDay(49);
    expect(earthAge.venusYearsUntilNextBDay()).toEqual(24.1935);
  });

  test('should correctly calculate difference between a current age and a future age in mars years', () => {
    earthAge.addFutureBDay(49);
    expect(earthAge.marsYearsUntilNextBDay()).toEqual(7.9787);
  });

});
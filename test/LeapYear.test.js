const isLeapYear = require('../src/LeapYear')

describe('isLeapYear', () => {
  test('it returns true when passed in 400', () => {
    expect(isLeapYear(400)).toBeTruthy();
  })

  test('it returns true when passed in 800', () => {
    expect(isLeapYear(800)).toBeTruthy();
  })

  test('it returns true when passed in 1600', () => {
    expect(isLeapYear(1600)).toBeTruthy();
  })

  test('it returns false when passed in 500', () => {
    expect(isLeapYear(500)).toBeFalsy();
  })

  test('it returns true when passed in 404', () => {
    expect(isLeapYear(404)).not.toBe(false);
  })

  test('it returns false when passed in 407', () => {
    expect(isLeapYear(407)).toBe(false);
  })

  test('it returns error message when passed in "500" ', () => {
    expect(() => { isLeapYear('500') }).toThrow('Input must be a number!');
  })
})  
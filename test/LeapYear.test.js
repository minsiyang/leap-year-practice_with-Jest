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
})  
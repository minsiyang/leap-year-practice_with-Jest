const isLeapYear = require('../src/LeapYear')

test('it returns false when passed in 400', () => {
  expect(isLeapYear(400)).toBeTruthy();
})
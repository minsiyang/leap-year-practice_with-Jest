const isLeapYear = require('../src/LeapYear')

test('adds 1 + 2 to equal 3', () => {
  expect(isLeapYear(1, 2)).toEqual(3);
})
function isLeapYear(year) {
  if (typeof year === 'string') {
    throw new Error('Input must be a number!')
  } else if ( year % 400 === 0 || year % 4 === 0 && year % 100 !== 0  ) {
    return true
  } else {
    return false
  }
}
module.exports = isLeapYear;
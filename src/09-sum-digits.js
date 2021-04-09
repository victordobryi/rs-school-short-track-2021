/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // console.log(n);
  // const stringInputInArray = String(n).split('');
  // console.log(stringInputInArray);
  // const b = stringInputInArray.reduce((acc, el) => Number(acc) + Number(el));
  // console.log(b);
  // if (b > 9) {
  //   getSumOfDigits(b);
  // }
  // return b;

  console.log(n);
  const stringInputInArray = String(n).split('');
  const b = stringInputInArray.reduce((acc, el) => Number(acc) + Number(el));
  if (b > 9) {
    const c = String(b).split('').reduce((acc, el) => Number(acc) + Number(el));
    return c;
  }
  return b;
}

module.exports = getSumOfDigits;

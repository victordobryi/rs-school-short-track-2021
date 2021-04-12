/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  let arr = String(n).split('');
  for (let i = 0; i < arr.length; i++) {
    arr.splice(i, 1);
    const z = arr.reduce((acc, el) => String(acc) + String(el));

    if (z > max) {
      max = z;
    }
    arr = String(n).split('');
  }
  return Number(max);
}

module.exports = deleteDigit;

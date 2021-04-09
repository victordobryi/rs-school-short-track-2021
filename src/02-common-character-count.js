/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum = 0;
  const arr1 = s1.split('');
  const arr2 = s2.split('');

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        sum++;
        arr1.splice(i, 1);
        arr2.splice(j, 1);
        i = 0;
        j = 0;
      }
    }
  }
  return sum;
}

module.exports = getCommonCharacterCount;

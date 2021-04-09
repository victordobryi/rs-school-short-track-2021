/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const arr = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ];

  const inputArr = n.replace(/-/gi, '').split('');

  for (let i = 0; i < inputArr.length; i++) {
    if (arr.indexOf(inputArr[i]) === -1) {
      return false;
    }
  }
  return true;
  // console.log(n);
  // return /([A-F\d]-?)/g.test(n);
}

module.exports = isMAC48Address;

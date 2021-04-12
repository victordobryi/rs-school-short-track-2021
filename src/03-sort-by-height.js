/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(/* arr */) {
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === -1) {
  //     arr[i] = -1;
  //   } else if (arr[i] > -1) {
  //     if (arr[i] < arr[i + 1] || arr[i + 1] === undefined) {
  //       arr[i] = arr[i];
  //     } else {
  //       [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  //       i--;
  //     }
  //   }
  // }
  // return arr;
  throw new Error('Not implemented');
}

module.exports = sortByHeight;

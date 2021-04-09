/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(arr, value) {
  let start = -1;
  let end = arr.length;

  while (end - start > 1) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === value) {
      return mid;
    }
    if (arr[mid] > value) {
      end = mid;
    } else {
      start = mid;
    }
  }
  return -1;
}

module.exports = findIndex;

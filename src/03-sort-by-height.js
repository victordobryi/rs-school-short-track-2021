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
function sortByHeight(arr) {
  const finishArr = [];
  const sortedArr = arr.filter((item) => item > -1).sort((a, b) => a - b);
  let j = 0;
  // const element = -1;
  // const newArr = [];
  // let index = arr.indexOf(element);
  // while (index !== -1) {
  //   newArr.push(index);
  //   index = arr.indexOf(element, index + 1);
  // }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      finishArr.push(arr[i]);
    } else {
      finishArr.push(sortedArr[j]);
      j++;
    }
  }

  return finishArr;
}

module.exports = sortByHeight;

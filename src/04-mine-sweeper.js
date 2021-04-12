/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(/* matrix */) {
  throw new Error('Not implemented');

  // let columns = matrix[0].length;
  // let rows = matrix.length-1;
  // for (let i = 0; i < columns; i++) {
  //   for (let j = 0; j < matrix.length; j++) {
  //     if (matrix[i][j] === true) {
  //       if (
  //         matrix[rows-i][rows-j] !== undefined ||
  //         matrix[rows-i][j] !== undefined ||
  //         matrix[rows-i][rows] !== undefined ||
  //         matrix[rows-i][j - 1] !== undefined ||
  //         matrix[i][j + 1] !== undefined ||
  //         matrix[i + 1][j - 1] !== undefined ||
  //         matrix[i + 1][j] !== undefined ||
  //         matrix[i + 1][j + 1] !== undefined
  //       ) {

  //       }
  //     }
  //   }
  // }
}

module.exports = minesweeper;

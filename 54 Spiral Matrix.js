/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix) {
  let result = [];
  let rows = matrix.length;
  let columns = matrix[0].length;
  let rowStart = 0;
  let columnStart = 0;

  while (rows > 0 && columns > 0) {

    for (let i = columnStart; i < columns; i++) {
      result.push(matrix[rowStart][i]);
    }
    if (rowStart + 1 === rows) break;
    for (let j = rowStart + 1; j < rows; j++) {
      result.push(matrix[j][columns - 1]);
    }
    if (columns -2 < columnStart) break;
    for (let k = columns - 2; k >= columnStart; k--) {
      result.push(matrix[rows - 1][k])
    }
    for (let l = rows - 2; l > rowStart; l--) {
      result.push(matrix[l][columnStart]);
    }
    columns--;
    rows--;
    rowStart++;
    columnStart++;
  }
  return result;
};

/**
 * Given a string representation of a 2d map, return the number of islands in the map.
 * Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces
 * are considered connected if they are adjacent (but not diagonal).
 *
 */

function countIslands(mapStr) {
  var x = 0;
  var count = 0;
  var visited = {};

  var mapLength = mapStr.length;
  console.log(mapLength);
  for (var i = 1; i < mapLength; i++) {
    if (mapStr[i] === '\n') {
        x = i;
        break;
    }
  }
  console.log(x);
  for (var j = 0; j < mapLength; j++) {
    if (!visited[j] && mapStr[j] === '0') {
      count++;
      checkBorder(mapStr, j, visited);
    }
  }
  function checkBorder(mapStr, index, visited) {
    if (index < 0 || index === x || index % (x + 1) === x || index > (mapStr.length - 1)) {
      return;
    }
    if (visited[index] === true) {
      return;
    }

    if (mapStr[index] === '.') {
      return;
    }
    visited[index] = true;
    checkBorder(mapStr, index + 1, visited);
    checkBorder(mapStr, index - 1, visited);
    checkBorder(mapStr, index + x + 1, visited);
    checkBorder(mapStr, index - (x + 1), visited);
  }
  return count;
}


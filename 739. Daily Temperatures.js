var dailyTemperatures = function(T) {
  var output = [];
  for (var i = 0; i < T.length; i++) {
    for (var j = i + 1; j < T.length; j++) {
      if (T[j] > T[i]) {
        output.push(j - i);
        break;
      }
    }
    if (j === T.length) output.push(0);
  }
  return output;
};
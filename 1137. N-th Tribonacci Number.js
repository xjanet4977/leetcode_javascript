var tribonacci = function(n) {
  var arr = [];
  var i = 0;
  while (i <= n) {
      if ( i === 0 || i === 1) arr.push(i);
      if ( i === 2) arr.push(1);
      if ( i > 2) {
          var len = arr.length;
          var lastThreeVals = arr[len - 1] + arr[len - 2] + arr[len - 3];
          arr.push(lastThreeVals);
      }
      i++;
  }
 return arr.pop();

};
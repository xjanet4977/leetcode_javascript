var isHappy = function(n) {
  var sums = [];
  function helper(num) {
    var str = num.toString();
    let sum = 0;
    for (var i = 0; i < str.length; i++) {
      sum += Math.pow(Number(str[i]), 2)
    }
    if (sum === 1) return true;
    if (sums.indexOf(sum) === -1){
      sums.push(sum);
    } else {
      return false;
    }

    return helper(sum);
  }
  return helper(n);
};
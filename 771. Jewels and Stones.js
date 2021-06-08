var numJewelsInStones = function(J, S) {
  var output = 0;
  for (var i = 0; i < S.length; i++) {
    if (J.indexOf(S[i]) !== -1) output++;
  }
  return output;
};
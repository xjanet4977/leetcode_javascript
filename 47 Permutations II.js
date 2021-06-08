var permuteUnique = function(nums) {
  var results = [];
  if(nums.length === 1) return [nums];
  for (var i = 0; i < nums.length; i++) {
    if (nums.slice(0, i).indexOf(nums[i]) === -1) {
      var copy = nums.slice();
      copy.splice(i,1)
      var subPermutations = permuteUnique(copy);
      for (var j = 0; j < subPermutations.length;j++) {
        var result = [nums[i]].concat(subPermutations[j]);
        results.push(result);
      }
    }
  }
  return results;
};
var subarraySum = function(nums, k) {
  var output = 0;
  for (var i = 0; i < nums.length; i++) {
    if(nums[i] === k) output++;
    var sum = nums[i];
    for (var j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) output++;
    }
  }
  return output;
};
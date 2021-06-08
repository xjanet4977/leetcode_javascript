var findMaxAverage = function(nums, k) {
  var windowStart = 1, windowSum = 0, counter = 0, sum = 0;
  for (var i = 0;i < k; i++) {
      sum += nums[i];
  }
  var maxAvg = sum/k;
  for (var windowEnd = 1; windowEnd < nums.length; windowEnd++) {
      windowSum += nums[windowEnd];
      if (windowEnd >= k) {
          maxAvg = Math.max(maxAvg, windowSum/k);
          windowSum -= nums[windowStart];
          windowStart++;
      }
  }
  return maxAvg;

};
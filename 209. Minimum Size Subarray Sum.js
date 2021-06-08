var minSubArrayLen = function(s, nums) {
  var windowStart = 0, windowSum = 0, minLen = nums.length + 1;
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
      windowSum += nums[windowEnd];
      while (windowSum >= s) {
          minLen = Math.min(minLen, windowEnd - windowStart + 1);
          windowSum -= nums[windowStart];
          windowStart++;
      }
  }

  return minLen === nums.length + 1 ? 0 : minLen;

};
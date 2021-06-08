var findDuplicates = function(nums) {
  let duplicates = [];
  let i = 0;
  const n = nums.length;
  while (i < n) {
      let j = nums[i] - 1;
      if (nums[i] !== nums[j]) {
          [nums[j], nums[i]] = [nums[i], nums[j]];
      } else {
          i++;
      }
  }

  for (let i = 0; i < n; i++) {
      if (nums[i] !== i+ 1) duplicates.push(nums[i]);
  }

  return duplicates;
};
var subsetsWithDup = function(nums) {
  nums.sort();
  let subsets = [];
  subsets.push([]);
  for (let i = 0; i < nums.length; i++) {
      let startIdx = 0;

      if (i > 0 && nums[i - 1] === nums[i]) {
          startIdx = endIdx + 1;
      }
      var endIdx = subsets.length - 1;
      for (let j = startIdx; j < endIdx + 1; j++) {
          let set = subsets[j].slice();
          set.push(nums[i]);
          subsets.push(set);
      }
  }
  return subsets;

};
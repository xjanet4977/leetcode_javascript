var subsets = function(nums) {
  let result = [[]];
  for (let i = 0; i < nums.length; i++) {
      let len = result.length;
      for (let j = 0; j < len; j++) {
          let copy = result[j].slice();
          copy.push(nums[i]);
          result.push(copy);
      }
  }
  return result;
};
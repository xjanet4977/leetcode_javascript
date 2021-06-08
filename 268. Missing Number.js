var missingNumber = function(nums) {
  let sum = 0, total = 0;
  for (let i = 0; i < nums.length; i++) {
      sum += i + 1;
      total += nums[i];
  }
  return sum -total;
};
/*
Cyclic sort solution
const find_missing_number = function(nums) {
let i = 0;
let n = nums.length;
while (i < n) {
   let j = nums[i]
   if (nums[i] !== n && nums[i] !== nums[j]) {
     [nums[i], nums[j]] = [nums[j], nums[i]];
   } else {
     i++;
   }
}

for (let i = 0; i < n; i++) {
  if (i !== nums[i]) return i;
}
return n;
};
*/
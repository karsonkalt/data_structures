// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

var rotate = function (nums, k) {
  // Declare new data structure
  const newNums = [];

  let endIndex = nums.length - k;

  while (endIndex < nums.length) {
    newNums.push(nums[idx]);
    k++;
  }

  let startIndex = 0;

  while (startIndex < k) {}

  return newNums;
};

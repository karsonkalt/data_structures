var search = function (nums, target) {
  var low = 0;
  var high = nums.length - 1;

  while (low <= high) {
    var guessIndex = Math.floor(low + (high - low) / 2);
    var guessNum = nums[guessIndex];
    if (guessNum === target) {
      return guessIndex;
    } else if (guessNum > target) {
      high = guessIndex - 1;
    } else if (guessNum < target) {
      low = guessIndex + 1;
    }
  }
  return -1;
};

// Completed Nov 14, 2021
// Part of LeetCode Algo Study Plan "Algorithm I"

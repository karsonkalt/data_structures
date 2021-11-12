var twoSum = function (nums, target) {
  // Brute force would be two nested loops

  hashMap = {}; // Key will be the inverse, value will be the index of original value

  for (index = 0; index <= nums.length - 1; index++) {
    const num = nums[index];
    if (num in hashMap) {
      const indexOfFirst = hashMap[num];
      const indexOfSecond = index;
      return [indexOfFirst, indexOfSecond];
    } else {
      const inverse = target - num;
      hashMap[inverse] = index;
    }
  }
};

const nums = [2, 7, 11, 15];
const target = 9;

twoSum(nums, target);

// I learned that return in forEach will continue running even if it hits a reutrn statement. I opted to use a for loop instead.

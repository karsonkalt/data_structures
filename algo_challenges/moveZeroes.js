function moveZeroes(nums) {
  let lengthToTraverse = nums.length - 1;
  let currentIndex = 0;

  while (currentIndex < lengthToTraverse) {
    const currentNumber = nums[currentIndex];

    if (currentNumber === 0) {
      nums.splice(currentIndex, 1);
      nums.push(0);
      lengthToTraverse--;
    } else {
      currentIndex++;
    }
  }

  return nums;
}

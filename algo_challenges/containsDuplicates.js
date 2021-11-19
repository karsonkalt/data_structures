var containsDuplicate = function (nums) {
  const numsSeen = new Set();

  for (const num of nums) {
    if (numsSeen.has(num)) {
      return true;
    }

    numsSeen.add(num);
  }

  return false;
};

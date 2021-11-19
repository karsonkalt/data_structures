function mergeSortedArrays(arr1, arr2) {
  let idx1 = 0;
  let idx2 = 0;
  let newArray = [];

  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new TypeError();
  }

  if (arr1.length === 0) {
    return arr2;
  } else if (arr2.length === 0) {
    return arr1;
  }

  while (idx1 < arr1.length && idx2 < arr2.length) {
    if (arr1[idx1] <= arr2[idx2]) {
      newArray.push(arr1[idx1]);
      idx1++;
    } else {
      newArray.push(arr2[idx2]);
      idx2++;
    }
  }

  if (idx1 === arr1.length - 1) {
    newArray = [...newArray, ...arr1.slice(idx1)];
  } else {
    newArray = [...newArray, ...arr2.slice(idx2)];
  }

  return newArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], "karson"));

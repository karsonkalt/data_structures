function mergeSortedArrays(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new TypeError();
  }

  let idx1 = 0;
  let idx2 = 0;
  let newArray = [];

  while (idx1 < arr1.length && idx2 < arr2.length) {
    if (arr1[idx1] <= arr2[idx2]) {
      newArray.push(arr1[idx1]);
      idx1++;
    } else {
      newArray.push(arr2[idx2]);
      idx2++;
    }
  }

  if (idx1 < arr1.length) {
    newArray.push(...arr1.slice(idx1));
  } else {
    newArray.push(...arr2.slice(idx2));
  }

  return newArray;
}

let arr1 = [0, 3, 4, 31, 201, 40000];
let arr2 = [3, 4, 4, 4, 5, 5, 4000001];
console.log(mergeSortedArrays(arr1, arr2));

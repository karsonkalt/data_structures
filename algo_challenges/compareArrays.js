// Should compare two arrays and return true if there is a match

let array1 = [0, 1, 2, 3, 4, 5, 6];
let array2 = [8, 4, 20, 14];
let array3 = [7, 11, 22];

const containsCommonItem = (array1, array2) => {
  let setArray1 = new Set(array1); // O(a)

  for (let i = 0; i < array2.length; i++) {
    // O(b) iteration
    if (setArray1.has(array2[i])) {
      //O(1) lookup time
      return true;
    }
  }
  return false;
}; // O(a + b)

containsCommonItem(array1, array2);
// Should return true
containsCommonItem(array1, array3);
// Should return false

// What about edge cases?
// Is this function doing too many things?
// A function should be short and only do one thing
// If it needs to do extra actions, it should call another action.
// This creates testable, clean code that is modular.

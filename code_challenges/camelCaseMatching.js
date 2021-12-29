var camelMatch = function (queries, pattern) {
  // query pointer = i
  // pattern pointer = j
  // i is allowed to move forward if:
  // query[i] equals pattern[j]
  // OR
  // query[i] is a lowercase letter
  // j is allowed to move forward if and only if query[i] equals pattern[j]

  //"FooBarTest"
  //"FB"

  let lowerCase = new Set([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]);

  for (let query of queries) {
    let j = 0;
    for (let queryLetter of query) {
      if (j < query.length) {
        let patLetter = pattern[j];

        if (queryLetter === patLetter) {
          // if the letters are the same
          // incrementing going to throw error defining pat letter
          j++;
          continue;
        } else if (lowerCase.has(queryLetter)) {
          //if it's lowercase
          continue;
        } else {
          // Then we saw an unexpected capital letter
          return false;
        }
      } else if (lowerCase.has(queryLetter)) {
        //if it's lowercase
        continue;
      }
      return true;
    }
  }
};

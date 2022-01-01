const queries = [
  "FooBar",
  "FooBarTest",
  "FootBall",
  "FrameBuffer",
  "ForceFeedBack",
];
const pattern = "FB";

var camelMatch = function (queries, pattern) {
  // iterate through queries
  return queries.map((query) => {
    let pIndex = 0;

    for (const lett of query) {
      //  if it's a match then move forward
      // if it's a lowercase ignore it
      // if it's capital then it needs to match
      if (lett === pattern[pIndex]) {
        pIndex++;
      } else if (lett === lett.toUpperCase()) {
        return false;
      }
      return true;
    }
  });
};

camelMatch(queries, pattern);

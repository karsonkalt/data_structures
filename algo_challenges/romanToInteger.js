var romanToInt = function (s) {
  let hashMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  array = s.split("");

  array.forEach((letter, index) => {
    const letterVal = hashMap[letter];
    const nextLetterVal =
      index < array.length - 1 ? hashMap[array[index + 1]] : 0;
    //   Line 18 and 19 trying to do too much

    if (letterVal >= nextLetterVal) {
      total += letterVal;
    } else {
      total -= letterVal;
    }
  });

  return total;
};

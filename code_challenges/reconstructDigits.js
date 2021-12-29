var originalDigits = function (s) {
  // let original = {
  //     'zero': 0,
  //     'one': 1,
  //     'two': 2,
  //     'three': 3,
  //     'four': 4,
  //     'five': 5,
  //     'six': 6,
  //     'seven': 7,
  //     'eight': 8,
  //     'nine': 9
  // }

  let keyMap = {
    z: 0,
    o: 1, // - z - w - u
    w: 2,
    h: 3, // - g
    u: 4,
    f: 5, // - u
    x: 6,
    s: 7, // - x
    g: 8,
    i: 9, // - f - x - g
  };

  let countMap = {
    z: 0,
    o: 0, // - z - w - u
    w: 0,
    h: 0, // - g
    u: 0,
    f: 0, // - u
    x: 0,
    s: 0, // - x
    g: 0,
    i: 0, // - f - x - g
  };

  let arr = s.split("");
  console.log(arr);

  // Initial count
  for (const letter of arr) {
    if (letter in countMap) {
      countMap[letter] = countMap[letter] + 1;
    }
  }

  console.log(countMap);

  // Adjustments for duplicate letters
  countMap["h"] = countMap["h"] - countMap["g"]; // - g
  countMap["f"] = countMap["f"] - countMap["u"]; // - u
  countMap["s"] = countMap["s"] - countMap["x"]; // - x
  countMap["o"] = countMap["o"] - countMap["z"] - countMap["w"] - countMap["u"]; // - z - w - u
  countMap["i"] = countMap["i"] - countMap["f"] - countMap["x"] - countMap["g"]; // - f - x - g

  console.log(countMap);

  let stringBuilder = [];

  for (let letter in countMap) {
    for (let i = 1; i <= countMap[letter]; i++) {
      stringBuilder.push(keyMap[letter]);
    }
  }

  stringBuilder = stringBuilder.join("");

  return stringBuilder;
};

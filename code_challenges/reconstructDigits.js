var originalDigits = function (s) {
  nameMap = {
    z: 0,
    o: 1,
    w: 2,
    h: 3,
    u: 4,
    f: 5,
    x: 6,
    s: 7,
    g: 8,
    i: 9,
  };

  hashMap = {
    z: 0,
    o: 0,
    w: 0,
    h: 0,
    u: 0,
    f: 0,
    x: 0,
    s: 0,
    g: 0,
    i: 0,
  };

  let arr = s.split("");

  for (const letter of arr) {
    if (letter in hashMap) {
      hashMap[letter] = hashMap[letter] + 1;
    }
  }

  console.log(hashMap);

  // Subtract duplicates
  hashMap["o"] = hashMap["o"] - hashMap["z"] - hashMap["w"] - hashMap["u"]; //one
  hashMap["h"] = hashMap["h"] - hashMap["g"]; //three
  hashMap["f"] = hashMap["f"] - hashMap["u"]; //five
  hashMap["s"] = hashMap["s"] - hashMap["x"]; //seven
  hashMap["i"] = hashMap["i"] - hashMap["f"] - hashMap["x"] - hashMap["g"]; //nine

  console.log(hashMap);

  let stringBuilder = [];

  for (let k in hashMap) {
    let count = hashMap[k];
    for (i = 1; i <= count; i++) {
      stringBuilder.push(nameMap[k]);
    }
  }

  stringBuilder = stringBuilder.join("");

  return stringBuilder;
};

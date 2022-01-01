// 11106

let numDecodings = (s) => {
  let N = s.length;
  let ok = (x) => 1 <= x && x <= 26;
  let cache = {};

  let go = (index) => {
    if (cache[index]) return 1;

    if (index == N) return 1;

    let cnt = 0;
    let one = Number(s[index]);
    let two = one && index + 1 < N ? Number(s[index] + s[index + 1]) : 0;

    if (ok(one)) cnt += go(index + 1);
    if (ok(two)) cnt += go(index + 2);

    cache[index] = cnt;

    return cnt;
  };

  return go(0);
};

console.log(numDecodings("11106"));

function mySolution(string) {}

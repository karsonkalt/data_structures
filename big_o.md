# Big O

Big O notation looks at time complexity.

O(1) means that the time is constant. Now matter how big, it will always be the same.
O(n) means that the time scales with the size of the data, where size is n.

## Rules of Big O

1. If there are two different steps in your algorithm, you add them together.
2. You drop constants.
3. If you have different inputs, you use different variables to represent them.
4. You drop non-dominant terms

If go through the array twice, you might think it is O(2n), but you drop constants, so it is just O(n). Remember this is because we are just looking for how things scale roughly.

[Watch Gayle McDowell's Big O Notation Video on YouTube](https://www.youtube.com/watch?v=v4cd1O4zkGw&ab_channel=HackerRank)

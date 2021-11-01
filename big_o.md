**NOTE:** Some information taken from [bigocheatsheet.com](http://www.bigocheatsheet.com)

# What is Good Code

1. Readable
2. Scalable

- Speed – Dicatated by the CPU
- Memory – AKA RAM, more accessable nowadays, but it is still finite.

# Big O

Big O notation looks at time complexity. When we write code, we want to write things that are built for scale. Think outside of a small term here and now, think long-term.

O(1) means that the time is constant. Now matter how big, it will always be the same.
O(n) means that the time scales with the size of the data, where size is n.

`n` can be anything. It is just an arbitrary letter. `n` simply means O depends on the number of inputs. N here is the number of operations.

## Rules of Big O

1. If there are two different steps in your algorithm, you add them together.
2. You drop constants.
3. If you have different inputs, you use different variables to represent them.
4. You drop non-dominant terms

### Rules from Udemy Videos

1. Worst case only -- Not average, not best, the worst.
2. Remove constants
3. Different variables for inputs (e.g. O(a + b))

- Addition for steps in order
- Multiplication for nested steps

4. Drop non-dominants

If go through the array twice, you might think it is O(2n), but you drop constants, so it is just O(n). Remember this is because we are just looking for how things scale roughly.

[Watch Gayle McDowell's Big O Notation Video on YouTube](https://www.youtube.com/watch?v=v4cd1O4zkGw&ab_channel=HackerRank)

Anything that happens after each other is added. Anything nested is multiplied.

## O(n) Linear Time

Directly correlates to the number of inputs. It will go through every input. Pretend we are looking for an item, we always assume the worst case, so it is the last item in the array. So even though we want to `break` after we find the item, with Big O we assume it is the last item.

```javascript
function challenge(input) {
    let a = 10 // O(1)
    let b = 15 // O(1)
    let c = 22 // O(1)

    for (let i = 0; i < input ; i++>) {
        let x = 10;
    } // O(n)

    for (let i = 0; i < input ; i++>) {
        let y = 20;
    } // O(n)
}

challenge(10) // O(3+ (2n))
// We round down to O(n)

```

```javascript
function printFirstHalfThenSayHi(items) {

    var middleIndex = Math.floor(items.length / 2)
    var index = 0

    for (let i = 0; i < middleIndex ; i++>) {
        console.log(items[i])
    } // O(n/2)

    for (let i = 0; i < 100 ; i++>) {
        console.log("Hi")
    } // O(100)
}

var array = [0,1,2,3,4,5,6,7,8]
printFirstHalfThenSayHi(array) // O((n/2) + 100))
// We round down O(n) because we drop the constants.
// Remember we don't care about how steep the line is, we care about how the line moves. It is linear, not exponential.

```

```javascript
function logItems(array1, array2) {
  array1.forEach((item) => console.log(item)); // O(a)
  array2.forEach((item) => console.log(item)); // O(b)
} // O(a + b)
```

## O(1) Constant Time

This is an operation that only completes one operation and then finishes. Predictability in computing is great. We always know how long it will take.

What if we have a funciton like the following. We have two operations, but we don't care about the nitty gritty O(2). We round this down to just O(1) because of scalability, we are always going to do the constant amount of operations.

```javascript
const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); // O(2)
// We round down to O(1)
```

## O(n^2) Quadratic Time

```javascript
// Log all the pairs in the array
const array = ["a", "b", "c", "d", "e"];

function allPairsInArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i != j) console.log(`[${array[i]}, ${array[j]}]`);
    }
  }
} //O(n^2)
```

## O(n!) Factorial Time

Adding a loop for every element that you are iterating over. Pretty much never use this, it's expensive!

##

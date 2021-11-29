# Dynamic Programming

Dynamic programming is just a technique using caching. This is really just a buzzword, it's an approach to solve problem into sub-problems and saving their solution.

Caching is a way to store values so we use them later on. Instead of going all the way when I go home when I need a pencil, I can just open the small container with me to get it.

## Memoization

This is a specific form of caching

```javascript
function addTo50(n) {
  return n + 50;
}

addTo80(5);
// => 85
addTo80(5);
// => 85
addTo80(5);
// => 85

// Why did I have to re-run everything three times.
// What if it took a long time? I'm making the computer do a lot of work
```

Let's improve the funciton by doing something different.

```javascript
let cache = {};
function memoizedAddTo80(n) {
  if (!(n not in cache)) {
    cache[n] = n + 80;
  }
  return cache[n];
}
```

How do we bring the cache inside of the function? If we bring it in, then cache is reset every time the funciton is called.

To get around this we use clojures in javascript. We write a funcion that returns another funciton. This way we can avoid the global scope.

```javascript
let memoizedAddTo80 = (function (n) {
  let cache = {};
  return function (n) {
    console.log(cache);
    if (!(n in cache)) {
      console.log("Adding to cache.");
      cache[n] = n + 80;
    }
    return cache[n];
  };
})();
```

Let's do a more powerful example.

```javascript
let calculations = 0;
function fibonacci(n) {
  calculations++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Run time was O(2^n)
fibonacci(30);
// 832040
console.log(calculations);
// 2692537
```

The two pillers of dynamic programming are:

1. Divide and conquer
2. Memoization

How do we tell if a problem needs dynamic programming?

- Can it be divided into a submproblem
- Is it a recursive solution
- Are there repetitive subproblems
- Memoize subproblems

```javascript
calculations = 0;
const fibonacci = (function (n) {
  let cache = {};

  return function fibHelper(n) {
    calculations++;
    console.log(cache);
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      }
      sum = fibHelper(n - 1) + fibHelper(n - 2);
      cache[n] = sum;
      return sum;
    }
  };
})();

// Run time was O(2^n)
fibonacci(30);
// 832040
console.log(calculations);
// 2692537
```

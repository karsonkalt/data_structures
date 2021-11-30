// Given number n return the value of the fibonacci sequence.

// [0, 1, 1, 2, 3, 5, 8]

function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Runtime O(2^n)

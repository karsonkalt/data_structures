# Types of Sorting

- A good sorting algorithm is stable. This means that when multiple elements have the same value, the order is preserved in the final collection.
- A good algorithm uses the structure that was provided without needing additional space. This means that we manipulate the data destructively.
- An algorithm should be adaptive. The time complexity should speed up if the structure is nearly sorted.

## Selection Sort

**Time Complexity** `O(n^2)`
Time complexity aka quadratic time. Becuase it has a nested loop.

## Bubble Sort

**Time Complexity** `O(n^2)`
Goes through list of elements and compares them in couples.

## Insertion Sort

**Time Complexity** `O(n^2)`
Goes through the array and compares the item to everything to the left. If it finds something smaller than it, it inserts it to the _right_ of that item. If the array is mostly sorted it approaches `O(n)` run time.

## Merge Sort

**Time Complexity** `O(nlog(n))`

## Quick Sort

**Time Complexity** ``

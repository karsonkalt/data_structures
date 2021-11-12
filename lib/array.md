# Arrays

There are two types of arrays, static and dynamic arrays. A dynamic array can be resized.

```c++
// Uses static arrays
int a[20];
int b[5] {1, 2, 3, 4, 5}
```

```javascript
// Uses dynamic arrays
a = [1, 2, 3, 4];
```

Higher level languages allow us to not worry about memory, typically lower level languages are more static.
Because arrays once they are maxed out, might need to resize, then the runtime to push something would be O(n), but when there is space it is O(1)

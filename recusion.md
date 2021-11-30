# Recusion

This is one of the most popular topics when it comes to interviews. Recursion is when you define things inside of itself. Recursion is great for repeated subtasks to do.

For example:

- Traversing a tree
- Traversing the DOM

The stack will overflow if we dive too deep into the recursion. At some point we have to pop things off of the stack. This is grabbing a piece of memory from the computer.

Recursive functions have two paths:

- The recursive case, where it calls itself
- The base case

```javascript
let counter = 0;

function inception() {
  if (counter > 3) {
    return "done!";
  }
  counter++;
  inception();
}

inception();
```

This won't return `done!` because only the deepest call returns `done!`. We need to bubble up the return value.

```javascript
let counter = 0;

function inception() {
  if (counter > 3) {
    return "done!";
  }
  counter++;
  return inception();
}

inception();
```

## Tips for writing a recursive program

1. Identify the base case
2. Identify the recursive case
3. Get closer and closer and return when needed
4. We usually have two returns.

# Tip

Every time I see a tree or converting something into a tree, consider recursion.
Divide and conquer have recursion built into them.

# Types of Searching

## Depth First Search

DFS is a recursive algorithm that looks at a graph or tree. We ask the node, "do you have a path to node 't'?" We then look at the children, and continue down the recursion tree. If yes, we populate the yes all the way back up. It goes deep all the way down before exploring other branches.

1. Recursive
2. Simpler to implement
3. Use an "has_been_visited" flag (in a graph)

## Breadth First Search

BFS looks level by level all the way out before continuing deeper down the tree.

1. Use a queue to make sure that we check elements in the correct order.

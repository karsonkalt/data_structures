# Types of Searching

## Trees / Graphs

### Depth First Search

DFS is a recursive algorithm that looks at a graph or tree. We ask the node, "do you have a path to node 't'?" We then look at the children, and continue down the recursion tree. If yes, we populate the yes all the way back up. It goes deep all the way down before exploring other branches. If in a graph, it runs the risk of getting caught in an endless loop unless we keep track of what nodes we have visited.

1. Recursive
2. Simpler to implement
3. Use an "has_been_visited" flag (in a graph)

### Breadth First Search

BFS looks level by level all the way out before continuing deeper down the tree.

1. Use a queue to make sure that we check elements in the correct order.
2. Is not recursive, it needs to use a queue

### Bidirectional Search

Bidirectional search is used to find the shortest path between a source and the destination node. It runs two simultaneous BFS, one from each node. Becomes much much faster becuase it cuts the depth in half.

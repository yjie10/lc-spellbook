const bfs = function (list) {
  const result = [], visited = {};

  // Traversal from a single node, supports disconnected graphs
  function traverse(node) {
    const queue = [node];
    visited[node] = 1;

    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);

      for (const v of list[vertex]) {
        if (!visited[v]) {
          visited[v] = 1;
          queue.push(v);
        }
      }
    }
  }

  for (let i = 0; i < list.length; i++) {
    if (!visited[i]) traverse(i);
  }

  return result;
}

const graphOne = [
  [1, 2],   // node 0
  [3],      // node 1
  [4],      // node 2
  [],       // node 3
  [5],      // node 4
  []        // node 5
];

const graphTwo = [
  [1, 2],
  [0, 3],
  [0, 4],
  [1],
  [2]
];

console.log(bfs(graphOne)); // Expected: 0, 1, 2, 3, 4, 5
console.log(bfs(graphTwo)); // Expected: 0, 1, 2, 3, 4

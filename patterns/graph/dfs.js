const dfs = function (list) {
  const result = [], visited = {};

  function traverse(vertex) {
    if (visited[vertex]) return;

    visited[vertex] = 1;
    result.push(vertex);

    for (const v of list[vertex]) {
      traverse(v);
    }
  }

  traverse(0);

  // Optional: use this to traverse all nodes in disconnected graphs
  /*
  for (let i = 0; i < list.length; i++) {
    if (!visited[i]) traverse(i);
  }
  */

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

console.log(dfs(graphOne)); // Expected: 0, 1, 3, 2, 4, 5
console.log(dfs(graphTwo)); // Expected: 0, 1, 3, 2, 4

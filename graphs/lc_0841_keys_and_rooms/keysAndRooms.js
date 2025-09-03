const canVisitAllRoomsDfs = function (rooms) {
  const visited = {};

  function dfs(room) {
    if (visited[room]) return;

    visited[room] = true;

    for (const r of rooms[room]) {
      if (!visited[r]) dfs(r);
    }
  }

  dfs(0);

  return Object.keys(visited).length === rooms.length;
}

console.log('Ex 1. DFS: ', canVisitAllRoomsDfs([[1], [2], [3], []])); // Output: true
console.log('Ex 2. DFS: ', canVisitAllRoomsDfs([[1, 3], [3, 0, 1], [2], [0]])); // Output: false
console.log('Ex 3. DFS: ', canVisitAllRoomsDfs([[1], [3, 1, 2], [2], [0]])); // Output: true


const canVisitAllRoomsBfs = function (rooms) {
  const visited = {}, queue = [0];
  visited[0] = true;

  while (queue.length > 0) {
    const room = queue.shift();

    for (const r of rooms[room]) {
      if (!visited[r]) {
        visited[r] = true;
        queue.push(r);
      }
    }
  }

  return Object.keys(visited).length === rooms.length;
}

console.log('Ex 1. BFS: ', canVisitAllRoomsBfs([[1], [2], [3], []])); // Output: true
console.log('Ex 2. BFS: ', canVisitAllRoomsBfs([[1, 3], [3, 0, 1], [2], [0]])); // Output: false
console.log('Ex 3. BFS: ', canVisitAllRoomsBfs([[1], [3, 1, 2], [2], [0]])); // Output: true

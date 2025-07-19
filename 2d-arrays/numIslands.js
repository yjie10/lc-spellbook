const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1]
];

const numIslandsDfs = function (grid) {
  // LC Constraints: 1 <= m, n <= 300; 个人repo & 出于个人习惯我会保留这个check
  if (grid.length === 0 || grid[0].length === 0) return 0;

  let islandCount = 0;

  function dfs(m, n) {
    if (m < 0 || m >= grid.length || n < 0 || n >= grid[0].length || grid[m][n] !== "1") return;

    grid[m][n] = "0";

    for (let i = 0; i < directions.length; i++) {
      dfs(m + directions[i][0], n + directions[i][1]);
    }
  }

  for (let m = 0; m < grid.length; m++) {
    for (let n = 0; n < grid[0].length; n++) {
      if (grid[m][n] === "1") {
        islandCount++;
        dfs(m, n);
      }
    }
  }

  return islandCount;
}

const numIslandsBfs = function (grid) {
  if (grid.length === 0 || grid[0].length === 0) return 0;

  let islandCount = 0;
  const queue = [];

  for (let m = 0; m < grid.length; m++) {
    for (let n = 0; n < grid[0].length; n++) {
      if (grid[m][n] === "1") {
        islandCount++;
        queue.push([m, n]);

        while (queue.length > 0) {
          const [m, n] = queue.shift();

          grid[m][n] = "0";

          for (let i = 0; i < directions.length; i++) {
            const nextRow = m + directions[i][0], nextCol = n + directions[i][1];

            if (nextRow >= 0 && nextRow < grid.length && nextCol >= 0 && nextCol < grid[0].length && grid[nextRow][nextCol] === "1") queue.push([nextRow, nextCol]);
          }
        }
      }
    }
  }

  return islandCount;
}

const gridOne = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
];

const gridTwo = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
];

// 以下要分开测试……因为已经in-place改过了所以用另一个方法再run一次只会return 0
console.log('dfs - grid1: ', numIslandsDfs(gridOne)); // Output: 1
console.log('dfs - grid2: ', numIslandsDfs(gridTwo)); // Output: 3

console.log('bfs - grid1: ', numIslandsBfs(gridOne)); // Output: 1
console.log('bfs - grid2: ', numIslandsBfs(gridTwo)); // Output: 3

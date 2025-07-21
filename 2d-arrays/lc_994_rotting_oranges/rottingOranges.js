const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1]
];

const rottingOranges = function (grid) {
  // LC Constraints: 1 <= m, n <= 10; 个人repo & 出于个人习惯我会保留这个check
  if (grid.length === 0 || grid[0].length === 0) return -1;

  const queue = [];
  let freshOranges = 0, minutes = 0;

  // Initial scan, mark fresh and rotten oranges
  for (let m = 0; m < grid.length; m++) {
    for (let n = 0; n < grid[0].length; n++) {
      if (grid[m][n] === 1) freshOranges++;
      else if (grid[m][n] === 2) queue.push([m, n]);
    }
  }

  while (queue.length > 0 && freshOranges > 0) {
    const size = queue.length;
    minutes++;

    for (let i = 0; i < size; i++) {
      const [m, n] = queue.shift();

      for (const [dx, dy] of directions) {
        const nextRow = m + dx, nextCol = n + dy;

        if (nextRow >= 0 && nextRow < grid.length && nextCol >= 0 && nextCol < grid[0].length && grid[nextRow][nextCol] === 1) {
          grid[nextRow][nextCol] = 2;
          freshOranges--;
          queue.push([nextRow, nextCol]);
        }
      }
    }
  }

  return freshOranges === 0 ? minutes : -1;
}

console.log(rottingOranges([[2, 1, 1], [1, 1, 0], [0, 1, 1]])); // Output: 4
console.log(rottingOranges([[2, 1, 1], [0, 1, 1], [1, 0, 1]])); // Output: -1
console.log(rottingOranges([[0, 2]])); // Output: 0

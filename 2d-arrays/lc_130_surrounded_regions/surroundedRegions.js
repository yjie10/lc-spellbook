const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1]
];

/* DFS approach */
const surroundedRegions = function (board) {
  // LC Constraints: 1 <= m, n <= 200; 个人repo & 出于个人习惯我会保留这个check
  if (board.length === 0 || board[0].length === 0) return 0;

  function dfs(m, n) {
    if (m < 0 || m >= board.length || n < 0 || n >= board[0].length || board[m][n] !== 'O') return;

    board[m][n] = 'T'; // Temp mark to region cells that cannot be surrounded

    for (const [dx, dy] of directions) {
      dfs(m + dx, n + dy);
    }
  }

  for (let m = 0; m < board.length; m++) {
    for (let n = 0; n < board[0].length; n++) {
      // Check if any edge cells are region cells
      if ((m === 0 || n === 0 || m === board.length - 1 || n === board[0].length - 1) && board[m][n] === 'O') {
        dfs(m, n);
      }
    }
  }

  // Change valid region cells to 'X' and invalid region cells back to 'O'
  for (let m = 0; m < board.length; m++) {
    for (let n = 0; n < board[0].length; n++) {
      if (board[m][n] === 'O') board[m][n] = 'X';
      else if (board[m][n] === 'T') board[m][n] = 'O';
    }
  }

  console.table(board);
}

// Expected: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
surroundedRegions([["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]]);

// Expected: [["X"]]
surroundedRegions([["X"]])

// Expected: [["X","X","X"],["X","O","X"],["X","O","X"]]
surroundedRegions([["X", "X", "X"], ["X", "O", "X"], ["X", "O", "X"]]);

// Expected: [["X","O","X","O","X","O"],["O","X","X","X","X","X"],["X","X","X","X","X","O"],["O","X","O","X","O","X"]]
surroundedRegions([["X", "O", "X", "O", "X", "O"], ["O", "X", "O", "X", "O", "X"], ["X", "O", "X", "O", "X", "O"], ["O", "X", "O", "X", "O", "X"]]);

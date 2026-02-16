---
layout: default
---

[← Back to Home]({{ site.baseurl }}/)

## LC 130 - Surrounded Regions 🐈‍⬛

You are given an `m x n` matrix `board` containing **letters** `'X'` and `'O'`, **capture regions** that are **surrounded**:

- **Connect**: A cell is connected to adjacent cells horizontally or vertically.

- **Region**: To form a region **connect every** `'O'` cell.

- **Surround**: The region is surrounded with `'X'` cells if you can **connect the region** with `'X'` cells and none of the region cells are on the edge of the `board`.

To capture a **surrounded region**, replace all `'O'`s with `'X'`s **in-place** within the original board. You do not need to return anything.

🧩 Type: DFS, Backwards problem
🏷️ Tags: 2D-Arrays
🔗 URL: [Leetcode 130 - Surrounded Regions](https://leetcode.com/problems/surrounded-regions/description/)

---

### Understanding the Question 🔍

**Constraints**:

- `m == board.length`
- `n == board[i].length`
- `1 <= m, n <= 200`
- `board[i][j]` is `'X'` or `'O'`.

- Can there be more than one region?
  _Yes. There can be more than one region._

**Test Cases**:

> Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
> Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
> Explanation: The bottom region is not captured because it is on the edge of the board and cannot be surrounded.

**My first interpretation (correct or incorrect)**:

- Similar to `LC 200 - Number of Islands`, scan the board from `m = 1` and `n = 1` and perform traversal when `board[m][n] === 'O'`.
- Both DFS and BFS should work.

---

### Approach & Implementation 🛠️

- High-level plan / featured DS and/or algo (correct or incorrect)
- ~~Initial: Sequential scan from `(1, 1)` and perform traversal when `board[m][n] === 'O'` and replace `'O'` with `'X'`.~~
- Above will not work, it will be way too complicated to determine if the region cells are _surrounded_.
- Instead, work backwards: What region cells are _impossible_ to be surrounded?
- ↑ It would be the **edge** `'O'` cells. So any region cells that are connected to the edge region cells will be invalid.
- Scan the board, and perform traversal on edge `'O'` cells, temporarily mark connecting region cells as `'T'` (or anything). Perform a second scan after initial scan, replace all valid `'O'` region cells with `'X'` and invalid region cells `'T'` back to `'O'`.

---

### Time & Space Complexity ⏳🌌

- **Time**: O(m x n)
- **Space**: O(m x n)

_**Explanation**_:

T: Although we performed scan 2 times, `O(2 * (m x n))` drop the constant we still get `O(m x n)`.
S: `O(m x n)` in the worst case, due to recursion stack (DFS) or queue (BFS).

---

### Summary & Reflection 💭

- This is a problem that requires reverse thinking (逆向思维).
  - It emphasizes words like “surrounded” / “cannot be flipped” — which implies we should identify cells that are guaranteed **not** to be surrounded.
  - If a cell is connected to the edge, it cannot be surrounded.
  - So we don't find what **can** be changed — we find what **cannot** be changed.

> 💡 Tip: If a region problem sounds too hard to check locally (“is this O surrounded?”), try thinking from the boundary — what cannot be changed?

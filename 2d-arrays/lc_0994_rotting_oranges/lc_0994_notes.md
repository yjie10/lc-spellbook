---
layout: default
---

[← Back to Home](/)

## LC 994 - Rotting Oranges 🐈‍⬛

You are given an `m x n` `grid` where each cell can have one of three values:

- `0` representing an empty cell,
- `1` representing a fresh orange, or
- `2` representing a rotten orange.

Every minute, any fresh orange that is **4-directionally adjacent** to a rotten orange becomes rotten.

Return the _minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return_ `-1`.

🧩 Type: BFS
🏷️ Tags: 2D-Arrays
🔗 URL: [Leetcode 994 - Rotting Oranges](https://leetcode.com/problems/rotting-oranges/description/)

---

### Understanding the Question 🔍

**Constraints / Edge Cases**:

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 10`
- `grid[i][j]` is `0`, `1`, or `2`.

**Test Cases**:

Example 1:

> Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
> Output: 4

Example 2:

> Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
> Output: -1
> Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Example 3:

> Input: grid = [[0,2]]
> Output: 0
> Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

---

### Approach & Implementation 🛠️

- Sequential scan from `(0, 0)`, count fresh oranges (when `grid[m][n] === 1`) and add rotten oranges (when `grid[m][n] === 2`) to the queue.
- Perform **BFS** on the rotten oranges in the queue, `minute` should only be increased once a level is done processing — i.e. **after all oranges at the current level have spread rot to their neighbors**.
- If there are fresh oranges left after the queue is empty, then it is impossible for all oranges to be rotten, and we'll return `-1`.

---

### Time & Space Complexity ⏳🌌

- **Time**: `O(m x n)`
- **Space**: `O(m x n)`

**_Explanation_**:

- T: `O(m × n)` in worst case we scan all cells once (initial scan + BFS touch).
- S: `O(m x n)` in worst case when all oranges are rotten and added to the queue.

---

### Summary & Reflection 💭

- This is a **multi-source BFS** problem. We scan the grid and record all the starting points (rotten oranges) before performing any kind of traversal.
- 理论上来说也能用 DFS, but _NOT_ recommended as this is a layer by layer problem (**level-order traversal**). BFS naturally fits problems where **the earliest arrival matters**, as in this case where we want to know **how long until the furthest fresh orange rots**.

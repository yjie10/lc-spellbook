## LC 200 - Number of Islands 🐈‍⬛

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

🧩 Type: DFS, BFS
🏷️ Tags: 2d-Arrays
🔗 URL: [Leetcode 200 - Number of Islands](https://leetcode.com/problems/number-of-islands/)

---

### Understanding the Question 🔍

**Constraints**:

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 300`
- `grid[i][j]` is `'0'` or `'1'`

**Test Cases**:

Example 1:

> Input: grid = [
> ["1","1","1","1","0"],
> ["1","1","0","1","0"],
> ["1","1","0","0","0"],
> ["0","0","0","0","0"]
> ]
> Output: 1

Example 2:

> Input: grid = [
> ["1","1","0","0","0"],
> ["1","1","0","0","0"],
> ["0","0","1","0","0"],
> ["0","0","0","1","1"]
> ]
> Output: 3

---

### Approach & Implementation 🛠️

- Scan the grid sequentially starting from `(0, 0)` , increase `islandCount` and perform traversal if `grid[m][n]` is `'1'` (island).
- Don't forget to increase `islandCount` (😂).
- No need to create extra space, can do in-place update.
- For _BFS_: When checking for bounds, it should be `&&` instead of `||`...

  ```js
  // DFS - any of the condition fails, needs to return
  m < 0 || m >= grid.length || n < 0 || n >= grid[0].length;

  // BFS - it should satisfy ALL following conditions
  m >= 0 && m < grid.length && n >= 0 && n < grid[0].length;
  ```

---

### Time & Space Complexity ⏳🌌

- **Time**: `O(m x n)`
- **Space**: `O(m x n)`

**_Explanation_**:

- T: Will have to touch every single element `grid[m][n]` which results in `O(m x n)` time.
- S: `O(m x n)` in the worst case, due to recursion stack (DFS) or queue (BFS).

---

### Summary & Reflection 💭

- Intro question to `2D-arrays`. Simple, can be implemented using both `BFS` or `DFS` (I lean toward using `DFS` because it fits better with the idea we are trying to explore an _entire_ (depth) island).
- This is a revisit to the question.
- Space complexity: if we ignore the call stack / queue and only count explicit memory usage, then it's `O(1)` via _in-place_ updates.

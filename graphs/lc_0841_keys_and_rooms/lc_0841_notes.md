---
layout: default
---

[← Back to Home](/)

## LC 841 - Keys and Rooms 🐈‍⬛

`Date: 09-03-25 Time taken: ~22min`

There are `n` rooms labeled from `0` to `n - 1` and all the rooms are locked except for room `0`. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

When you visit a room, you may find a set of **distinct keys** in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

Given an array `rooms` where `rooms[i]` is the set of keys that you can obtain if you visited room `i`, return `true` _if you can visit **all** the rooms, or_ `false` _otherwise_.

🧩 LC Difficulty: `Medium`; `Easy` (My rating)
🏷️ Tags: Graph, DFS
🔗 URL: [Leetcode 841 - Key and Rooms](https://leetcode.com/problems/keys-and-rooms/description/)

---

### Understanding the Question 🔍

**Constraints / Edge Cases**:
Constraints from LC:

- `n == rooms.length`
- `2 <= n <= 1000`
- `0 <= rooms[i].length <= 1000`
- `1 <= sum(rooms[i].length) <= 3000`
- `0 <= rooms[i][j] < n`
- All the values of `rooms[i]` are **unique**.

**Test Cases**:

**Example 1:**

**Input:** rooms = `[[1],[2],[3],[]]`
**Output:** true
**Explanation:**
We visit room 0 and pick up key 1.
We then visit room 1 and pick up key 2.
We then visit room 2 and pick up key 3.
We then visit room 3.
Since we were able to visit every room, we return true.

**Example 2:**

**Input:** rooms = `[[1,3],[3,0,1],[2],[0]]`
**Output:** false
**Explanation:** We can not enter room number 2 since the only key that unlocks it is in that room.

**Example 3:**

**Input:**: rooms = `[[1], [3, 1, 2], [2], [0]]`
**Output**: true

**My first interpretation (correct or incorrect)**:

- My first instinct was to use **topological sort** -- mainly because that was the concept I was revisiting these two days.
- But then: topological sort only works for DAGs (directed acylic graphs) and can be used to detect cycles. But in this problem, it's still possible to visit all rooms even if there's a cycle (see Example 3 that I came up with).
- Therefore, topological sort isn't the best solution here.

---

### Approach & Implementation 🛠️

- After deciding to not use topological sort, I shifted to simple graph traversal.
- First, we probably need to keep track of the rooms we've visited. √
- If there's an isolated room (i.e. the graph is disconnected), we should return false. √
- **Question**: Is there an efficient way to determine if the graph is disconnected in the first place?
  A: No, we need to traverse it to find out.
- I went with DFS, starting from room 0. If the number of `visited` nodes is `=== n`, return `true`; otherwise, `false`.
- I initially used a `result` array to keep track of visited rooms, but later learned that `Object.keys(visited)` is sufficient. A `result` array would be more useful if the question asked for the visit order.
- P.S. I went with DFS first, but BFS traversal also works here. Both implementations are included in the JS file.

---

### Time & Space Complexity ⏳🌌

- **Time**: O(n)
- **Space**: O(n)

**_Explanation_**:

- **T**: We traverse all rooms once → linear time
- **S**: We use a `visited` object that scales with input size -- it stores each room at most once → linear space

---

### Summary & Reflection 💭

- Total time taken: ~22 min. Both the thought process and code were handwritten in Goodnotes first. AC on first submission.
- It’s rated `Medium` on Leetcode, but given how many traversals I've done recently, I found this to be a very beginner-friendly graph problem. In my opinion, it was easier than [LC 997](../lc_0997_find_the_town_judge/lc_0997_notes.md) because I was more familiar with graph traversals.
- There were no pitfalls or tricky edge cases in this problem.
- A little unrelated to this problem -- but moving forward, I'll be hiding the difficulty tags on Leetcode so I can approach each problem in a more neutral state of mind. Sometimes "Medium" can be easy, and "Easy" can turn out harder than expected.

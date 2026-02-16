---
layout: default
---

[← Back to Home]({{ site.baseurl }}/)

## LC 997 - Find the Town Judge 🐈‍⬛

`Date: 09-02-2025 Time taken: 50+ min`

In a town, there are `n` people labeled from `1` to `n`. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

1. The town judge trusts nobody.
2. Everybody (except for the town judge) trusts the town judge.
3. There is exactly one person that satisfies properties **1** and **2**.

You are given an array `trust` where `trust[i] = [ai, bi]` representing that the person labeled `ai` trusts the person labeled `bi`. If a trust relationship does not exist in `trust` array, then such a trust relationship does not exist.

Return _the label of the town judge if the town judge exists and can be identified, or return_ `-1` _otherwise_.

🧩 LC Difficulty: `Easy`
🏷️ Tags: Graph, Topological Sort
🔗 URL: [Leetcode 997 - Find the Town Judge](https://leetcode.com/problems/find-the-town-judge/description/)

---

### Understanding the Question 🔍

**Constraints / Edge Cases**:
Constraint Verification:

- Can a person (not the town judge) trust someone else?
  _Yes._

Constraints from LC:

- `1 <= n <= 1000`
- `0 <= trust.length <= 10^4`
- `trust[i].length == 2`
- All the pairs of `trust` are **unique**.
- `ai != bi`
- `1 <= ai, bi <= n`

**Test Cases**:

**Example 1:**

Input: n = 2, trust = `[[1,2]]`
Output: 2

**Example 2:**

Input: n = 3, trust = `[[1,3],[2,3]]`
Output: 3

**Example 3:**

Input: n = 3, trust = `[[1,3],[2,3],[3,1]]`
Output: -1

**My first interpretation (correct or incorrect)**:

- Use Topological sort.
- ~~If there's exactly one node left, that should be the town judge?~~
  (This is what led me to verify the constraint -- nope, a person can trust someone who isn’t the town judge.)

---

### Approach & Implementation 🛠️

- This is a graph problem, but it doesn’t require traversal.
- My initial instinct was to use topological sort.
- So I started by building a relation graph (which turned out to be unnecessary -- but I'll leave it here to show the thought process):

```js
const findJudge = function (n, trust) {
  // Build the graph and indegree array
  const graph = Array(n + 1)
      .fill(0)
      .map(() => []),
    indegree = Array(n + 1).fill(0);

  for (const [a, b] of trust) {
    graph[a].push(b);
    indegree[b]++;
  }

  // Topological check
  let index = -Infinity;

  for (let i = 0; i <= n; i++) {
    if (indegree[i] === n - 1 && graph[i].length === 0) {
      if (index > 0) return -1;
      // Initially thought there might be multiple people satisfying both conditions, and thus no valid town judge.
      // But realized that's impossible -- only one person can have indegree n - 1.
      else index = i;
    }
  }

  return index === -Infinity ? -1 : index;
};
```

- In reality, building the graph was unnecessary -- all we need is an `outdegree` array to track whether someone trusts others.
- ⚠️ **Pitfall**: People are labeled from `1` to `n`, so initializing an array with size `n` could cause out-of-bound issues.

---

### Time & Space Complexity ⏳🌌

- **Time**: O(n)
- **Space**: O(n)

**_Explanation_**:

- **T**: Multiple loops, each traversing at most `n` items → linear time
- **S**: `indegree` and `outdegree` arrays are of length `n + 1` → linear space

---

### Summary & Reflection 💭

- **Time taken**: ~50+ min including ~10+ min reading and understanding the question & debugging (thanks `graph[i] === 0` bug :D).
- My first instinct in graph problems is always to build a graph -- and this time was no exception.
  Initially, I thought a full graph would be required to perform topological sort, especially to verify whether a person with `indegree = n - 1` trusts anyone else.
  But after reaching the correct result, I realized creating a full graph just for this check was overkill -- and that's when I learned an `outdegree` array would've been a cleaner, more optimal solution.
- The **optimal solution** made it clear why this is marked as an **Easy** problem: the logic is simple once you see it.
  My initial solution makes a perfect example of _overthinking_ a simple problem. :D

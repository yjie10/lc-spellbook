---
layout: default
---

[← Back to Home](/)

## LC 014 - Longest Common Prefix 🐈‍⬛

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

🧩 LC Difficulty: `Easy`; `Medium` (My rating)
🏷️ Tags: Array, Strings
🔗 URL: [Leetcode 014 - Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/description/)

---

### Understanding the Question 🔍

**Constraints / Edge Cases**:

Constraint Verification:

- What to return if there's only one word?
  → Return the string itself.

Final constraints from LC:

- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` consists of only lowercase English letters if it is non-empty.

**Test Cases**:

Example 1:
**Input:** strs = ["flower","flow","flight"]
**Output:** "fl"

Example 2:

**Input:** strs = ["dog","racecar","car"]
**Output:** ""
**Explanation:** There is no common prefix among the input strings.

**My first interpretation (correct or incorrect)**:

- Thought might have to use a hash table at first, but did not end up using in brute-force or optimization version.

---

### Approach & Implementation 🛠️

- **Brute-force**: set `strs[0]` (technically can be any string in the array) as the prefix. Compare each character of subsequent strings against the current `prefix` and truncate when mismatch occurs.
- Hints received for optimization: instead of comparing strings _horizontally_, compare **characters** _vertically_ (column-wise).
- First, scan the array to determine the _minimum_ length to compare.

---

### Time & Space Complexity ⏳🌌

- **Time**: `O(n * m)`
- **Space**: `O(1)`

**_Explanation_**:
T: At most `n` comparisons per character for up to `m` characters.
S: No additional data structures used (prefix length grows with `m`, but not considered extra).

---

### Summary & Reflection 💭

- Variable naming is important in problems like this when the index has a semantic role (`i` and `j` can be confusing, `row` and `col` is more intuitive).
- Optimal doesn't necessarily mean avoiding double for-loops.
- Definitely not an `easy` problem comparing to other `easy` problems I have done.

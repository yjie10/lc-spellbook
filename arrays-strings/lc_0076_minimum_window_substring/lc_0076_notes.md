## LC 076 - Minimum Window Substring 🐈‍⬛

📅 09.16.25 | ⏳ Lost track of time `_(:D」∠)_` | 🧩 Difficulty: Hard | 🏷️ Tags: Sliding Window, Hash Table, String
🔗 [Leetcode 076 - Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/description/)

---

### Understanding the Question 🔍

**My first interpretation (correct or incorrect)**:

- Need to find a substring of `s` that **contains all characters** from `t`.
- Return a substring -- doesn't have to be _contiguous_ and order _doesn't_ matter.
- Initial thought: use a hash table to store character frequencies in `t` ← √
- Initial goal: find a substring that includes `t`.
- Have:
  - a historical min length substring.
  - a `currSubstring`.
  - Once initial goal is completed, continue to see if there's another substring that includes `t` with shorter length.

---

### Approach & Implementation 🛠️

- I did end up using a hash table to store characters in `t`.
- Initial logic is full of flaw. But I did notice pretty quickly I don't need to store the `currSubstring` but the indexes of the `start` and `end` windows.
- The _"find a valid window first"_ logic came from LC643 Maximum Average Subarray problem, where I used 2 loops -- one for calculating the sum up to `k`, and another for updating the `max`. This approach _DID_ pass some test cases, but won't work for most test cases (e.g. first valid window includes the whole `s` string already → no way to shrink the window).
- Need to find valid substring _and_ slide window in the same loop. First expand the window, and once there's a valid window, record the indexes and try shrinking; repeat.
- We actually need to:

  1. Expand the window (move end).
  2. Once it becomes valid (contains all characters), try shrinking from the start side.
  3. Every time we find a valid window, update the shortest one if it’s smaller.
  4. Repeat until the entire string has been processed.

- The final solution can found in the JS file. Also included using an array for ASCII lookup (size 128) instead of a hash table, which improved runtime significantly on LC.

---

### Time & Space Complexity ⏳🌌

- **Time**: `O(m + n)` - One pass over `t` and one sliding pass over `s`.
- **Space**: `O(m)` - Storing frequency count of `t`, worst case `O(52)` (if using hash table); or fixed `O(128)` if using ASCII array.

---

### Summary & Reflection 💭

- Attempted this problem without looking at the difficulty tag as well, did smell the `hard` though.
- The window changing size handling part is what makes this problem difficult, not the concept itself. Overall logic isn't difficult, but might explode during implementation.
- It seems many "substring with condition" problems follow this template:

```js
  for (let end = 0; end < s.length; end++) {
    // expand window
    while (window is valid) {
    // update result
    // shrink window
    }
  }

```

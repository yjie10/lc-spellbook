---
layout: default
---

[← Back to Home]({{ site.baseurl }}/)

## 1018. Binary Prefix Divisible By 5 🐈‍⬛

📅 11.24.25 | ⏳ 1hr+ | 🧩 Difficulty: `Easy` (I'd say it's `Trick` because you need some bit manipulation + overflow awareness) | 🏷️ Tags: Array, Bit Manipulation
🔗 [LC1018](https://leetcode.com/problems/binary-prefix-divisible-by-5/description/)

---

### Understanding the Question 🔍

**My first interpretation (correct or incorrect)**:

- There _had_ to be a trick for this problem.
- Brute-force idea: at each step, convert the prefix binary → decimal.

---

### Approach & Implementation 🛠️

- I tried a couple of ideas for fun. One of them was reversing `nums` and building a value from the back, thinking it would avoid repeated binary-to-decimal conversions.
  Turns out that only gives you the **final** binary value (e.g., `1101` → `13`), not the **per-scan prefix values** (`1`, `3`, `6`, `13`) the problem actually requires.
- Looked up bit manipulation, then AC in 3min (lol).
  **Key Point #1**: Know the bit manipulation pattern.
  **Key Point #2**: The binary value grows very fast, so to avoid overflow, keep everything modulo the number you care about (`num = num % 5` in this case).
- The bit manipulation rule:
  - Shifting left is equivalent to multiplying the current value by `2`.
    Adding a `1` bit means `*2 + 1`.
  ```
  11 (3) →
  110: 3 * 2 = 6
  111: 3 * 2 + 1 = 7
  ```

---

### Time & Space Complexity ⏳🌌

- **Time**: `O(n)` -- One linear pass through `nums` array.
- **Space**: `O(n)` -- Storing the boolean results.

---

### Summary & Reflection 💭

- (Re-)Learned a **bit manipulation** pattern.
- Preventing overflow is usually done via **modulo** (`% the base you care about`), which keeps values bounded while preserving correctness.

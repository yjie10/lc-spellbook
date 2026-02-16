---
layout: default
---

[← Back to Home]({{ site.baseurl }}/)

## LC 485 - Max Consecutive Ones 🐈‍⬛

Given a binary array `nums`, return the _maximum number of consecutive `1`'s in the array_.

🧩 LC Difficulty: Easy
🏷️ Tags: Array
🔗 URL: [Leetcode 485 - Max Consecutive Ones](http://leetcode.com/problems/max-consecutive-ones/description/)

---

### Understanding the Question 🔍

**Constraints / Edge Cases**:

Constraint Verification (in absence of tags/constraints):

- **Binary array**, so containing only `0`'s and `1`'s? All numbers?
  → Should only contain numeric `0` and `1`, not strings like `"1"`.
  _Confirmed in LC's constraints._

- What to return if there's no `1`s in the array?
  _Clarified in sample inputs._

- Can the array be empty?
  → Should I early return `0` for empty input?
  _Confirmed in LC's constraints._

Final constraints from LC:

- `1 <= nums.length <= 10^5`
- `nums[i]` is either `0` or `1`

**Test Cases**:

Example 1:

**Input:** nums = [1,1,0,1,1,1]
**Output:** 3
**Explanation:** The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Example 2:

**Input:** nums = [1,0,1,1,0,1]
**Output:** 2

**My first interpretation (correct or incorrect)**:

- The classic finding `max` problem.
- Loop through the array, if `nums[i]` is `1`, update count, else reset count and continue.

---

### Approach & Implementation 🛠️

- Taking straight from Goodnotes.

```js
const maxConsecutiveOnes = function (nums) {
  // input is guaranteed to be non-empty for this problem; 个人repo & 出于个人习惯我会保留这个check
  if (nums.length === 0) return 0;

  let count = 0,
    max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) count++;
    else count = 0;
    max = Math.max(max, count);
  }

  return max;
};
```

- Basically implemented exactly as **first interpretation**. Except when writing the check statement we need a separate max variable other than count (😂).
- Thought of updating the `max` in the else statement, but noticed right away it won't work if `nums` only consists of `1`s (it would never enter the else block). This approach avoids edge-case pitfalls such as missing the tail-end run of `1`'s, by updating `max` at each step rather than only on reset.

---

### Time & Space Complexity ⏳🌌

- **Time**: O(n) (`optimal`)
- **Space**: O(1) (`optimal`)

**_Explanation_**:
T: Need to iterate through the entire array regardless so optimal is `O(n)`.
S: No scaling data structure, only initialized two counters.

---

### Summary & Reflection 💭

- No category hints given.
- Doing `Math.max(max, count)` on every loop iteration is efficient and ensures no edge case is missed.
- This is a classic **rolling counter** + **max tracker** pattern — clean, readable, optimal.
- **Similar pattern**:
  - LC 121: Best Time to Buy and Sell Stock
  - LC 409: Longest Palindrome
  - LC 53: Maximum Subarray

---
layout: default
---

[← Back to Home](/)

## LC 643 - Maximum Average Subarray I 🐈‍⬛

`Date: 09-08-25 Time taken: 1hr+`

You are given an integer array `nums` consisting of `n` elements, and an integer `k`.

Find a contiguous subarray whose **length is equal** to `k` that has the maximum average value and return _this value_. Any answer with a calculation error less than `10^-5` will be accepted.

🧩 LC Difficulty: `Easy` (I think it's `Easy-Medium`)
🏷️ Tags: Array, Sliding Window
🔗 URL: [Leetcode 643 - Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/description/)

---

### Understanding the Question 🔍

**Constraints / Edge Cases**:

- `n == nums.length`
- `1 <= k <= n <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

**Test Cases**:

**Example 1:**
nums = `[0,1,1,3,3]`, k = 4
Output: 2

**Example 2:**
nums = `[4,0,4,3,3]`, k = 5
Output:2.8

**My first interpretation (correct or incorrect)**:

- Similar to LC53 Maximum Subarray, except we are calculating the _average_ this time and have a fixed `k` values.
- We are still trying to find all possible combo.
- We need a `currAvg` to keep track of current average and a historical max.
- I tried using two pointers to define the window range (`p1` to `p2`), but ended up nesting a second loop, which led to a brute-force approach.
  ```js
  const findMaxAverage = function (nums, k) {
    if (nums.length === 1) return nums[0];
    let maxAvg = -Infinity;
    for (p1 = 0; p1 + k <= nums.length; p1++) {
      let p2 = p1,
        currsum = 0;
      for (let i = 1; i <= k; i++) {
        currsum += nums[p2];
        p2++;
      }
      const currAvg = currSum / k;
      maxAvg = Math.max(maxAvg, currAvg);
    }
    return maxAvg;
  };
  ```
- When I submitted and TLE happened, I noticed what my initial solution is **_totally_** brute-force.

### Approach & Implementation 🛠️

- Expanding upon initial solution, I noticed there's no need to calculate the average when updating the max, we can do it at the end.
- I thought, we need to ~~_memoize_~~ (actually _maintain_ is the more accurate term here) the `currSum`, so we don't have to repeat calculations (which results in `O(n * k)` TLE).
- My initial sliding window solution attempt:

  ```js
  // calculate the sum over the first window
  const findMaxAverage = function (nums, k) {
    let currSum = nums[0];

    for (let i = 1; i < k; i++) {
      currSum += nums[i];
    }

    if (nums.length === k) return currSum / k;

    // Else continue
    let maxSum = currSum;

    for (let i = 0; i + k < nums.length; i++) {
      currSum -= nums[i]; // take out the leftmost value
      currSum += nums[i + k]; // add new rightmost value

      maxSum = Math.max(maxSum, currSum);
    }

    return maxSum / k;
  };
  ```

- The final version in the JS file did some index cleaning.

---

### Time & Space Complexity ⏳🌌

- **Time**: `O(n)`
- **Space**: `O(1)`

**_Explanation_**:
**T**: One pass through the array → linear time
**S**: Two static values to keep track of current sum & max sum, no scaling data structures → `O(1)`

---

### Summary & Reflection 💭

- Technically speaking this is my first sliding window problem (LC53 - Maximum Subarray is more of a DP problem).
- LC rating for this problem is `Easy`, but it's more of a `Easy-Medium` if unfamiliar with sliding window. (I have to thank myself for hiding the difficulty tag, or else I'd probably be very discouraged when I passed the 40min mark lol)
- I hit every pitfall possible when doing this problem :D (index issues → spent ~15-20min debugging solution that isn't even optimal(but didn't find out it's brute-force until TLE...)). But I think this marks another growth.
- - I'm working towards consistently solving Easy & Medium problems within 20–30 minutes. This one was a meaningful step forward.

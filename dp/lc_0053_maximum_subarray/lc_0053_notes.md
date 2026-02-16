---
layout: default
---

[← Back to Home]({{ site.baseurl }}/)

## LC 053 - Maximum Subarray 🐈‍⬛

`Date: 09-04-25 Time taken: ~1hr+`

Given an integer array `nums`, find the subarray with the largest sum, and return _its sum_.

🧩 LC Difficulty: Medium
🏷️ Tags: DP (Kadane's Algorithm), Array
🔗 URL: [Leetcode 053 - Maximum Subarray](https://leetcode.com/problems/maximum-subarray/description/)

---

### Understanding the Question 🔍

**Constraints / Edge Cases**:
Constraints from LC:

- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

**Test Cases**:

**Example 1:**

Input: nums = `[-2,1,-3,4,-1,2,1,-5,4]`
Output: 6
Explanation: The subarray `[4,-1,2,1]` has the largest sum 6.

**Example 2:**

Input: nums = `[1]`
Output: 1
Explanation: The subarray `[1]` has the largest sum 1.

**Example 3:**

Input: nums = `[5,4,-1,7,8]`
Output: 23
Explanation: The subarray `[5,4,-1,7,8]` has the largest sum 23.

**My first interpretation (correct or incorrect)**:

- Since this was given as a **sliding window** practice, I assumed the optimal solution would involve some kind of array manipulation or pointer movement -- maybe even some weird window "magic (?) I hadn't learned yet.
- Truth is, I didn't really know how to solve it at first. Then I thought I'll start by trying to come up with a brute-force solution:
  - Try every combination of `p1` and `p2`, record each subarray's sum, and update the global max accordingly.
  - Very inefficient, but a helpful thinking starter.
- Then I wondered: Can I record the **max** sum at each index?
  Because _index doesn't matter, only the sum does_.

---

### Approach & Implementation 🛠️

- Started with logic walkthrough using Leetcode's example (they had good examples this time!):
  Input: `nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]`
  - at index 0 → max sum is `-2`
  - at index 1 → either `1` or `-1`(prev), we'll take `1`
  - at index 2 → either `-3` or `-2`, we won't update the max, but will take `-2` as the prev max
  - at index 3 → either `4` or `1`, we'll take `4`
  - at index 4 → either `-1` or `3`, we won't update the max, but will take `3` as the prev max
  - at index 5 → either `2` or `5`, we'll take `5`
  - at index 6 → either `1` or `-6`, we'll take `6`
  - at index 7 → either `-5` or `1`, we won't update the max, but will take `1` as the prev max
  - at index 8 → either `4` or `6`, `6` === current max, we won't update the max, but will take `6` as the prev max
- The above logic should work for other test cases, I went through one more, this time using more like pseudocode. P.S. I'm getting the DP vibes at this point.
  Input: `[5, 3, -1, 7, 8]`
  `sums = [];`
  - `sums[0] = nums[0]`
  - `sums[1] = Math.max(sums[0] + nums[1], nums[1])` → `9`
  - `sums[2] = Math.max(sums[1] + nums[2], nums[2])` → `8` (Should NOT update max here)
  - `sums[3] = Math.max(sums[2] + nums[3], nums[3])` → `15`
  - `sums[4] = Math.max(sums[3] + nums[4], nums[4])` → `23`
- Confirmed why this was categorized as a **Dynamic Programming** problem.
  (Though I had been told to expect Kadane's Algorithm, and I thought that was something separate -- turns out Kadane is DP, just the optimized form lol...)
- My initial code was almost correct, but I only had one variable maxSum, and used it to do both:
  - track the _current subarray sum_, and
  - store the _historical max_
- As a result, I passed the test case where the whole array was used, but failed other test cases.
- It took me 30+ minutes to realize I needed _two_ variables (lol). The working solution can be found in the JS file, I will leave the inital buggy version here for reference:

  ```js
  const maxSubArray = function (nums) {
    // early exit
    if (nums.length === 1) return nums[0];

    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
      maxSum = Math.max(nums[i], maxSum + nums[i]);
    }

    return maxSum;
  };
  ```

---

### Time & Space Complexity ⏳🌌

- **Time**: `O(n)`
- **Space**: `O(1)`

**_Explanation_**:

- T: One pass through the array → linear time
- S: No scaling data structure using bottom-up approach (Kadane's algorithm) → O(1)

---

### Summary & Reflection 💭

- Total time: ~1hr+ (30min for initial solution and 30min for debugging...)
- **Kadane's Algorithm** = optimized bottom-up DP:
  ```js
  sum = Math.max(nums[i], sum + nums[i]); // current subarray max
  max = Math.max(max, sum); // historical max
  ```
- Picking example to manual test code is important! Although LC had some good test cases this time, I picked a "full array" example, which happened to work even when my logic was missing a piece.
- **Similar pattern**: [Leetcode 121](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/).
- Debug log (aka the micro-drama):
  - "Oh this code is short, will it work?" → ×
  - "Yup I knew it wouldn't be that simple." → debug
  - "Wait I think it should work, why did it fail? Is my whole logic wrong?" → 🌀
  - “Oh I needed another variable.” → 🤡

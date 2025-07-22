## LC 042 - Trapping Rain Water 🐈‍⬛

Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

🧩 Type: Two Pointers
🏷️ Tags: Array, Two Pointers, Greedy (idea)， Prefix Logic (prefix max)
🔗 URL: [Leetcode 042 - Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/description/)

---

### Understanding the Question 🔍

**Constraints / Edge Cases**:

- `n == height.length`
- `1 <= n <= 2 * 10^4`
- `0 <= height[i] <= 10^5`

**Test Cases**:

Example 1:

> Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
> Output: 6
> Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:

> Input: height = [4,2,0,3,2,5]
> Output: 9

---

### Approach & Implementation 🛠️

- Unlike `LC011 - Container with Most Water`, we must calculate the **trapped water at each index**, rather than just the max container area between two walls.
- **Pitfall**: I mistakenly used the current height as the max height when calculating the trapped water, which always resulted in 0 — because a height can't trap water against itself.
- ```js
  const length = Math.min(height[p1], height[p2]);
  let area = 0;

  if (height[p1] <= height[p2]) {
    const p = p1;
    p1++;
    area = length - height[p]; // ❗️❗️
  } // ...
  ```

- Therefore, we also need to keep track of the **max left height** and **max right height** (which I declared as `maxL` and `maxR`).
- As we move our pointers, we'll update `maxL` and `maxR` accordingly as well.

---

### Time & Space Complexity ⏳🌌

- **Time**: O(n)
- **Space**: O(1)

**_Explanation_**:
T: O(n) because as we are moving the pointers, we touch every element only once.
S: O(1) as there are no scaling DS used, just 4 static variable (2 for pointers, 2 to keep track of left and right max height).

---

### Summary & Reflection 💭

- Revisit. Previously followed along with instructor from **FAANG Interview** course.
- Had absolutely no idea how to approach this problem previously, but it is much clearer now.
- Still fell into a pit, but after re-reading notes that were taken previously (specially the part to keep track of max heights) was able to solve it.
- `Prefix Logic`: “从头开始积累的东西”。In this case, we keep track of the **maximum wall height so far** on each side to compute how much water can be trapped at each index.
- I chose to keep `length = Math.min(maxL, maxR)` outside the branches, even though it can be inlined — I found it made the code more readable and aligned with how I mentally visualize the current water level.

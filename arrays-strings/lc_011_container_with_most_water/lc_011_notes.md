## LC 011 - Container with Most Water 🐈‍⬛

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `ith` line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the _maximum amount of water a container can store_.

**Notice** that you may not slant the container.

🧩 Type: Two Pointers
🏷️ Tags: Array, Two Pointers, Greedy
🔗 URL: [Leetcode 011 - Container with Most Water}](https://leetcode.com/problems/container-with-most-water/description/)

---

### Understanding the Question 🔍

**Constraints / Edge Cases**:

- `n == height.length`
- `2 <= n <= 10^5`
- `0 <= height[i] <= 10^4`

**Test Cases**:

> Input: height = [1,8,6,2,5,4,8,3,7]
> Output: 49
> Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.

> Input: height = [1,1]
> Output: 1

---

### Approach & Implementation 🛠️

- Use two pointers to simulate the container — one at the beginning, one at the end.
- At each step, calculate the area formed by the two heights and the width between them.
- Since the shorter height determines the container's capacity, we move the pointer at the shorter height inward to _possibly_ find a taller wall and maximize area.

---

### Time & Space Complexity ⏳🌌

- **Time**: O(n)
- **Space**: O(1)

**_Explanation_**:
T: O(n) because as we are moving the pointers, we touch every element only once.
S: O(1) as there are no scaling DS used.

---

### Summary & Reflection 💭

- Revisit. Previously followed along with instructor from **FAANG Interview** course.
- Solving was much smoother this time as I recalled the key insight: **the shorter height affects the container's capacity**.
- I also recognized that this problem falls under the category of **greedy logic**.

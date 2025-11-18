## LC 021 - Merge Two Sorted Lists 🐈‍⬛

📅 11.18.25 | ⏳ 1hr+ | 🧩 Difficulty: Easy (Medium; Concept of using a dummy node is new for me) | 🏷️ Tags: Linked Lists
🔗 [Leetcode 021 - Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/description/)

---

### Understanding the Question 🔍

> Merge the two lists into one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

- No new lists should be created or copied; the solution should reuse existing nodes.

### Approach & Implementation 🛠️

- Create a `dummy` node to anchor the head of the merged list.
- Use another pointer (can name as `curr` or `tail`) to track the end of the merged list as it gets built.

---

### Time & Space Complexity ⏳🌌

- **Time**: `O(m + n)` -- One linear pass through both lists.
- **Space**: `O(1)` -- No extra space are used besides creating the dummy.

---

### Summary & Reflection 💭

- I spent more time than expected on this one, and eventually realized the unfamiliar part was the idea of a **dummy node**.
- Once that concept clicked, the rest of the problem was very straightforward.

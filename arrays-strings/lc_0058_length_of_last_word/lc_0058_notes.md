---
layout: default
---

[← Back to Home]({{ site.baseurl }}/)

## LC 058 - Length of Last Word 🐈‍⬛

Given a string `s` consisting of words and spaces, return _the length of the **last** word in the string_.

A **word** is a maximal substring consisting of non-space characters only.

🧩 Type: Reverse Scan
🏷️ Tags: String
🔗 URL: [Leetcode 058 - Length of Last Word](https://leetcode.com/problems/length-of-last-word/description/)

---

### Understanding the Question 🔍

**Constraints / Edge Cases**:

- `1 <= s.length <= 10^4`
- `s` consists of only English letters and spaces `' '`.
- There will be at least one word in `s`.

**Test Cases**:

Example 1:

> Input: s = "Hello World"
> Output: 5
> Explanation: The last word is "World" with length 5.

Example 2:

> Input: s = " fly me to the moon "
> Output: 4
> Explanation: The last word is "moon" with length 4.

Example 3:

> Input: s = "luffy is still joyboy"
> Output: 6
> Explanation: The last word is "joyboy" with length 6.

**My first interpretation (correct or incorrect)**:

- I thought it would make sense to start from the end of the string. Once we start counting the word length, the next time we encounter a space, we can return the count.
- I also considered the case where there are trailing spaces, e.g. `"  fly me to the moon "`, which confirmed the need to skip those.
- ✘ Initially thought of using a boolean flag, but quickly realized it wasn't necessary.

---

### Approach & Implementation 🛠️

- Start from the back of the string.
- A more functional approach:
- ```js
  let length = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') length++;
    else if (length > 0) break;
  }

  return length;
  ```

---

### Time & Space Complexity ⏳🌌

- **Time**: O(n)
- **Space**: O(1)

**_Explanation_**:
T: - T: Worst case `O(n)`, since we might have to scan the entire string. On average, it may finish sooner depending on the length of the trailing spaces and the last word.
S: No scaling DS.

---

### Summary & Reflection 💭

- This is a classic reverse scan problem, and an example of how thinking from the _end_ of the input can lead to cleaner logic.
- The problem statement's constraint ( _There will be at least one word in `s`_) allows us to avoid extra edge-case checks.
- A common approach might be using string methods such as `s.trim().split(' ')` and grabbing the last word, but this takes extra spce and time. (← And I actually never thought of this approach until I started working on the notes and looking back)

---
layout: default
---

[← Back to Home]({{ site.baseurl }}/)

## LC 387 - First Unique Character in a String 🐈‍⬛

Given a string `s`, find the **first** non-repeating character in it and return its index. If it **does not** exist, return `-1`.

🧩 LC Difficulty: `Easy`
🏷️ Tags: String, Hash Table
🔗 URL: [Leetcode 387 - First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/description/)

---

### Understanding the Question 🔍

**Constraints / Edge Cases**:

- `1 <= s.length <= 10^5`
- `s` consists of only lowercase English letters.

**Test Cases**:

Example 1:

> Input s = "leetcode"
> Output: 0
> Explanation:
> The character `'l'` at index 0 is the first character that does not occur at any other index.

Example 2:

> Input: s = "loveleetcode"
> Output: 2

Example 3:

> Input: s = "aabb"
> Output: -1

**My first interpretation (correct or incorrect)**:

- Use a hash table to store letter.
- ~~Check uniqueness while looping through the string. Return the index of the first non-repeating letter.~~ Misunderstood "repeating" as adjacent / consecutive.

---

### Approach & Implementation 🛠️

- Keeping initial thought / incorrect approach for future reference.
- ```js
  const firstNonRepeatingCharacter = function (s) {
    const hash = {};

    for (let i = 0; i < s.length; i++) {
      if (hash[s[i]] >= 0) hash[s[i]]++;
      else {
        if (hash[s[i - 1]] === 0) return i - 1;
        if (i === s.length - 1) return i;
        hash[s[i]] = 0;
      }
    }

    return -1;
  };
  ```

- Actually stored `[index, occurrence]` as the value after going back to fix the initial approach. Later noticed no need to store the index and just the occurrence.
- ```js
  const hash = {};

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) hash[s[i]][1]++;
    else hash[s[i]] = [i, 1];
  }

  let index = -1;

  for (const key in hash) {
    if (hash[key][1] === 1 && (hash[key][0] < index || index === -1))
      index = hash[key][0];
  }

  return index;
  ```

---

### Time & Space Complexity ⏳🌌

- **Time**: O(n)
- **Space**: O(26) → O(1)

**_Explanation_**:
T: O(n) to build hash, maximum O(n) to check for uniqueness, overall O(n).
S: Input can only be lowercase English letters, static and therefore O(1).

---

### Summary & Reflection 💭

- First LC problem where I went in without any category hints.
- I misunderstood "repeating" as "consecutive", which took me on a weird logic path at first.
- Eventually realized it's about **any character that appears only once**, not positioning.
- Also over-engineered the solution by storing both index & count, which wasn't needed.
- Reminder to future me: always slow down and double-check what the question is _actually_ asking!

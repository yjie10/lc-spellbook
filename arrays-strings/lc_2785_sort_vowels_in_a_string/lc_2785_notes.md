---
layout: default
---

[← Back to Home](/)

## LC 2785 - Sort Vowels in a String 🐈‍⬛

📅 09.11.25 | ⏳ 40min+ | 🧩 Difficulty: Medium (Easy) | 🏷️ Tags: String, Sorting, Daily Question
🔗 [Leetcode 2785 - Sort Vowels in a String](https://leetcode.com/problems/sort-vowels-in-a-string/description/)

---

### Understanding the Question 🔍

**My first interpretation (correct or incorrect)**:

- String manipulation question.
- My initial thought was to use a hash table. ← Yes and no: I _did_ use a hash table for vowels mapping (like dictionary), but it's not the best data structure for the actual solution.

---

### Approach & Implementation 🛠️

- Built a static hash table to identify vowels.
- ~~Create a hash table to record instance of vowels in string `s`.~~ → An array is more suitable for this task.
  - My assumption: index position doesn't matter -- we just need to record how many times each vowel appears, and fill them in when rebuilding the string.
  - Need initial scan to record vowels.
  - Strings are immutable, we need to use an array (`result`) to build the final output.
- Possible stuck points:
  - ~~The string includes both upper and lowercase letters → we probably need to store all 10 variants.~~
  - ~~And, the sorting...~~ ← Because I defaulted to using objects, and wasn't sure how to sort and access values efficiently.
- Initial (incomplete) attempt with using a hash table only:

  ```js
  const sortVowelsss = function (s) {
    const vowelHash = {
      A: 0,
      E: 0,
      I: 0,
      O: 0,
      U: 0,
      a: 0,
      e: 0,
      i: 0,
      o: 0,
      u: 0,
    };

    const result = []; // To build "t"

    // Initial scan
    for (let i = 0; i < s; i++) {
      const letter = s[i];
      if (vowelHash[letter] >= 0) vowelHash[letter]++;
    }

    // Building "t"
    for (let i = 0; i < s; i++) {
      const letter = s[i];
      if (vowelHash[letter] >= 1) {
        // Got stuck here -- didn't know how to efficiently sort and retrieve vowels from the hash table.
        // Even thought we might need to use a min heap (lol), but felt I was overcomplicating things.
        // Asked for a hint at this point.
      }

      return result.join('');
    }
  };
  ```

- GPT gave me a **non-coding hint**, suggesting I use an array instead to collect vowels.
- That's when I realized: this was what I originally intended to do.
- The final working solution is included in the JS file, along with a cleaner, more readable version using array methods.

---

### Time & Space Complexity ⏳🌌

- **Time**: `O(n log n)` - Two linear passes over the srting; `.sort()` takes `O(n log n)`
- **Space**: `O(n)` - `result` array `=== s.length`

---

### Summary & Reflection 💭

- The LC difficulty tag for this problem is `medium`, but if we are not trying to optimize the sorting it would be more of an `easy` in my opinion.
- I had no trouble designing the logic, but did spend 10+ minutes struggling with the implementation due to data structure choice.
- Overall, a straightforward problem once I pivoted to the right tools.

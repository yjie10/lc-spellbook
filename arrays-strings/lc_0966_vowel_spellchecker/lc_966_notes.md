---
layout: default
---

[← Back to Home](/)

## LC 966 - Vowel Spellchecker 🐈‍⬛

📅 09.15.25 | ⏳ 20min (with hints + right tools) | 🧩 Difficulty: Medium | 🏷️ Tags: Array, Hash Table, String, Daily Question
🔗 [Leetcode 966 - Vowel Spellchecker](https://leetcode.com/problems/vowel-spellchecker/description/)

---

### Understanding the Question 🔍

**My first interpretation (correct or incorrect)**:

- This involves Hash Table-based lookup logic.
- There are four possible scenarios:
  1. An exact match (case-sensitive)
  2. A match that's case-insensitive
  3. No match initially, but becomes a match after replacing vowels (← my stuck point -- I didn't know about "vowel blurring" as a concept)
  4. None of the above → return an empty string

---

### Approach & Implementation 🛠️

- My initial approach was brute-force. I tried to merge `case 1` and `case 2` into a single hash table, which led to unintentional behavior (thanks, edge case for catching the flaw in my logic).
- That brute-force version did technically work... but the logic was messy, so I'm not including it here.
- With the hint to _blur vowels_ (replacing them with a wildcard like `*`) and switching to the right tools (JS `Set`, `Map`), it took around 20min to write an optimal solution. Final version is in the JS file.

---

### Time & Space Complexity ⏳🌌

- **Time**: `O(w + q)` - linear scan over `wordlist` and `queries`
- **Space**: `O(n)` - three scalable hash tables → `O(3n)` → `O(n)`

---

### Summary & Reflection 💭

- Blurred hash matching is a new pattern to me, but I can see this becoming a go-to technique for similar fuzzy-lookup problems.
- I used to think problem-solving >>> knowing built-in data structures, but in reality it's more like:
  **problem-solving ≥ knowing when to use the right built-in data structures for cleaner, more optimal code.**
- I attempted this problem when I was already kind of exhausted, so my logic collapsed into true brute-force.
  Came back the next day with a clear head and AC'd in 20min (lol brain reset FTW).

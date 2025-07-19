## LC 844 - Backspace String Compare 🐈‍⬛

Given two string `s` and `t`, return `true` _if they are equal when both are typed into empty text editors_. `'#'` means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

🧩 Type: (e.g. Topological Sort, Heap for top K elements, Quickselect, etc.)
🏷️ Tags: String, Two Pointers
🔗 URL: [Leetcode 884. Backspace String Compare](<[link](https://leetcode.com/problems/backspace-string-compare/description/)>)

---

### Understanding the Question 🔍

**Constraints**:

- `1 <= s.length, t.length <= 200`
- `s` and `t` only contain lowercase letters and `#` characters.

**Test Cases**:

> Input: s = "ab#c", t = "ad#c"
> Output: true
> Explanation: Both s and t become "ac".

> Input: s = "ab##", t = "c#d#"
> Output: true
> Explanation: Both s and t become "".

> Input: s = "a#c", t = "b"
> Output: false
> Explanation: s becomes "c" while t becomes "b"

**First Interpretation**:

Straightforward, `#` means a backspace -- removal of a character.

---

### Approach 💡

- High-level plan / featured DS and/or algo (correct or incorrect)
- Why I picked this method (e.g. how is it better compared to brute-force?)
- [optional] Any comparison of different methods (e.g. dfs vs. bfs)

---

### Key Implementation Points 🛠️

- Special handling (e.g. reverse iteration)
- Debug issues I ran into / pitfalls etc.

---

### Time & Space Complexity ⏳🌌

- Time: O(?)
- Space: O(?)

Explanation: _Explanation._

---

### Summary & Reflection 💭

Problem is medium disguised as easy (optimal approach difficulty is medium for me).

- Short key points summary
- What did I learn?
- Keywords to lookout for if running into a similar problem in the future?
- Future me tips: _tips._

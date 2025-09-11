## LC 2327 - Number of People Aware of Secret 🐈‍⬛

📅 09.09.25 - 09.10.25 | ⏳ ~2-3hrs | 🧩 Difficulty: Medium | 🏷️ Tags: DP (State Transition | State Propagation)
🔗 [Leetcode 2327 - Number of People Aware of Secret](https://leetcode.com/problems/number-of-people-aware-of-a-secret/)

---

### Understanding the Question 🔍

**My first interpretation (correct or incorrect)**:

- I sensed this problem involved a sub-problem structure and "some kind of formula" -- it gave off strong DP vibes, but I didn't confirm it was DP until checking the tag.
- I was unfamiliar with the **State Propagation** style of DP at the time.

---

### Approach & Implementation 🛠️

- I received a hint to create an `informed` array, where `informed[i]` represents the number of people newly informed on day `i`.
- I did not track each person's individual delay or forget. Instead, I tracked counts by day.
- From the `informed` array I can determine:
  - Who will **forget** the secret after `forget` days;
  - Who will **start** spreading the secret after `delay` days.
- My implementation followed 4 key steps per day:
  1. People who forget the secret today can no longer spread it.
     Update `totalKnowing` and `spread`:
     `totalKnowing -= informed[i - forget]`
     `spread -= informed[i - forget]`
  2. People who **reach** their delay threshold start spreading:
     `spread += informed[i - delay]`
  3. The number of people newly informed today is equal to spread:
     `informed[i] = spread`
  4. Add today’s new informed people to the total:
     `totalKnowing += spread`

---

### Time & Space Complexity ⏳🌌

- **Time**: `O(n)` -- One pass through days `1...n`
- **Space**: `O(n)` -- One scaling array `informed` to keep track of newly informed counts per day

---

### Summary & Reflection 💭

- DP is not always about optimization (min / max).
  When a problem requires solving many interrelated sub-problems, there's a good chance it's a DP question, even if not obvious.
- Although I did spend a ridiculous amount of time on this problem, but that was under the condition that:
  1. I didn't initially recognize it as a DP problem;
  2. I had no template or formula to reference.
     I did receive some hints, but wrote 95% of the working code on my own.
- That said, if the whole `mod` issue hadn't existed, I probably would've saved ~40+ minutes...:D
- The "official" solution involves using either a **2D-array** or a **queue**. I wouldn't have came up with either of those approaches on my own -- I wouldn't even have known 2D DP was an option without reading the LC hint.
- My solution came from gradually modeling the information spread based on daily state changes, which is a more intuitive approach to me personally.
- Other similar **State Propagation** or **Time Evolution** DP problems:
  1. LC688 - Knight Probability in Chessboard
  2. LC935 - Knight Dialer
  3. LC576 - Out of Boundary Paths

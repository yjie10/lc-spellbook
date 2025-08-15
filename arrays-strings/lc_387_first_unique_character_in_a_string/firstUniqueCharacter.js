const firstNonRepeatingCharacter = function (s) {
  // edge case safe check if s.length can be < 1
  if (s.length === 0) return -1;
  if (s.length === 1) return 0;

  const hash = {};

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) hash[s[i]]++;
    else hash[s[i]] = 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === 1) return i;
  }

  return -1;
}

console.log(firstNonRepeatingCharacter("leetcode")); // Output: 0
console.log(firstNonRepeatingCharacter("aaabb")); // Output: -1
console.log(firstNonRepeatingCharacter("abacabad")); // Output: 3

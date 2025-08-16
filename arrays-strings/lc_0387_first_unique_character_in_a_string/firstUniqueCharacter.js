const firstNonRepeatingCharacter = function (s) {
  // Constraint: 1 <= s.length <= 10^5; 个人repo & 出于个人习惯我会保留这个check
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
console.log(firstNonRepeatingCharacter("loveleetcode")); // Output: 2
console.log(firstNonRepeatingCharacter("aabb")); // Output: -1

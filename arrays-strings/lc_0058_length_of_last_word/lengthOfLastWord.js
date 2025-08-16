const lengthOfLastWord = function (s) {
  // Constraint: There will be _at least one word_ in s
  if (s.length === 1) return 1;

  let length = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " " && length > 0) return length;
    else if (s[i] !== " ") length++;
  }

  return length;
}

console.log(lengthOfLastWord("Hello World")); // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4
console.log(lengthOfLastWord("luffy is still joyboy")); // Output: 6

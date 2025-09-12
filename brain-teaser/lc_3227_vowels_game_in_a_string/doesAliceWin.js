const doesAliceWin = function (s) {
  for (const ch of s) {
    if ('aeiou'.includes(ch)) return true;
  }

  return false;
}

console.log('Input: s = "leetcoder" | Output: true', doesAliceWin("leetcoder"));
console.log('Input: s = "bbcd" | Output: false"', doesAliceWin("bbcd"));

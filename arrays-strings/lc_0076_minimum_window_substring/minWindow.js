const minWindow = function (s, t) {
  // Early exit based on given constraint: 1 <= s.length, t.length <= 10^5
  if (s === t) return s;
  if (t.length > s.length) return "";

  const need = {};
  const currWindow = {};
  let validCount = 0;

  for (const ch of t) {
    if (!need[ch]) need[ch] = 1;
    else need[ch]++;
  }

  let start = 0;

  let minWindowStart = -1, minWindowEnd = -1;

  for (let end = 0; end < s.length; end++) {
    const ch = s[end];

    if (need[ch]) {
      // update the currWindow
      currWindow[ch] = (currWindow[ch] || 0) + 1;
      if (currWindow[ch] === need[ch]) validCount++;
    }

    const requiredCount = Object.keys(need).length;

    // if we have a valid window, we can try to shrink the window
    while (validCount === requiredCount) {
      // update on first valid window & shorter length window afterwards
      if ((minWindowStart === -1) || (end - start < minWindowEnd - minWindowStart && end - start >= 0)) {
        minWindowStart = start;
        minWindowEnd = end;
      }

      // I actually named this variable as 'abandon' at first to help with putting my logic together 😂 if you know this neta you know
      const needCh = s[start];
      if (need[needCh]) {
        if (currWindow[needCh] === need[needCh]) validCount--;
        currWindow[needCh]--;
      }
      start++;
    }
  }

  return minWindowStart === -1 ? "" : s.substring(minWindowStart, minWindowEnd + 1);
}

console.log('Output: "BANC"', minWindow("ADOBECODEBANC", "ABC"));
console.log('Output: "a"', minWindow("a", "a"));
console.log('Output: ""', minWindow("a", "aa"));
console.log('Output: "a"', minWindow("ab", "a"));
console.log('Output: "b"', minWindow("ab", "b"));
console.log('Output: "ab"', minWindow("abc", "ab"));
console.log('Output: "ba"', minWindow("bba", "ba"));

/* By using ASCII array for a faster lookup */

const minWindowArr = function (s, t) {
  // Early exit based on given constraint: 1 <= s.length, t.length <= 10^5
  if (s === t) return s;
  if (t.length > s.length) return "";

  const need = Array(128).fill(0);
  const window = Array(128).fill(0);
  let requiredCount = 0, validCount = 0;

  // initialize
  for (const ch of t) {
    const code = ch.charCodeAt(0);
    if (need[code] === 0) requiredCount++;
    need[code]++;
  }

  let start = 0;

  let minWindowStart = -1, minWindowEnd = -1;

  for (let end = 0; end < s.length; end++) {
    const chCode = s.charCodeAt(end);
    window[chCode]++;

    if (window[chCode] === need[chCode]) validCount++;

    while (validCount === requiredCount) {
      if ((minWindowStart === -1) || (end - start >= 0 && end - start < minWindowEnd - minWindowStart)) {
        minWindowStart = start;
        minWindowEnd = end;
      }

      const startCode = s.charCodeAt(start);
      if (need[startCode]) {
        if (window[startCode] === need[startCode]) validCount--;
        window[startCode]--;
      }
      start++;
    }
  }

  return minWindowStart === -1 ? "" : s.substring(minWindowStart, minWindowEnd + 1);
}

console.log('Output: "BANC"', minWindowArr("ADOBECODEBANC", "ABC"));
console.log('Output: "a"', minWindowArr("a", "a"));
console.log('Output: ""', minWindowArr("a", "aa"));
console.log('Output: "a"', minWindowArr("ab", "a"));
console.log('Output: "b"', minWindowArr("ab", "b"));
console.log('Output: "ab"', minWindowArr("abc", "ab"));
console.log('Output: "ba"', minWindowArr("bba", "ba"));

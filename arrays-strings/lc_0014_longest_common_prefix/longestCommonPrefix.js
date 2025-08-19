const longestCommonPrefixBruteForce = function (strs) {
  // early exit
  if (strs[0].length === 0) return "";

  let prefix = strs[0], temp = [];

  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < strs[i].length; j++) {
      if (prefix[j] === strs[i][j]) temp.push(prefix[j]);
      else break;
    }
    prefix = temp.join("");
    temp = [];
  }

  return prefix;
}

const longestCommonPrefixOptimal = function (strs) {
  // early exit
  if (strs.length == 1) return strs[0];

  let minLength = strs[0].length;
  for (let i = 0; i < strs.length; i++) {
    minLength = Math.min(minLength, strs[i].length);
  }

  if (minLength === 0) return "";

  let prefix = "";

  for (let col = 0; col < minLength; col++) {
    const letter = strs[0][col];
    for (let row = 0; row < strs.length; row++) {
      if (strs[row][col] !== letter) return prefix;
    }
    prefix += letter;
  }

  return prefix;
}

// console.log(longestCommonPrefixBruteForce(["flower", "flow", "flight"])); // Output: "fl"
// console.log(longestCommonPrefixBruteForce(["dog", "racecar", "car"])); // Output: ""

console.log(longestCommonPrefixOptimal(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefixOptimal(["dog", "racecar", "car"])); // Output: ""
console.log(longestCommonPrefixOptimal(["dog"])); // Output: "dog"

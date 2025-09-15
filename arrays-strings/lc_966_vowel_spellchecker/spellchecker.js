const spellchecker = function (wordlist, queries) {
  const exactSet = new Set();
  const lowerMap = new Map();
  const blurredMap = new Map();

  for (const word of wordlist) {
    exactSet.add(word);

    const lowerWord = word.toLowerCase();
    const blurredWord = lowerWord.replace(/[aeiou]/g, "*");

    if (!lowerMap.has(lowerWord)) lowerMap.set(lowerWord, word);
    if (!blurredMap.has(blurredWord)) blurredMap.set(blurredWord, word);
  }

  const result = [];

  for (const query of queries) {
    const lowerQuery = query.toLowerCase();
    const blurredQuery = lowerQuery.replace(/[aeiou]/g, "*");

    // exact match
    if (exactSet.has(query)) result.push(query);

    // match (case-insensitive)
    else if (lowerMap.has(lowerQuery)) result.push(lowerMap.get(lowerQuery));

    // no match, check blurred
    else if (blurredMap.has(blurredQuery)) result.push(blurredMap.get(blurredQuery));

    // no match
    else result.push("");
  }

  return result;
}

console.log('Output: ["yellow"]', spellchecker(["yellow"], ["YellOw"]));
console.log('Output: ["kite","KiTe","KiTe","Hare","hare","","","KiTe","","KiTe"]', spellchecker(["KiTe", "kite", "hare", "Hare"], ["kite", "Kite", "KiTe", "Hare", "HARE", "Hear", "hear", "keti", "keet", "keto"]));

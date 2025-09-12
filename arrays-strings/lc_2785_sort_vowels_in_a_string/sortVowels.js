// Initial attempt
const sortVowels = function (s) {
  // 1 <= s.length <= 10^5
  if (s.length === 1) return s;

  const vowelsHash = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true
  }

  const vowels = [], result = [];

  // Initial scan to collect the vowels
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (vowelsHash[letter.toLowerCase()]) vowels.push(letter);
  }

  // Sort vowels and reverse (for using .pop())
  vowels.sort().reverse();

  // Build result array
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    result[i] = vowelsHash[letter.toLowerCase()] ? vowels.pop() : letter;
  }

  return result.join('');
}

console.log('s = "lEetcOde" | Output: "lEOtcede"', sortVowels("lEetcOde"));
console.log('s = "lYmpH" | Output: "lYmpH"', sortVowels("lYmpH"));


// Shorter and more readable version using array methods
const sortVowelsArrMethods = function (s) {
  if (s.length === 1) return s;

  const isVowel = (ch) => 'aeiouAEIOU'.includes(ch);
  const arr = s.split('');
  const vowels = arr.filter(isVowel).sort();

  let vi = 0; // vowel index
  for (let i = 0; i < arr.length; i++) {
    if (isVowel(arr[i])) {
      arr[i] = vowels[vi];
      vi++;
    }
  }

  return arr.join('');
}

console.log('s = "lEetcOde" | Output: "lEOtcede"', sortVowelsArrMethods("lEetcOde"));
console.log('s = "lYmpH" | Output: "lYmpH"', sortVowelsArrMethods("lYmpH"));

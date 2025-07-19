/* Brute-force */
const backspaceCompareBruteForce = function (s, t) {
  function type(str) {
    const result = [];

    for (let i = 0; i < str.length; i++) {
      if (str[i] === '#') result.pop();
      else result.push(str[i]);
    }

    return result.join('');
  }

  const typedS = type(s), typedT = type(t);

  return typedS === typedT;
}

/* Optimal */
const backspaceCompareOptimal = function (s, t) {
  let sPointer = s.length - 1, tPointer = t.length - 1;

  while (sPointer >= 0 || tPointer >= 0) {
    if (s[sPointer] === '#' || t[tPointer] === '#') {
      if (s[sPointer] === '#') {
        // 处理并move to next 字符 to compare
        let backspace = 1;
        sPointer--;

        while (backspace > 0 && sPointer >= 0) {
          if (s[sPointer] === '#') sPointer--, backspace++;
          else sPointer--, backspace--;
        }
      }

      if (t[tPointer] === '#') {
        let backspace = 1;
        tPointer--;

        while (backspace > 0 && tPointer >= 0) {
          if (t[tPointer] === '#') tPointer--, backspace++;
          else tPointer--, backspace--;
        }
      }
    }
    else {
      if (s[sPointer] !== t[tPointer]) return false;
      sPointer--, tPointer--;
    }
  }

  return true;
}

console.log(backspaceCompareOptimal("ab#c", "ad#c")); // true
console.log(backspaceCompareOptimal("a#c", "b")); // false
console.log(backspaceCompareOptimal("bxj##tw", "bxo#j##tw")); // true
console.log(backspaceCompareOptimal("du###vu##v#fbtu", "du###vu##v##fbtu")); // true
console.log(backspaceCompareOptimal("xywrrmp", "xywrrmu#p")); // true
console.log(backspaceCompareOptimal("bxj##tw", "bxj###tw")); // false

// console.log(backspaceCompareBruteForce("ab#c", "ad#c"));
// console.log(backspaceCompareBruteForce("ab##", "c#d#"));
// console.log(backspaceCompareBruteForce("a#c", "b"));
// console.log(backspaceCompareBruteForce("bxj##tw", "bxj###tw")); 

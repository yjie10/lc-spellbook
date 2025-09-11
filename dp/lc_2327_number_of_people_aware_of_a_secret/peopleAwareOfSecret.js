const peopleAwareOfSecret = function (n, delay, forget) {
  const informed = [1];
  let totalKnowing = 1, spread = 0;
  const mod = 1e9 + 7;

  for (let i = delay; i < n; i++) {
    // forget someone
    if (i - forget >= 0) {
      totalKnowing -= informed[i - forget] || 0;
      // those who forgot the secret can't share
      spread -= informed[i - forget] || 0;
      spread = (spread + mod) % mod;
    }

    // gather spreaders
    if (i - delay >= 0) {
      spread += informed[i - delay] || 0;
      spread = (spread + mod) % mod;
    }

    // update informed[i]
    informed[i] = spread;

    // update totalKnowing
    totalKnowing += spread;
  }

  return totalKnowing % mod;
}

console.log("Input: n = 6, delay = 2, forget = 4; Output expected: 5", peopleAwareOfSecret(6, 2, 4));
console.log("Input: n = 4, delay = 1, forget = 3; Output expected: 6", peopleAwareOfSecret(4, 1, 3));
console.log("Input: n = 4, delay = 1, forget = 4; Output expected: 8", peopleAwareOfSecret(4, 1, 4));
console.log("Input: n = 684, delay = 18, forget = 496; Output expected: 653668527", peopleAwareOfSecret(684, 18, 496));

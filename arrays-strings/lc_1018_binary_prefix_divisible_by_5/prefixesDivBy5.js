const prefixesDivBy5 = function (nums) {
  const numsDivByFive = [nums[0] === 0];
  let decimal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === 1) decimal = decimal * 2 + 1;
    else decimal = decimal * 2;

    numsDivByFive.push(decimal % 5 === 0);

    // NEED: To prevent overflow
    decimal = decimal % 5;
  }

  return numsDivByFive;
}

/* Example Tests */
const tests = [
  { nums: [0, 1, 1], expected: [true, false, false] },
  { nums: [1, 1, 1], expected: [false, false, false] },
  { nums: [1, 1, 0, 0, 0, 1, 0, 0, 1], expected: [false, false, false, false, false, false, false, false, false] },
  { nums: [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1], expected: [false, false, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, false, false, false] },
];

for (let t of tests) {
  const nums = t.nums;
  const result = prefixesDivBy5(nums);

  console.log(
    JSON.stringify(result) === JSON.stringify(t.expected)
      ? "✔ PASS"
      : "❌ FAIL",
    "input:", t.nums,
    "expected:", t.expected,
    "got:", result
  );
}

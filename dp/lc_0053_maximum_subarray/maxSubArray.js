const maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];

  let currSum = nums[0], maxSum = nums[0];
  // Top-down DP (with memo array)
  /*
    const sums = [nums[0]];
    for (...) {
      sums[i] = Math.max(sums[i - 1] + nums[i], nums[i]);
    }
  */

  // Bottom-up: Kadane's Algorithm (space optimized)
  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(currSum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
}

console.log("Expcted output: 6 | Output: ", maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log("Expcted output: 1 | Output: ", maxSubArray([1]));
console.log("Expcted output: 23 | Output: ", maxSubArray([5, 4, -1, 7, 8]));

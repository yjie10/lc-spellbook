const findMaxAverage = function (nums, k) {
  if (nums.length === 1) return nums[0];

  let currSum = 0;

  for (let i = 0; i < k; i++) {
    currSum += nums[i];
  }

  if (nums.length === k) return currSum / k;

  // Else continue
  let maxSum = currSum;

  for (let i = k; i < nums.length; i++) {
    currSum = currSum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum / k;
}

console.log(findMaxAverage([0, 1, 1, 3, 3], 4));
console.log(findMaxAverage([4, 0, 4, 3, 3], 5));

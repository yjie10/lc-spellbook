/* Initial solution w/ 2 loops; maybe a bit (just a bit) more intuitive to those new to sliding window */
const findMaxAverage = function (nums, k) {
  if (nums.length === 1) return nums[0];

  let currSum = 0;

  // find sum of initial window
  for (let i = 0; i < k; i++) {
    currSum += nums[i];
  }

  if (k === nums.length) return currSum / k;

  // Else continue
  let maxSum = currSum;

  for (let i = k; i < nums.length; i++) {
    currSum = currSum - nums[i - k] + nums[i];

    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum / k;
};

/* Came back after LC76 -> One loop */
const findMaxAverageTwo = function (nums, k) {
  if (nums.length === 1) return nums[0];

  let currSum = 0, maxSum = 0;

  for (let i = 0; i < nums.length; i++) {
    // initial k-size window
    if (i < k) currSum += nums[i];
    else {
      currSum = currSum - nums[i - k] + nums[i];
      maxSum = Math.max(maxSum, currSum);
    }
  }

  return maxSum / k;
}

// console.log(findMaxAverage([0, 1, 1, 3, 3], 4));
// console.log(findMaxAverage([4, 0, 4, 3, 3], 5));
console.log('Output: 12.75000', findMaxAverageTwo([1, 12, -5, -6, 50, 3], 4))

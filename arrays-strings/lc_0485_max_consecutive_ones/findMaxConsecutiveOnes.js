const findMaxConsecutiveOnes = function (nums) {
  // LC Constraints: 1 <= nums.length <= 10^5; 个人repo & 出于个人习惯我会保留这个check
  if (nums.length === 0) return 0;

  let count = 0, max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) count++;
    else count = 0;
    max = Math.max(max, count);
  }

  return max;
}

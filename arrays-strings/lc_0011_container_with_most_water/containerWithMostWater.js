const containerWithMostWater = function (height) {
  // n == height.length; 2 <= n <= 10^5; 个人repo & 出于个人习惯我会保留这个check
  if (height.length <= 1) return 0;

  let p1 = 0, p2 = height.length - 1, maxArea = 0;

  while (p1 !== p2) {
    /*
    let length = 0, width = p2 - p1;

    if (height[p1] > height[p2]) {
      length = height[p2];
      p2--;
    } else {
      length = height[p1];
      p1++;
    }
    */

    const length = Math.min(height[p1], height[p2]), width = p2 - p1;

    // Move the pointer at the shorter height
    if (height[p1] <= height[p2]) p1++;
    else p2--;

    maxArea = Math.max(maxArea, length * width);
  }

  return maxArea;
}

console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
console.log(containerWithMostWater([1, 1])); // Output: 1

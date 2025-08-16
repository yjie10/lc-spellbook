const trappingRainWater = function (height) {
  if (height.length <= 1) return 0;

  let p1 = 0, p2 = height.length - 1, maxL = height[p1], maxR = height[p2], totalArea = 0;

  while (p1 !== p2) {
    const length = Math.min(maxL, maxR);

    // Calculate the area and move left pointer if left "wall" is shorter, and right pointer if "right" wall if shorter
    if (maxL <= maxR) {
      const area = length - height[p1];
      if (area > 0) totalArea += area;
      p1++;
      maxL = Math.max(maxL, height[p1]);
    } else {
      const area = length - height[p2];
      if (area > 0) totalArea += area;
      p2--;
      maxR = Math.max(maxR, height[p2]);
    }
  }

  return totalArea;
}

console.log(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
console.log(trappingRainWater([4, 2, 0, 3, 2, 5])); // Output: 9

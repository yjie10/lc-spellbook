const findJudge = function (n, trust) {
  const indegree = Array(n + 1).fill(0), outdegree = Array(n + 1).fill(0);

  for (const [a, b] of trust) {
    indegree[b]++;
    outdegree[a]++;
  }

  for (let i = 1; i <= n; i++) {
    if (indegree[i] === n - 1 && outdegree[i] === 0) return i;
  }

  return -1;
}

console.log(findJudge(2, [[1, 2]])); // Output: 2
console.log(findJudge(3, [[1, 3], [2, 3]])); // Output: 3
console.log(findJudge(3, [[1, 3], [2, 3], [3, 1]])); // Output: -1

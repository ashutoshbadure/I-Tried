function listSquared(m, n) {
  let result = [];
  for (let i = m; i <= n; i++) {
    let sumOfSquaredDivisors = 0;
    for (let j = 1; j <= i; j++) {
      i % j == 0 ? (sumOfSquaredDivisors = sumOfSquaredDivisors + j * j) : null;
    }

    Math.sqrt(sumOfSquaredDivisors) - Math.floor(Math.sqrt(sumOfSquaredDivisors)) == 0 ? result.push([i, sumOfSquaredDivisors]) : null;
  }
  return result;
}

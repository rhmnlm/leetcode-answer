function combinations2(n) {
    if (n < 2) return 0;
    // C(n, 2) = n * (n - 1) / 2
    return n * (n - 1) / 2;
}

/**
 * @param {number[][]} points
 * @return {number}
 */
var countTrapezoids = function(points) {
    // 1. Group points by Y-axis
    const yAxisMap = points.reduce((acc, point) => {
        // Assuming 'point' is the full [x, y] array, adjust if needed
        const y = point[1]; // Use point[1] if input format is [x, y]
        if (!acc[y]) {
            acc[y] = 0;
        }
        acc[y]++;
        return acc;
    }, {});

    // 2. Calculate C(count, 2) for each eligible y-level
    const combinationCounts = Object.values(yAxisMap)
        .filter(count => count >= 2)
        .map(count => combinations2(count));

    // If fewer than 2 eligible Y-levels exist, return 0
    if (combinationCounts.length < 2) {
        return 0;
    }
    
    // Define the modulo value for large results (as specified in constraints)
    const MOD = 1e9 + 7;

    // 3. Apply the O(N) optimized formula using a single pass
    let sumOfCi = 0;
    let sumOfCiSquared = 0;

    for (const Ci of combinationCounts) {
        sumOfCi = (sumOfCi + Ci) % MOD;
        // Need to be careful with intermediate multiplications before modulo
        sumOfCiSquared = (sumOfCiSquared + (Ci * Ci) % MOD) % MOD;
    }

    // Calculate (Sum(Ci)^2 - Sum(Ci^2)) / 2
    // Need to handle modulo for division by 2:
    // To divide by 2 in modular arithmetic, we multiply by the modular inverse of 2.
    // The modular inverse of 2 mod (1e9 + 7) is 500000004.
    const sumSquaredTerm = (sumOfCi * sumOfCi) % MOD;
    let numerator = (sumSquaredTerm - sumOfCiSquared + MOD) % MOD; // Add MOD before modulo to ensure positivity

    // Multiply by modular inverse of 2
    const result = (numerator * 500000004) % MOD;

    return result;
};
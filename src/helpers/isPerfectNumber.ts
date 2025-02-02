export const isPerfectNumber = (num: number): boolean => {
  // Handle edge cases
  if (num <= 1) return false;

  let sum = 1; // 1 is always a proper divisor

  // Find divisors up to square root for efficiency
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
      // If i is not the square root, add the pair divisor
      if (i !== num / i) {
        sum += num / i;
      }
    }
  }

  if (sum === num) {
    return true;
  }
  return false;
};

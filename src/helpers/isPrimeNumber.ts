export const isPrimeNumber = (num: number): boolean => {
  // Handle edge cases
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  // Check odd numbers up to square root
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

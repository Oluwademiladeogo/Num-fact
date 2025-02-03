export const isArmstrong = (num: number): boolean => {
  const digits = Math.abs(num).toString().split("");
  const power = digits.length;
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(parseInt(digit), power),
    0
  );
  return sum === Math.abs(num);
};

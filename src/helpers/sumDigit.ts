export const sumDigit = (num: number) => {
  let sum = 0;
  const numStr = num.toString();
  for (let i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i]);
  }
  return sum;
};

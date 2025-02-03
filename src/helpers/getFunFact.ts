import { isArmstrong } from "./isArmstrong";

export const getFunFact = async (num: number) => {
  try {
    const properties: string[] = [];

    // Check Armstrong
    if (isArmstrong(num)) {
      properties.push("armstrong");
    }

    // Check odd/even
    properties.push(num % 2 === 0 ? "even" : "odd");

    const api = `http://numbersapi.com/${Math.abs(num)}/math`;
    const response = await fetch(api);
    const data = await response.text();

    return { data, properties };
  } catch (e) {
    return "No Fun Fact Available";
  }
};

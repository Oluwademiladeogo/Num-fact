import { Request, Response, Router } from "express";
import { isPrimeNumber } from "../helpers/isPrimeNumber";
import { isPerfectNumber } from "../helpers/isPerfectNumber";
import { getFunFact } from "../helpers/getFunFact";
import { sumDigit } from "../helpers/sumDigit";

export const numberController = async (req: Request, res: Response) => {
  try {
    const rawInput: any = req.query.number || "";

    // Parse as integer and validate
    const num_input = parseInt(rawInput, 10);

    if (isNaN(num_input) || !Number.isInteger(num_input)) {
      return res.status(400).json({
        number: rawInput,
        error: true,
      });
    }

    // Process the validated number
    const isPrime: boolean = isPrimeNumber(num_input);
    const isPerfect: boolean = isPerfectNumber(num_input);
    const funFactResponse = await getFunFact(num_input);

    const funFact =
      typeof funFactResponse === "string"
        ? funFactResponse
        : funFactResponse.data;

    const funFactProperties =
      typeof funFactResponse === "string" ? [] : funFactResponse.properties;

    return res.status(200).json({
      number: num_input,
      is_prime: isPrime,
      is_perfect: isPerfect,
      properties: funFactProperties,
      digit_sum: sumDigit(num_input),
      fun_fact: funFact,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: "Internal server error",
    });
  }
};

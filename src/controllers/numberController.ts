import { Request, Response, Router } from "express";
import { isPrimeNumber } from "../helpers/isPrimeNumber";
import { isPerfectNumber } from "../helpers/isPerfectNumber";
import { getFunFact } from "../helpers/getFunFact";
import { sumDigit } from "../helpers/sumDigit";
const app = Router();
export const numberController = async (req: Request, res: Response) => {
  const num_input: any = req.query.number;
  if (isNaN(num_input)) {
    res.status(400).json({
      number: num_input,
      error: true,
    });
    return;
  }
  const isPrime: boolean = isPrimeNumber(num_input);
  const isPerfect: boolean = isPerfectNumber(num_input);
  const funFactResponse = await getFunFact(num_input);
  const funFact =
    typeof funFactResponse === "string"
      ? funFactResponse
      : funFactResponse.data;
  const funFactProperties =
    typeof funFactResponse === "string" ? [] : funFactResponse.properties;
  res.status(200).json({
    number: num_input,
    is_prime: isPrime,
    is_perfect: isPerfect,
    properties: funFactProperties,
    digit_sum: sumDigit(num_input),
    fun_fact: funFact,
  });
};

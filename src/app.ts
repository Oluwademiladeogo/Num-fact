import { Express } from "express";
import numberRouter from "./routers/numberRouter";
export const RouteHandler = async (app: Express) => {
  app.use("/api/classify-number", numberRouter);
};

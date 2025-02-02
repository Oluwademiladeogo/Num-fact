import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { RouteHandler } from "./src/app";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
config(); // Load environment variables
RouteHandler(app);
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

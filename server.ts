import express from "express";
import cors from "cors";
import { config } from "dotenv";
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
config();   // Load environment variables
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
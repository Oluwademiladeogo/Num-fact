import { Router } from "express";
import { numberController } from "../controllers/numberController";
const router = Router();
router.get("/", numberController);
export default router;

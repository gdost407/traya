import express from "express";
import { checkUser, verifyUser } from "../controllers/authController.js";

const router = express.Router();

router.get("/check-user", checkUser);
router.post("/auth", verifyUser);

export default router;

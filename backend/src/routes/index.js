const router = express.Router();
import express from "express";
import authRoutes from "./authRoutes.js";

router.use("/auth", authRoutes);

export default router;

const router = express.Router();
import express from "express";
import authRoutes from "./authRoutes.js";
import assignmentRoutes from "./assignmentRoutes.js";

router.use("/auth", authRoutes);
router.use("/assignments", assignmentRoutes);

export default router;

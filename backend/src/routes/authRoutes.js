import express from "express";
const Router = express.Router();
import { sendOtp, checkPhone, verifyOtp, saveProfile } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";


Router.route("/send-otp").post(sendOtp);
Router.route("/check-phone").post(checkPhone);
Router.route("/verify-otp").post(verifyOtp);
Router.route("/profile").post(authMiddleware, saveProfile);

export default Router;

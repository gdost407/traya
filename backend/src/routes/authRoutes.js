import express from "express";
import { customerSendOtpCtrl, customerVerifyOtpCtrl, userExistCheck } from "../controllers/authController.js";
const Router = express.Router();

// Twilio
Router.route("/Twilio/send-otp").post(customerSendOtpCtrl);
Router.route("/Twilio/verify-otp").post(customerVerifyOtpCtrl);
// Mobile Auth
Router.route("/User/Check/:phone").get(userExistCheck);

export default Router;

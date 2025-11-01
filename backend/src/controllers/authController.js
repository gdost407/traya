// src/controllers/authController.js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import axios from "axios";
import User from "../models/User.js";
import { successResponse, badRequest, unauthorized, notFound, internalError } from "../utils/responseHandler.js";

dotenv.config();
const MSG91_AUTH_KEY = process.env.MSG91_AUTH_KEY;
const JWT_SECRET = process.env.JWT_SECRET;

export const sendOtp = async (req, res) => {
  const { phone } = req.body;
  if (!phone) return badRequest(res, "Phone number is required");


  let user = await User.findOne({ phone });
  if (!user) {
    user = new User({ phone });
    await user.save();
  }

  // Generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  user.otp = otp;
  user.otpExpires = Date.now() + 5 * 60 * 1000; // 5 minutes validity
  await user.save();

  try {
    // Adjust MSG91 API parameters as per your account
    await axios.post(
      "https://control.msg91.com/api/v5/flow/",
      {
        template_id: "YOUR_CONTENT_TEMPLATE_ID",
        sender: "YOUR_SENDER_ID",
        mobiles: phone,
        VAR1: otp,
      },
      {
        headers: { Authkey: MSG91_AUTH_KEY },
      }
    );
    
    return successResponse(res, {}, "OTP sent successfully");
  } catch (err) {
    return internalError(res, "Failed to send OTP");
  }
};

export const checkPhone = async (req, res) => {
  const { phone } = req.body;
  const user = await User.findOne({ phone });
  if (user && user.name) {
    return successResponse(res, {}, "Phone number is available");
  } else {
    return notFound(res, "Phone number not exists");
  }
};

export const verifyOtp = async (req, res) => {
  const { phone, otp } = req.body;
  if (!phone || !otp) return badRequest(res, "Phone and OTP required");

  const user = await User.findOne({ phone });
  if (!user) return notFound(res, "User not found");

  if (user.otp !== otp || user.otpExpires < Date.now()) {
    return unauthorized(res, "Invalid or expired OTP");
  }

  // Generate token and respond
  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "5d" });
  return successResponse(res, { token, user }, "OTP verified successfully");
};

export const saveProfile = async (req, res) => {
  const { phone, name, age, gender } = req.body;
  const user = await User.findOneAndUpdate(
    { phone },
    { name, age, gender },
    { new: true }
  );
  if (!user) return notFound(res, "User not found");
  return successResponse(res, { user }, "Profile saved successfully");
};

export default { sendOtp, checkPhone, verifyOtp, saveProfile };
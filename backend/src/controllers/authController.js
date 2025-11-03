// src/controllers/authController.js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import axios from "axios";
import User from "../models/User.js";
import { successResponse, badRequest, unauthorized, notFound, internalError } from "../utils/responseHandler.js";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

export const sendOtp = async (req, res) => {
  const { phone } = req.body;
  if (!phone) return badRequest(res, "Phone number is required");

  try {
    const response = await axios.get(
      `https://2factor.in/API/V1/${process.env.TWOFACTOR_KEY}/SMS/${phone}/AUTOGEN`
    );

    if (response.data.Status !== "Success") {
      return internalError(res, "Failed to send OTP");
    }

    return successResponse(res, { data: response.data.Details }, "OTP sent successfully");
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
  const { callId, otp } = req.body;
  if (!callId || !otp) return badRequest(res, "call ID and OTP are required");

  try {
    const response = await axios.get(
      `https://2factor.in/API/V1/${process.env.TWOFACTOR_KEY}/SMS/VERIFY/${callId}/${otp}`
    );

    if (response.data.Details === "OTP Matched") {
      // OTP verified successfully
      return successResponse(res, { details: response.data.Details }, "OTP verified successfully");
    } else {
      return badRequest(res, `OTP verification failed: ${response.data.Details}`);
    }
  } catch (err) {
    return internalError(res, err);
  }
};

export const saveProfile = async (req, res) => {
  console.log(req.body);
  const { phone, name, age, gender } = req.body;
  const user = await User.create({ phone, name, age, gender });
  
  if (!user) return internalError(res, "Failed to create user");
  return successResponse(res, { user }, "Signup successfully");
};

export default { sendOtp, checkPhone, verifyOtp, saveProfile };
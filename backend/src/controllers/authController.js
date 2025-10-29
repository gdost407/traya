// src/controllers/authController.js
import Twilio  from "twilio";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const client = new Twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export const customerSendOtpCtrl = async (req, res) => {
  console.log("Request body:", req.body);
  try {
    let { contact_no } = req.body;
    if (!contact_no) return res.status(400).json({ status: false, message: "Contact number is required" });
    if (!contact_no.startsWith("+91")) contact_no = `+91${contact_no}`;
    console.log("Formatted contact number:", contact_no);
    const verification = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SID)
      .verifications.create({
        to: contact_no,
        channel: "sms",
      });
    res.status(200).json({
      status: true,
      message: "OTP sent successfully",
      sid: verification.sid,
    });
  } catch (err) {
    console.error("Send OTP error:", err);
    res.status(500).json({
      status: false,
      message: "Failed to send OTP",
      error: err.message,
    });
  }
};

export const customerVerifyOtpCtrl = async (req, res) => {
  try {
    const { contact_no, otp } = req.body;
    if (!contact_no || !otp) {
      return res.status(400).json({
        status: false,
        message: "Mobile number and OTP required",
      });
    }
    const verification_check = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SID)
      .verificationChecks.create({
        to: contact_no.startsWith("+") ? contact_no : `+91${contact_no}`,
        code: otp,
      });

    if (verification_check.status !== "approved") {
      return res.status(401).json({
        status: false,
        message: "Invalid or expired OTP",
      });
    }

    const customer = await Customer.findOne({ contact_no });
    if (!customer) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    const token = jwt.sign(
      {
        id: customer._id,
        contact_no: customer.contact_no,
        cafe: customer.cafe,
        name: customer.name,
      },
      process.env.CUSTOMER_SECRET_KEY || "customer_secret",
      { expiresIn: process.env.JWT_EXPIRY || "18h" }
    );

    res.cookie("customer_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 1000 * 60 * 60 * 18,
    });

    res.status(200).json({
      status: true,
      message: "Customer login successful",
      token,
      customer: {
        _id: customer._id,
        name: customer.name,
        contact_no: customer.contact_no,
        cafe: customer.cafe,
      },
    });
  } catch (err) {
    console.error("Verify OTP error:", err);
    res.status(500).json({
      status: false,
      message: "OTP verification failed",
      error: err.message,
    });
  }
};

export const userExistCheck = async (req, res) => {
  try {
    const { phone } = req.params;

    if (!phone) {
      return res.status(400).json({
        status: false,
        message: "Phone number is required",
      });
    }

    const user = await User.findOne({ phone });

    if (user) {
      return res.status(200).json({
        status: true,
        exists: true,
        message: "User already exists",
        user: {
          _id: user._id,
          name: user.name,
          phone: user.phone,
        },
      });
    }

    return res.status(200).json({
      status: true,
      exists: false,
      message: "User not found",
    });
  } catch (error) {
    console.error("Error checking user:", error);
    res.status(500).json({
      status: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

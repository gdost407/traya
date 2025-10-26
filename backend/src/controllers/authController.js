import admin from "firebase-admin";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { successResponse, errorResponse } from "../utils/responseHandler.js";

// Firebase Admin Initialization
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (!admin.apps.length) {
  const serviceAccountPath =
    process.env.FIREBASE_SERVICE_ACCOUNT_PATH || path.join(__dirname, "../../serviceAccountKey.json");

  if (!fs.existsSync(serviceAccountPath)) {
    console.error("❌ Firebase service account file missing!");
  } else {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccountPath),
    });
    console.log("✅ Firebase Admin initialized");
  }
}

export const checkUser = async (req, res) => {
  try {
    const { phone } = req.query;
    if (!phone) return errorResponse(res, "Phone number is required");

    const user = await User.findOne({ phone });
    return successResponse(res, { exists: !!user });
  } catch (err) {
    console.error("checkUser error:", err);
    return errorResponse(res, "Internal server error");
  }
};

export const verifyUser = async (req, res) => {
  try {
    const { idToken, phone, profile, fcmToken } = req.body;
    if (!idToken || !phone)
      return errorResponse(res, "idToken and phone are required");

    // Verify Firebase ID token
    const decoded = await admin.auth().verifyIdToken(idToken);
    const uid = decoded.uid;

    // Upsert user
    const update = { uid, phone };
    if (profile) Object.assign(update, profile);
    if (fcmToken) update.fcmToken = fcmToken;

    const user = await User.findOneAndUpdate(
      { uid },
      { $set: update },
      { upsert: true, new: true }
    );

    // Create JWT for app
    const token = jwt.sign(
      { uid: user.uid, phone: user.phone },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    // Send welcome push notification (if FCM token present)
    if (user.fcmToken) {
      const message = {
        token: user.fcmToken,
        notification: {
          title: "Welcome to The Last Headache!",
          body: "Your health journey begins here 🧠",
        },
      };
      try {
        await admin.messaging().send(message);
        console.log("📩 Welcome notification sent:", user.phone);
      } catch (pushErr) {
        console.warn("Push notification failed:", pushErr.message);
      }
    }

    return successResponse(res, { token, user });
  } catch (err) {
    console.error("verifyUser error:", err);
    return errorResponse(res, "Authentication failed");
  }
};

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    uid: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    name: { type: String },
    age: { type: Number },
    gender: { type: String },
    fcmToken: { type: String },
    otp: { type: String }, // one-time password
    otpExpires: { type: Date }, // expires
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);

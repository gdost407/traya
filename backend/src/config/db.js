import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  const mongoURI = process.env.MONGO_URL;

  // console.log("🧩 Mongo URI:", mongoURI || "❌ Not found");

  if (!mongoURI) {
    console.error("❌ MONGO_URI missing in .env");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoURI);
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

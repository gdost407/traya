import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    uid: { type: String, required: true, unique: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    questions: { type: String },
    answers: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Assignment", assignmentSchema);

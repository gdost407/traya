import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import axios from "axios";
import Assignment from "../models/Assignment.js";

export const saveAssignment = async (req, res) => {
  const { questions, answers } = req.body;
  try {
    const assignment = new Assignment({
      user: req.user.userId,
      questions,
      answers,
    });
    await assignment.save();
    res.json({ success: true, assignment });
  } catch (err) {
    res.status(500).json({ error: "Failed to save assignment" });
  }
};

export default { saveAssignment }
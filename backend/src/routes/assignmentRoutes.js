import express from "express";
const Router = express.Router();
import { saveAssignment } from "../controllers/assignment.js";
import authMiddleware from "../middleware/authMiddleware.js";

Router.route("/save").post(authMiddleware, saveAssignment);

export default Router;

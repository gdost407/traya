import express from "express";
const Router = express.Router();
import { saveAssignment } from "../controllers/assignment.js";
import {  } from "../middleware/authMiddleware.js";


Router.route("/save").post(saveAssignment);

export default Router;

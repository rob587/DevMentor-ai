import express, { Router } from "express";
import { analyzeCandidate } from "../controllers/analyzeController.js";

const router = express.Router();

router.post("/analyze", analyzeCandidate);

export default router;

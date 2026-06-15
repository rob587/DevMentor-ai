import express, { Router } from "express";
import express from "express";
import multer from "multer";
import { analyzeCandidate } from "../controllers/analyzeController.js";

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Solo file PDF accettati"));
    }
  },
});

router.post("/analyze", analyzeCandidate);

export default router;

import { fetchGitHubData } from "../services/githubService.js";
import { parseJobDescription, parseCV } from "../services/parserService.js";
import { generateAIAnalysis } from "../services/aiService.js";
import { extractTextFromPDF } from "../services/pdfService.js";
import { generateCoverLetter } from "../services/coverLetterService.js";

export const analyzeCandidate = async (req, res) => {
  try {
    const { jobDescription, githubUsername } = req.body;

    if (!jobDescription || !githubUsername) {
      return res.status(400).json({ error: "Tutti i campi sono obbligatori" });
    }

    // Estrai testo CV — da PDF o testo libero
    let cvText = "";
    if (req.file) {
      cvText = await extractTextFromPDF(req.file.buffer);
    } else if (req.body.cvText) {
      cvText = req.body.cvText;
    } else {
      return res
        .status(400)
        .json({ error: "Inserisci il CV come testo o PDF" });
    }

    // 1. Fetch GitHub
    const githubSummary = await fetchGitHubData(githubUsername);

    // 2. Parse JD e CV
    const jobSkills = parseJobDescription(jobDescription);
    const cvSkills = parseCV(cvText);

    // 3. Match engine
    const matched = cvSkills.filter((skill) => jobSkills.includes(skill));
    const missing = jobSkills.filter((skill) => !cvSkills.includes(skill));
    const matchScore = Math.round((matched.length / jobSkills.length) * 100);

    // 4. AI Analysis
    const aiAnalysis = await generateAIAnalysis(
      jobDescription,
      cvText,
      githubSummary,
      matched,
      missing,
    );

    res.json({
      matchScore,
      matched,
      missing,
      githubSummary,
      aiAnalysis,
    });
  } catch (error) {
    console.error("ERRORE COMPLETO:", error);
    res.status(500).json({ error: error.message });
  }
};

export const generateCoverLetterHandler = async (req, res) => {
  try {
    const { jobDescription } = req.body;

    if (!jobDescription) {
      return res.status(400).json({ error: "Job description obbligatoria" });
    }

    // Estrai testo CV — da PDF o testo libero
    let cvText = "";
    if (req.file) {
      cvText = await extractTextFromPDF(req.file.buffer);
    } else if (req.body.cvText) {
      cvText = req.body.cvText;
    } else {
      return res
        .status(400)
        .json({ error: "Inserisci il CV come testo o PDF" });
    }

    const coverLetter = await generateCoverLetter(jobDescription, cvText);

    res.json({ coverLetter });
  } catch (error) {
    console.error("ERRORE COVER LETTER:", error);
    res.status(500).json({ error: error.message });
  }
};

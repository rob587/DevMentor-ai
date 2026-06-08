import { fetchGitHubData } from "../services/githubService.js";
import { parseJobDescription, parseCV } from "../services/parserService.js";

export const analyzeCandidate = async (req, res) => {
  try {
    const { jobDescription, cvText, githubUsername } = req.body;

    if (!jobDescription || !cvText || !githubUsername) {
      return res.status(400).json({ error: "Tutti i campi sono obbligatori!" });
    }
    //  Fetch del username di git
    const githubSummary = await fetchGitHubData(githubUsername);

    // parsing dell'inserzione e del cv
    const jobSkills = parseJobDescription(jobDescription);
    const cvSkills = parseCV(cvText);

    // sistema del matching
    const matched = cvSkills.filter((skill) => jobSkills.includes(skill));
    const missing = jobSkills.filter((skill) => !cvSkills.includes(skill));
    const matchScore = Math.round((matched.length / jobSkills.length) * 100);

    res.json({
      matchScore,
      matched,
      missing,
      githubSummary,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Errore interno del server" });
  }
};

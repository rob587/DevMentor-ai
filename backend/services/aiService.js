import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const generateAIAnalysis = async (
  jobDescription,
  cvText,
  githubSummary,
  matched,
  missing,
) => {
  const prompt = `
Sei un career advisor esperto. Analizza questa candidatura e rispondi SOLO con un JSON valido, senza testo aggiuntivo.

JOB DESCRIPTION:
${jobDescription}

CV:
${cvText}

GITHUB SUMMARY:
- Repository totali: ${githubSummary.totalRepos}
- Linguaggi: ${githubSummary.languages.join(", ")}
- Top repos: ${githubSummary.topRepos.map((r) => r.name).join(", ")}

SKILL MATCH:
- Skills trovate: ${matched.join(", ")}
- Skills mancanti: ${missing.join(", ")}

Rispondi con questo JSON:
{
  "strengths": ["punto di forza 1", "punto di forza 2"],
  "weaknesses": ["punto debole 1", "punto debole 2"],
  "recommendations": ["consiglio 1", "consiglio 2"],
  "cvTips": ["tip CV 1", "tip CV 2"],
  "learningRoadmap": ["cosa studiare 1", "cosa studiare 2"]
}
`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
    max_tokens: 1000,
  });

  const content = completion.choices[0].message.content;
  const clean = content.replace(/```json|```/g, "").trim();
  return JSON.parse(clean);
};

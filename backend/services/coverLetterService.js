import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const generateCoverLetter = async (jobDescription, cvText) => {
  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "user",
        content: `
Sei un esperto di carriera. Scrivi una lettera di presentazione professionale in italiano.

JOB DESCRIPTION:
${jobDescription}

CV:
${cvText}

Regole:
- Tono professionale ma umano
- Max 3 paragrafi
- Evidenzia le skill più rilevanti per il ruolo
- Concludi con una call to action
- NON inventare esperienze non presenti nel CV
        `,
      },
    ],
    temperature: 0.7,
    max_tokens: 1000,
  });

  return completion.choices[0].message.content;
};

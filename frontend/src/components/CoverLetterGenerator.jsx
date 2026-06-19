import { useState } from "react";
import { generateCoverLetter } from "../services/api";

const CoverLetterGenerator = (jobDescription, cvText, cvFile) => {
  const [loading, setLoading] = useState(false);
  const [coverLetter, setCoverLetter] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await generateCoverLetter(jobDescription, cvText, cvFile);
      setCoverLetter(result.coverLetter);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(coverLetter);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return <></>;
};

export default CoverLetterGenerator;

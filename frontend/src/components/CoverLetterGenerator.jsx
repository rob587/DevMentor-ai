import { useState } from "react";
import { generateCoverLetter } from "../services/api";

const CoverLetterGenerator = (jobDescription, cvText, cvFile) => {
  const [loading, setLoading] = useState(false);
  const [coverLetter, setCoverLetter] = useState(null);
  const [copied, setCopied] = useState(false);

  return <></>;
};

export default CoverLetterGenerator;

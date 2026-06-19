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

  return (
    <>
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <p className="font-semibold text-indigo-400 mb-3">Cover Letter</p>

        {!coverLetter && (
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-900 text-white font-medium py-3 rounded-lg transition-colors"
          >
            {loading ? " Generazione in corso..." : " Genera Cover Letter"}
          </button>
        )}

        {coverLetter && (
          <div className="flex flex-col gap-3">
            <div className="bg-gray-800 rounded-lg p-4 text-gray-300 text-sm whitespace-pre-line">
              {coverLetter}
            </div>
            <button
              onClick={handleCopy}
              className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 rounded-lg transition-colors text-sm"
            >
              {copied ? " Copiato!" : " Copia negli appunti"}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CoverLetterGenerator;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MatchScore from "../components/MatchScore";
import SkillTags from "../components/SkillTags";
import AIAnalysis from "../components/AIAnalysis";
import GitHubSummary from "../components/GitHubSummary";
import CoverLetterGenerator from "../components/CoverLetterGenerator";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { result, jobDescription, cvText, cvFile } = location.state || {};

  if (!result) {
    navigate("/");
    return null;
  }

  return (
    <>
      <div className="min-h-screen bg-gray-950 text-white p-8">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {/* Header */}
          <div className="text-center mb-4">
            <h1 className="text-4xl font-bold text-indigo-400 mb-2">
              DevMentor AI
            </h1>
            <p className="text-gray-400">Risultati della tua analisi</p>
          </div>

          {/* Match Score */}
          <MatchScore score={result.matchScore} />

          {/* Skills */}
          <SkillTags matched={result.matched} missing={result.missing} />

          {/* GitHub Summary */}
          <GitHubSummary github={result.githubSummary} />

          {/* AI Analysis */}
          <AIAnalysis analysis={result.aiAnalysis} />

          {/* Cover Letter */}
          <CoverLetterGenerator
            jobDescription={jobDescription}
            cvText={cvText}
            cvFile={cvFile}
          />

          {/* Back button */}
          <button
            onClick={() => navigate("/")}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 rounded-lg transition-colors"
          >
            ← Nuova analisi
          </button>
        </div>
      </div>
    </>
  );
};

export default Results;

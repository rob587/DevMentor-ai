import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { analyzeCandidate } from "../services/api";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    jobDescription: "",
    cvText: "",
    githubUsername: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await analyzeCandidate(
        form.jobDescription,
        form.cvText,
        form.githubUsername,
      );
      navigate("/results", { state: { result } });
    } catch (err) {
      setError("Errore durante l'analisi. Riprova.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-950 text-white p-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-indigo-400 mb-2">
              DevMentor AI
            </h1>
            <p className="text-gray-400">
              Analizza la tua candidatura con l'intelligenza artificiale
            </p>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-6">
            {/* GitHub Username */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                GitHub Username
              </label>
              <input
                type="text"
                name="githubUsername"
                value={form.githubUsername}
                onChange={handleChange}
                placeholder="es. rob587"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Job Description */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Job Description
              </label>
              <textarea
                name="jobDescription"
                value={form.jobDescription}
                onChange={handleChange}
                placeholder="Incolla qui la descrizione del lavoro..."
                rows={6}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 resize-none"
              />
            </div>

            {/* CV */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Il tuo CV
              </label>
              <textarea
                name="cvText"
                value={form.cvText}
                onChange={handleChange}
                placeholder="Incolla qui il testo del tuo CV..."
                rows={8}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 resize-none"
              />
            </div>

            {/* Error */}
            {error && <p className="text-red-400 text-sm">{error}</p>}

            {/* Button */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-900 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-colors"
            >
              {loading ? "⏳ Analisi in corso..." : "🚀 Analizza candidatura"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

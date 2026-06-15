import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { analyzeCandidate } from "../services/api";

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cvMode, setCvMode] = useState("text"); // 'text' | 'pdf'
  const [cvFile, setCvFile] = useState(null);
  const [form, setForm] = useState({
    jobDescription: "",
    cvText: "",
    githubUsername: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setCvFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await analyzeCandidate(
        form.jobDescription,
        form.cvText,
        form.githubUsername,
        cvFile,
      );
      navigate("/results", { state: { result } });
    } catch (err) {
      setError("Errore durante l'analisi. Riprova.");
    } finally {
      setLoading(false);
    }
  };

  return (
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

          {/* CV Mode Toggle */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Il tuo CV
            </label>
            <div className="flex gap-2 mb-3">
              <button
                onClick={() => setCvMode("text")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  cvMode === "text"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                Testo libero
              </button>
              <button
                onClick={() => setCvMode("pdf")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  cvMode === "pdf"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {"📄"} Upload PDF
              </button>
            </div>

            {/* CV Text */}
            {cvMode === "text" && (
              <textarea
                name="cvText"
                value={form.cvText}
                onChange={handleChange}
                placeholder="Incolla qui il testo del tuo CV..."
                rows={8}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 resize-none"
              />
            )}

            {/* CV PDF Upload */}
            {cvMode === "pdf" && (
              <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                  id="cvFile"
                />
                <label htmlFor="cvFile" className="cursor-pointer">
                  {cvFile ? (
                    <div>
                      <p className="text-green-400 font-medium">
                        {"✅"} {cvFile.name}
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        Clicca per cambiare file
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-gray-400">
                        Clicca per caricare il tuo CV
                      </p>
                      <p className="text-gray-600 text-sm mt-1">PDF, max 5MB</p>
                    </div>
                  )}
                </label>
              </div>
            )}
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
  );
}

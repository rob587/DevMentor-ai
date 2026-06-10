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

  return <div></div>;
};

export default Home;

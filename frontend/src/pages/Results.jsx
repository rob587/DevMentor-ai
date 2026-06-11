import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MatchScore from "../components/MatchScore";
import SkillTags from "../components/SkillTags";
import AIAnalysis from "../components/AIAnalysis";
import GitHubSummary from "../components/GitHubSummary";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { result } = location.state || {};

  if (!result) {
    navigate("/");
    return null;
  }

  return <div></div>;
};

export default Results;

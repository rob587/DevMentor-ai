import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const analyzeCandidate = async (
  jobDescription,
  cvText,
  githubUsername,
) => {
  const response = await axios.post(`${API_URL}/analyze`, {
    jobDescription,
    cvText,
    githubUsername,
  });
  return response.data;
};

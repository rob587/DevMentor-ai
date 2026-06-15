import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const analyzeCandidate = async (
  jobDescription,
  cvText,
  githubUsername,
  cvFile,
) => {
  const formData = new FormData();
  formData.append("jobDescription", jobDescription);
  formData.append("githubUsername", githubUsername);

  if (cvFile) {
    formData.append("cvFile", cvFile);
  } else {
    formData.append("cvText", cvText);
  }

  const response = await axios.post(`${API_URL}/analyze`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

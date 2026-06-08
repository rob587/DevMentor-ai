import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const fetchGitHubData = async (ussername) => {
  const headers = {
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
    Accept: "application/vnd.github.v3+json",
  };

  //  Fetch delle repos

  const { data: repos } = await axios.get(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
    { headers },
  );
};

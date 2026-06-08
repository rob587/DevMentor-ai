import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const fetchGitHubData = async (username) => {
  const headers = {
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
    Accept: "application/vnd.github.v3+json",
  };

  //  Fetch delle repos

  const { data: repos } = await axios.get(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
    { headers },
  );

  //   estrazione dei linguaggi
  const languageCount = {};
  repos.forEach((repo) => {
    if (repo.language) {
      languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
    }
  });

  //   ordina per frequenza
  const languages = Object.entries(languageCount)
    .sort((a, b) => b[1] - a[1])
    .map(([lang]) => lang);

  // Top 3 repos per stelle
  const topRepos = repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 3)
    .map((repo) => ({
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      url: repo.html_url,
    }));

  return {
    totalRepos: repos.length,
    languages,
    topRepos,
  };
};

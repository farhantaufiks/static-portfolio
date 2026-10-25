import axios from "axios";

// Returns the user's six most recently updated public repositories.
const getLatestRepos = async (data, token) => {
  try {
    const res = await axios.get(
      `https://api.github.com/users/${encodeURIComponent(data.githubUsername)}/repos`,
      {
        params: { sort: "updated", direction: "desc", per_page: 6 },
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        timeout: 5000,
      }
    );
    return res.data;
  } catch (err) {
    console.error("Failed to fetch GitHub repositories:", err.message);
    return [];
  }
};

export default getLatestRepos;

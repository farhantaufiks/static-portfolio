// Returns the user's six most recently updated public repositories, trimmed to
// the fields the page renders. Keep in sync with scripts/update-repos.sh.
const getLatestRepos = async (data, token) => {
  try {
    const username = encodeURIComponent(data.githubUsername);
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=6`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        signal: AbortSignal.timeout(5000),
      }
    );
    if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
    const repos = await res.json();
    return repos.map(({ id, name, description, html_url }) => ({
      id,
      name,
      description,
      html_url,
    }));
  } catch (err) {
    console.error("Failed to fetch GitHub repositories:", err.message);
    return [];
  }
};

export default getLatestRepos;

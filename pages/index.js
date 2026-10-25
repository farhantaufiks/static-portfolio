import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Farhan Taufik Syaban - Developer"
      description="Fullstack Developer since 2021, building backend services and web apps with AI-assisted tools. Get in touch with me to know more."
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

// Repos are baked in at build time as a fallback; the browser then loads the
// fresher list from /repos.json, which a daily cron job rewrites on the server.
export const getStaticProps = async () => {
  const token = process.env.GITHUB_AUTH_TOKEN;
  const repositories = await getLatestRepos(userData, token);

  return {
    props: {
      repositories,
    },
  };
};

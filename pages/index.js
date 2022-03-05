import ContainerBlock from "@components/ContainerBlock";
import Hero from "@components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Manu Arora - Developer, Writer, Creator"
      description="This is a template built specifically for my blog - Creating a developer portfolio that gets you a job."
    >
      <Hero />
      {/* Achievement */}
      {/* Featured Projects... */}
      {/* Featured Blogs... -> Coming soon */}
      {/* Web Gl Dogs... + Github statistcs */}
    </ContainerBlock>
  );
}
import React from "react";
import ContainerBlock from "@components/ContainerBlock";
import Projects from "@components/Projects";
import { fetchMiscData, fetchProjectsData } from "@lib/fetcher";

export default function projects({projects, misc}) {

  return (
    <ContainerBlock title="Projects - William" misc={misc}>
      <Projects data={projects}/>
      {/* Coming soon projects... */}
    </ContainerBlock>
  );
}

export async function getServerSideProps() {
  try {
    const projects = await fetchProjectsData()
    const misc = await fetchMiscData()
    return { props: { projects, misc } }
  } catch (err) {
    return { props: {} }
  }
}
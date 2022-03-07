import React from "react";
import ContainerBlock from "@components/ContainerBlock";
import Projects from "@components/Projects";
import { fetchMiscData } from "@lib/fetcher";

export default function projects({misc}) {
  console.log("Projects")
  console.log(misc)
  return (
    <ContainerBlock title="Projects - William" misc={misc}>
      <Projects />
      {/* Coming soon projects... */}
    </ContainerBlock>
  );
}

export async function getServerSideProps() {
  try {
    const misc = await fetchMiscData()
    return { props: { misc } }
  } catch (err) {
    return { props: {} }
  }
}
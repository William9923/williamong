import React from "react";
import ContainerBlock from "@components/ContainerBlock";
import Experience from "@components/Experience";
import { fetchExperienceData, fetchMiscData } from "@lib/fetcher";

export default function experience({ data, misc }) {
  return (
    <ContainerBlock title="Experience - William" misc={misc}>
      <Experience techs={data.techs} works={data.works} />
      {/* Tech Stack... */}
    </ContainerBlock>
  );
}

export async function getServerSideProps() {
  try {
    const data = await fetchExperienceData()
    const misc = await fetchMiscData()
    data.works.sort((x, y) => y.idx - x.idx)
    return { props: { data, misc } }
  } catch (err) {
    const data = {
      works: [],
      techs: []
    }
    return {
      props: {
        data
      }
    }
  }
}
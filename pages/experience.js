import React from "react";
import ContainerBlock from "@components/ContainerBlock";
import Experience from "@components/Experience";
import { fetchContactData, fetchExperienceData } from "@lib/fetcher";

export default function experience({ data }) {
  return (
    <ContainerBlock title="Experience - William">
      <Experience techs={data.techs} works={data.works} />
      {/* Tech Stack... */}
    </ContainerBlock>
  );
}

export async function getServerSideProps() {
  try {
    const data = await fetchExperienceData()
    const contacts = await fetchContactData()

    data.works.sort((x,y) => y.idx - x.idx) 
    // const misc = {
    //   "github"
    // }

    return { props: { data } }
  } catch (err) {
    const data = {
      works: [],
      techs: []
    }
    return { props: { data } }
  }
}
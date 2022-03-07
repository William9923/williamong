import React from "react";
import ContainerBlock from "@components/ContainerBlock";
import Blogs from "@components/Blogs"
import { fetchMiscData } from "@lib/fetcher";

export default function blogs({misc}) {
  console.log("Blogs")
  console.log(misc)
  return (
    <ContainerBlock title="Blogs - William" misc={misc}>
      <Blogs />
    </ContainerBlock>
  );
}

export async function getServerSideProps() {
  try {
    const misc = await fetchMiscData()
    return { props: { misc } }
  } catch (err) {
    return { props: {}}
  }
}
import React from "react";
import ContainerBlock from "@components/ContainerBlock";
import Contact from "@components/Contact";
import { fetchContactData, fetchMiscData } from "@lib/fetcher";

export default function contact({ data, misc }) {
  return (
    <ContainerBlock title="Contacts - William" misc={misc}>
      <Contact phoneNumber={data.pn} email={data.email} />
      {/* Subscribe (Coming soon...) */}
      {/* Connect with me...  (medium, linked in, github, slack)*/}
    </ContainerBlock>
  );
}

export async function getServerSideProps() {
  try {
    const data = await fetchContactData()
    const misc = await fetchMiscData()
    return { props: { data, misc } }
  } catch (err) {
    const data = {
      contacts: []
    }
    return { props: { data } }
  }
}

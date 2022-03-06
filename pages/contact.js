import React from "react";
import ContainerBlock from "@components/ContainerBlock";
import Contact from "@components/Contact";
import { fetchContactData } from "@lib/fetcher";

export default function contact({ data }) {
  const contacts = data.contacts
  const pn = contacts.filter((item) => (item.name === "wa" && item.type === "text"))[0]["value"]
  const email = contacts.filter((item) => (item.name === "email" && item.type === "text"))[0]["value"]
  return (
    <ContainerBlock>
      <Contact phoneNumber={pn} email={email} />
      {/* Subscribe (Coming soon...) */}
      {/* Connect with me...  (medium, linked in, github, slack)*/}
    </ContainerBlock>
  );
}

export async function getServerSideProps() {
  try {
    const data = await fetchContactData()
    console.log(data)
    return { props: { data } }
  } catch (err) {
    const data = {
      contacts: []
    }
    return { props: { data } }
  }
}

import ContainerBlock from "@components/ContainerBlock";
import Hero from "@components/Hero";
import Blogs from "@components/Blogs";
import Projects from "@components/Projects";
import Contact from "@components/Contact";
import Experience from "@components/Experience";
import { ThinDivider } from "@components/Divider";
import Education from "@components/Education";

import { fetchHomeData, fetchMiscData, fetchContactData, fetchExperienceData, fetchProjectsData } from "@lib/fetcher";
import Achievement from "@components/Achievement";

export default function Home({ data, contacts, experience, projects, misc }) {
  console.log(data)
  console.log(contacts)
  console.log(misc)
  return (
    <ContainerBlock
      title="William - Software Engineer"
      description="Welcome to my website"
      misc={misc}
    >
      <Hero
        name={data.name}
        profileDetails={data.profileDetails}
        profileDataUrl={data.profileDataUrl}
        profileImgURL={data.avatar}
      />

      <ThinDivider />
      <Experience techs={experience.techs} works={experience.works} />
      <Education />
      <Achievement />

      <ThinDivider />
      <Projects data={projects}/>

      <ThinDivider />
      <Contact phoneNumber={contacts.pn} email={contacts.email} />


      <div className="pb-8 md:pb-20"></div>
    </ContainerBlock>
  );
}

export async function getServerSideProps() {
  try {
    const data = fetchHomeData()
    const contacts = fetchContactData()
    const misc = fetchMiscData()
    const experience = fetchExperienceData()
    const projects = fetchProjectsData()
    return { props: { data, experience, projects, contacts, misc } }
  } catch (err) {
    console.log(err)
    return { props: {} }
  }
}
import ContainerBlock from "@components/ContainerBlock";
import Hero from "@components/Hero";
import Education from "@components/Education";

import { fetchHomeData, fetchMiscData } from "@lib/fetcher";
import Achievement from "@components/Achievement";

export default function Home({ data, misc }) {

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
      <Achievement />
      <Education />

      {/* Featured Projects... */}
      {/* Featured Blogs... -> Coming soon */}
      {/* Web Gl Dogs... + Github statistcs */}

      <div className="pb-8 md:pb-20"></div>
    </ContainerBlock>
  );
}

export async function getServerSideProps() {
  try {
    const data = fetchHomeData()
    const misc = fetchMiscData()
    return { props: { data, misc } }
  } catch (err) {
    console.log(err)
    return { props: {} }
  }
}
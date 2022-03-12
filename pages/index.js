import ContainerBlock from "@components/ContainerBlock";
import Hero from "@components/Hero";

import { fetchHomeData, fetchMiscData } from "@lib/fetcher";

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
      {/* Achievement */}
      {/* Featured Projects... */}
      {/* Featured Blogs... -> Coming soon */}
      {/* Web Gl Dogs... + Github statistcs */}
    </ContainerBlock>
  );
}

export async function getServerSideProps() {
  try {
    const data =  fetchHomeData()
    const misc =  fetchMiscData()
    return { props: { data, misc } }
  } catch (err) {
    console.log(err)
    return { props: {} }
  }
}
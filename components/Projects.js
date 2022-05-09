import React from "react";

import PageTitle from "@components/PageTitle";
import { ProjectCard, ProjectCardHorizontal } from "@components/ProjectCard";

const title = "Projects."
const quotes = "Because life is good when working on new ideas."

// TODO: Handle Featured Projects & Only show featured project on small device...

export default function Projects({ data }) {

  const projects = data.projects.sort((x, y) => y.idx - x.idx)
  return (
    <div className="bg-white flex flex-col justify-center" id="projects">
      <div className="max-w-6xl mx-auto bg-white">
        <PageTitle title={title} quotes={quotes} />
      </div>
      <div></div>
      <div className="hidden md:block bg-white py-5">
        <div className="mx-auto flex flex-col justify-center items-center gap-6 md:gap-8 py-20 pb-40">
          {projects.map((proj) => (
            <ProjectCardHorizontal
              title={proj.title}
              link={proj.link}
              desc={proj.desc}
              imgUrl={proj.imgUrl}
              key={proj.idx}
              tags={proj.tags}
            />
          ))}
        </div>
      </div>
      <div className="block md:hidden bg-white">
        <div className="mx-auto flex flex-col justify-center items-center gap-6 py-10 pb-20">
          {projects.map((proj) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              desc={proj.desc}
              imgUrl={proj.imgUrl}
              key={proj.idx}
              tags={proj.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
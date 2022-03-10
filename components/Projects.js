import React from "react";

import PageTitle from "@components/PageTitle";
import { ProjectCard, ProjectCardHorizontal } from "@components/ProjectCard";

const title = "Projects."
const quotes = "Because life is good when working on new ideas."

export default function Projects({ data }) {

  const projects = data.projects.sort((x, y) => y.idx - x.idx)
  return (
    <section className="bg-white flex flex-col justify-center">
      <div className="max-w-6xl mx-auto h-48 bg-white">
        <PageTitle title={title} quotes={quotes} />
      </div>
      <div className="hidden md:block bg-white">
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
        <div className="mx-auto flex flex-col justify-center items-center gap-6 md:gap-8 py-20 pb-40">
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
    </section>
  );
}
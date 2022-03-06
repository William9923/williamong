import React from "react";

import PageTitle from "@components/PageTitle";
import ProjectCard from "@components/ProjectCard";
import userData from "@constants/data";

const title = "Projects."
const quotes = "Because life is good when working on new ideas."

export default function Projects() {
  return (
    <section className="bg-white flex flex-col justify-center">
      <div className="max-w-6xl mx-auto h-48 bg-white">
        <PageTitle title={title} quotes={quotes} />
      </div>
      <div className="bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              desc={"lorem ipsum fsafasfasfsdfs afsafsaf safsfdsjhfd jsfjhs dfkj hsdaf klhdsafghs afffiaiguhsk abacbsabfskja bfabjhb fhsj afsa"}
              imgUrl={proj.imgUrl}
              key={`${idx + 1}`}
              tags={["react", "node js", "golang"]}
            />
          ))}
          <ProjectCard
            title={"Tes"}
            tags={["react", "node js", "golang"]}
          />
        </div>
      </div>
    </section>
  );
}
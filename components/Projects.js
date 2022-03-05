import React from "react";
import PageTitle from "./PageTitle";

import userData from "@constants/data";
import { AiOutlineGithub, AiFillEye } from "react-icons/ai";

const title = "Projects."
const quotes = "Lorem Ipsum..."

export default function Projects() {
  return (
    <section className="bg-white flex flex-col justify-center">
      <div className="max-w-6xl mx-auto h-48 bg-white">
        <PageTitle title={title} quotes={quotes} />
      </div>
      {/* Grid starts here */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
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

const TransparentRedirectButton = ({ link, children }) => (
  <a
    target="_blank"
    rel="noreferrer"
    href={link}
    className="place-self-center hidden group-hover:block"
  >
    {children}
  </a>
)

const ProjectCard = ({ title, link, imgUrl, tags }) => {
  return (
    <div className="group mb-4 shadow-xl hover:shadow rounded-md shadow-custom border-2 border-[#212121]">
      {(imgUrl != "" && imgUrl != undefined) && (
        <div className="relative overflow-hidden">
          <img
            className="transform group-hover:scale-125 group-hover:blur-sm transition duration-2000 ease-out object-cover h-full w-full"
            src={imgUrl}
            alt={title}
          >
          </img>
          <button className="absolute top-24 left-32 hidden group-hover:block w-12 h-12 opacity-60 rounded-full bg-white color-black px-2">
            <TransparentRedirectButton link={link}>
              <AiOutlineGithub size={32} />
            </TransparentRedirectButton>
          </button>
          <button className="absolute top-24 right-32 hidden group-hover:block w-12 h-12 opacity-60 rounded-full bg-white color-black px-2">
            <TransparentRedirectButton link={link}>
              <AiFillEye size={32} />
            </TransparentRedirectButton>
          </button>
        </div>
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {(tags != undefined && tags.length > 0) && tags.map((tag, idx) => (
          <span key={idx} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
        ))}
      </div>
    </div>
  )
}
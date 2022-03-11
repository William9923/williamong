import React from "react";
import userData from "@constants/data";
import PageTitle from "@components/PageTitle";
import { HoverItemGreen } from "@components/ui/HoverItem"


const title = "Experience."
const quotes = "Experience is the teacher of all things"

export default function Experience({ works, techs }) {
  return (
    <section className="bg-white flex flex-col pb-10">
      <div className="max-w-6xl mx-auto h-48 bg-white">
        <PageTitle title={title} quotes={quotes} />
      </div>
      <div className="bg-white dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {works.map((exp, idx) => (
            <div className="hover:scale-110" key={idx}>
              <ExperienceCard
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
                colors="green"
              />
              {checkLastElem(idx, userData.experience) ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ title, desc, year, company, companyLink, duration }) => {
  return (
    <div className="relative experience-card border p-4 bg-white dark:bg-gray-800 z-10 mx-4 mb-4 shadow-xl hover:shadow rounded-md shadow-custom border-2 border-[#212121]">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      <HoverItemGreen>
        <a href={companyLink} className="text-gray-500 hover:text-gray-50">
          {company}
        </a>
      </HoverItemGreen>
      <span className="text-gray-500">
        {duration}
      </span>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
    </div>
  );
};

const checkLastElem = (idx, arr) => idx === arr.length - 1

import React, { useState } from "react";
import Pinger from "@components/ui/Pinger";
import PageTitle from "@components/PageTitle";
import { HoverItemGreen, HoverItemBlue } from "@components/ui/HoverItem"


const title = "Experience."
const quotes = "Experience is the teacher of all things"

export default function Experience({ works, techs }) {
  console.log(works)
  return (
    <div className="bg-white flex flex-col pb-10" id="experience">
      <div className="max-w-6xl mx-auto bg-white">
        <PageTitle title={title} quotes={quotes} />
      </div>
      <div className="bg-white overflow-y-auto h-screen">
        <div className="grid grid-cols-1 max-w-xl mx-auto pt-20">
          {works.map((exp, idx) => (
            <div className="hover:scale-105" key={idx}>
              <ExperienceCard
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
                duration={exp.duration}
                certificate={exp.certificate}
                colors="green"
              />
              {checkLastElem(idx, works) ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <Pinger />
                  <div className="w-1 h-14 bg-gray-200 rounded-full -mt-2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const ExperienceCard = ({ title, desc, year, company, companyLink, duration, certificate }) => {
  console.log(certificate)
  return (
    <div className="relative experience-card border p-4 bg-white z-10 mx-4 mb-4 shadow-xl hover:shadow rounded-md shadow-custom border-2 border-[#212121]">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      <HoverItemGreen>
        <a href={companyLink} className="text-gray-500 hover:text-gray-50 pr-2 py-2 hover:pl-2">
          {company}
        </a>
      </HoverItemGreen>
      |
      <span className="text-gray-500 p-2">
        {duration}
      </span>
      <p className="text-gray-600 my-2">{desc}</p>
      {
        !!certificate &&
        <HoverItemBlue><div className="hover:p-1">
          <a href={certificate} target="_blank">See Certificate →</a>
        </div>
        </HoverItemBlue>
      }
    </div>
  );
};

const checkLastElem = (idx, arr) => idx === arr.length - 1

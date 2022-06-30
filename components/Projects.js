import React, { useState } from "react";
import { FiGithub, FiTwitter, FiSlack, FiLinkedin } from "react-icons/fi";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

/**
 * Utility to detect if you're on the server, or in the browser.
 */
const isBrowser = typeof window !== "undefined";

import PageTitle from "@components/PageTitle";

import SectionTitle from "@components/SectionTitle";

const title = "Projects."
const quotes = "Because learning is a lifetime process."

const featuredProjects = [
  {
    title: "Working Out",
    desc: "An android application that can motivate you to workout (running/cycling)",
    link: "https://github.com/William9923/WorkingOut",
    imgUrl: "https://github.com/William9923/WorkingOut/blob/master/docs/workout.gif?raw=true",
    tags: ["android", "kotlin", "workout"]
  },
  {
    title: "Working Out",
    desc: "An android application that can motivate you to workout (running/cycling)",
    link: "https://github.com/William9923/WorkingOut",
    imgUrl: "https://github.com/William9923/WorkingOut/blob/master/docs/workout.gif?raw=true",
    tags: ["android", "kotlin", "workout"]
  },
  {
    title: "Working Out",
    desc: "An android application that can motivate you to workout (running/cycling)",
    link: "https://github.com/William9923/WorkingOut",
    imgUrl: "https://github.com/William9923/WorkingOut/blob/master/docs/workout.gif?raw=true",
    tags: ["android", "kotlin", "workout"]
  },

]

const images = ['https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80', 'https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80']

const SmallCard = ({ title, desc, link, imgUrl, tags }) => {
  return (
    <a href={link} target="_blank">
      <div className="group shadow-xl hover:shadow hover:scale-105 rounded-md shadow-custom border-2 border-[#212121]">
        <div className="flex flex-col items-center md:flex-row">
          {(imgUrl != "" && imgUrl != undefined) && (
            <div className="relative">
              <img
                className="object-fill h-48 w-96 hidden group-hover:block group-hover:opacity-75 overflow-y-hidden"
                src={imgUrl}
                alt={title}
              />
              <button className="absolute hidden group-hover:block mr-4 top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 focus:outline-none focus:shadow-outline">
                <span className="block">➜</span>
              </button>
            </div>
          )}

          <div className="flex flex-col justify-between p-2 sm:p-4 block group-hover:hidden">

            <div className="mb-4">
              <div className="text-black font-bold text-xl mb-2">{title}</div>
              <p className="text-grey-darker text-base">{desc}</p>
            </div>
            <div className="pt-2 pb-1">
              {(tags != undefined && tags.length > 0) && tags.map((tag, idx) => (
                <button key={idx} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:scale-110">#{tag}</button>
              ))}
            </div>

          </div>

        </div>
      </div >
    </a>
  )
}

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

const ProjectList = ({ projects }) => {

  return (
    <center>
      <Carousel showThumbs={false} showStatus={false} emulateTouch={true} width={"90%"}>
        {projects.map((proj) => (
          <>
            <img className="rounded-xl object-scale-down h-96 w-48" src={proj.imgUrl} />
            <div className="legend">
              <div className="flex flex-col justify-between px-2 sm:pb-2 block group-hover:hidden">
                <div className="mb-2">
                  <div className="text-white font-bold text-xl mb-2">{proj.title}</div>
                  <p className="text-grey-darker text-base">{proj.desc}</p>
                </div>
                <div className="pt-2 pb-1">
                  {(proj.tags != undefined && proj.tags.length > 0) && proj.tags.map((tag, idx) => (
                    <button key={idx} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:scale-110">#{tag}</button>
                  ))}
                </div>
                <a href={proj.url} target="_blank">
                  <button className="absolute mr-8 top-0 mt-28 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 focus:outline-none focus:shadow-outline">
                    <span className="block">➜</span>
                  </button>
                </a>

              </div>

            </div>
          </>
        ))}
      </Carousel>
    </center>

  );
};


export default function Projects({ data }) {
  const projects = data.projects.sort((x, y) => y.idx - x.idx)

  return (
    <div className="bg-white flex flex-col justify-center" id="projects">
      <div className="max-w-6xl mx-auto bg-white">
        <PageTitle title={title} quotes={quotes} />
      </div>
      <ProjectList projects={projects} />
      <center>
        <SectionTitle title={"Featured Projects"} />
      </center>

      <div className="flex flex-col md:flex-row justify-between py-5 pb-10">
        {
          featuredProjects.map((proj) => (
            <div className="md:w-1/3 my-4 mx-2">
              <SmallCard
                title={proj.title}
                link={proj.link}
                desc={proj.desc}
                imgUrl={proj.imgUrl}
                key={proj.idx}
                tags={proj.tags}
              />
            </div>
          ))}
      </div>
    </div>
  )
}
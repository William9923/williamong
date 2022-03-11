import React from "react";

import { RoughNotationGroup } from "react-rough-notation";
import { FiGithub } from "react-icons/fi"
import { RainbowHighlight } from "@components/ui/RainbowHighlight";
import colors from "@constants/colors"
import {getRandomColor} from "@lib/colors";

export default function Hero({ name, profileDetails, profileDataUrl, profileImgURL }) {
  console.log(profileDetails)
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full md:w-3/4 sm:w-2/3 mx-auto text-center md:text-left lg:pt-10">
        <RoughNotationGroup show={true}>
          <h1 className="font-bold text-5xl md:text-6xl tracking-tight ml-4 mb-4 text-black">
            Hey, I’m{" "}
            <RainbowHighlight color={getRandomColor(colors)}>
              <span className="dark:text-black">{name}</span>
            </RainbowHighlight>{" "}
          </h1>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-700 ml-4 my-2">
            An aspiring &nbsp;
            <RainbowHighlight color={getRandomColor(colors)}>
              Software Engineer.
            </RainbowHighlight>
          </h1>

          <div className="ml-4 mb-16 mt-4">
            <h2 className="text-gray-600 text-left font-light tracking-wide leading-normal">
              {profileDetails.map((detail, idx) => (
                <span key={idx}>{detail}<br /></span>
              ))}
            </h2>
            <div className="flex flex-row justify-evenly mt-4">
              <a href={profileDataUrl.resumeUrl} target="_blank"><button
                type="button"
                className="inline-flex justify-center mx-4 my-2 px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              >
                <span className="hidden md:block">Resume Profile</span>
                <span className="block md:hidden">Resume</span>
                <span className="sr-only">Resume</span>
                <img
                  src="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/66/000000/external-resume-accounting-smashingstocks-detailed-outline-smashing-stocks.png"
                  className="w-5 h-5 ml-2"
                />
              </button>
              </a>

              <a href={profileDataUrl.githubUrl} target="_blank">
                <button
                  type="button"
                  className="inline-flex justify-center text-white mx-4 my-2 px-4 py-2 text-sm font-medium text-gray-900 bg-gray-500 border border-transparent rounded-md hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                >
                  <span className="hidden md:block">Github Profile</span>
                  <span className="block md:hidden">Github</span>
                  <span className="sr-only">GitHub repository</span>
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 ml-2"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                </button>
              </a>

            </div>

          </div>


        </RoughNotationGroup>

      </div>

      <div className="flex flex-row justify-center items-end hidden lg:block relative w-full ml-4 md:w-1/2 -mr-3">
        <div className="pl-14">
          <img src={profileImgURL} alt="avatar" className="drop-shadow-lg rounded-full" />

        </div>
        <div className="flex flex-row justify-center mt-4">
          <div className="flex flex-row space-x-4">
            <LeftToUpperArrowIcon />
            <p className="font-mono">Yup, That's me!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const LeftToUpperArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-arrow-90deg-up"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
    />
  </svg>
)

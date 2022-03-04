import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";
import { Divider } from "./Divider";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full md:w-1/2 sm:w-1/4 mx-auto text-center md:text-left lg:pt-10">
        <RoughNotationGroup show={true}>
          <h1 className="font-bold text-5xl md:text-6xl tracking-tight ml-4 mb-4 text-black dark:text-white">
            Hey, I’m{" "}
            <RainbowHighlight color={colors[2]}>
              <span className="dark:text-black">William.</span>
            </RainbowHighlight>{" "}
          </h1>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-700 ml-4 dark:text-gray-200 my-2">
            An aspiring &nbsp;
            <RainbowHighlight color={colors[1]}>
              Software Engineer.
            </RainbowHighlight>
          </h1>

          <div className="">
            <h2 className="text-gray-600 text-left dark:text-gray-400 ml-4 mb-16 mt-4 font-light tracking-wide leading-normal">
              🖥 I’m a developer, engineer, and a student. <br />
              📌 Currently on my last year (fourth year) in ITB. <br />
              🗒 I previously work at{" "}
              <span className="font-bold">
                <span className="text-blue-500">Tokopedia</span>
              </span>{" "}
              as a{" "}
              <span className="dark:text-white font-bold">
                Software Engineer Intern.{" "}
              </span>{" "}<br />
              🔨 Love to automate things{" "}
            </h2>
          </div>


        </RoughNotationGroup>
        {/* </div> */}

      </div>

      <div className="flex flex-row justify-center items-end hidden lg:block relative w-full ml-4 md:w-1/2 -mr-3">
        <img src={userData.avatarUrl} alt="avatar" className="drop-shadow-lg" />
        <div className="flex flex-row justify-center mt-4">
          <div className="flex flex-row space-x-4">
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
            <p className="font-mono">That's me (before pandemic 😊)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

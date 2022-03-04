import React from "react";
import { ReactLogo, GithubLogo, WhatsappLogo, LinkedInLogo, TailwindLogo, NextJsLogo  } from "./logo";

const name = "William"

export default function Footer() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 md:py-20">
        <div className="flex flex-col space-y-4 justify-center items-center mt-8">
          <div className="text-xl">
            <p>Copyright &copy; {new Date().getFullYear()} 
              <div className="inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300">
                <a
                  className="hover:bg-blue-500 rounded-md px-2 py-1  hover:text-gray-50"
                  href="https://manuarora.in"
                >
                  {name}
                </a>
              </div>
            </p>
          </div>
          <div className="text-lg">
            Created with {" "} 
              <span className="inline-block"> 
                <ReactLogo width={20} height={20} /> 
              </span> 
              , &nbsp;
              <span className="inline-block"> 
                <NextJsLogo width={20} height={20} /> 
              </span> 
              &nbsp; and &nbsp;
              <span className="inline-block"> 
                <TailwindLogo width={20} height={20} /> 
              </span> 

            <br />
            and a small pinch of with 💛   
          </div>
          <div></div>
          <div className="text-sm">
            Template heavily inspired from
            <div className="inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300">
              <a
                className="hover:bg-red-500 rounded-md px-2 py-1  hover:text-gray-50"
                href="https://manuarora.in"
              >
                Manu Arora
              </a>
            </div>
          </div>
          {/* Refactor from here  */}
          <div className="space-x-4 flex flex-row items-center">
            <GithubLogo width={30} height={30} />
            <LinkedInLogo width={30} height={30} />
            <WhatsappLogo width={30} height={30} /> 
          </div>
          {/* End Refactor */}
        </div>
      </div>
    </>
  );
}


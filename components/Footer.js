import React from "react";
import { FiGithub, FiTwitter, FiSlack, FiLinkedin } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

import { HoverItemBlue, HoverItemRed } from "@components/ui/HoverItem";

import { ReactLogo, TailwindLogo, NextJsLogo } from "@components/logo";

// TODO: Make data dyanamic (fetch from data store...)
const name = "William"
const link = "https://google.com"
const logoSize = 30
const canConnectWith = ["github", "linkedin", "wa"]

export default function Footer() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:py-20">
      <div className="flex flex-col space-y-4 justify-center items-center mt-8">
        <div className="text-xl">
          <p>Copyright &copy; {new Date().getFullYear()}
            <HoverItemBlue >
              <a
                className="rounded-md px-2 py-1 hover:text-gray-50"
                href={link}
              >
                {name}
              </a>
            </HoverItemBlue>
          </p>
        </div>
        <div className="text-lg">
          Created with {" "}
          <span className="inline-block"><ReactLogo width={20} height={20} /></span>, &nbsp;
          <span className="inline-block"><NextJsLogo width={20} height={20} /></span>&nbsp; and &nbsp;
          <span className="inline-block"><TailwindLogo width={20} height={20} /></span><br />
          and a many pinch of 💛
        </div>
        <div></div>
        <div className="text-sm">
          Template heavily inspired from
          <HoverItemRed>
            <a
              className="rounded-md px-2 py-1 hover:text-gray-50"
              href="https://manuarora.in"
            >
              Manu Arora
            </a>
          </HoverItemRed>
        </div>
        <div className="space-x-4 flex flex-row items-center">
          {canConnectWith.map((method, idx) => (
            <ConnectMethod key={idx} method={method} link={"https://google.com"} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Add based on requirement..
const getConnectMethodComponent = (method, size) => {
  switch (method) {
    case "github":
      return <FiGithub size={size} />
      break;
    case "linkedin":
      return <FiLinkedin size={size} />
    case "wa":
      return <AiOutlineWhatsApp size={size} />
    case "slack":
      return <FiSlack size={size} />
    case "twitter":
      return <FiTwitter size={size} />
    default:
      return <HiOutlineQuestionMarkCircle size={size} />
  }
}

const ConnectMethod = ({ method, link }) => {
  const component = getConnectMethodComponent(method, logoSize)
  return <a
    href={link}
    target="_blank"
    className="hover:scale-110"
  >
    {component != null && component}
  </a>

}


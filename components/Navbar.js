import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiHome } from "react-icons/fi"

import userData from "@constants/data";

// TODO: adjust menu based on need...
const menu = ["/blogs", "/experience", "/projects", "/contact"]
const menuMaps = {
  "/blogs": "Blogs",
  "/experience": "Experience",
  "/projects": "Projects",
  "/contact": "Contacts",
}

export default function Navbar() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="max-w-6xl mx-auto md:px-4 py-10 md:py-20">
      <div className="flex md:flex-row justify-between items-center ">
        <div className="hover:scale-110 block md:hidden ml-4" >
          <Link href="/">
            <a>
              <FiHome size={30} />
            </a>
          </Link>
        </div>

        <div className="hover:scale-110 hidden md:block" >
          <Link href="/">
            <a>
              <h1 className="font-semibold text-xl dark:text-gray-100">
                {userData.name}
              </h1>
              <p className="text-base font-light text-gray-500 dark:text-gray-300">
                {userData.designation}
              </p>
            </a>
          </Link>
        </div>

        <div className="flex flex-col justify-between items-end">
          <div className="space-x-8 hidden md:block">
            {menu.map((link, index) => (
              <Menu key={index} link={link} title={menuMaps[link]} router={router} />
            ))}
          </div>
          <div className="space-x-4 block md:hidden">
            {menu.map((link, index) => (
              <SmallMenu key={index} link={link} title={menuMaps[link]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Menu = ({ link, title, router }) => (
  <Link href={link}>
    <button className="inline-block hover:scale-110">
      <a
        className={`text-base   
        ${router.asPath === link
            ? "text-gray-800 font-bold dark:text-gray-400"
            : "text-gray-600 dark:text-gray-300 font-normal "
          }`}
      >
        {title + " "}
      </a>
    </button>

  </Link>
)

const SmallMenu = ({ link, title }) => (
  <Link href={link}>
    <button className="inline-block hover:scale-110">
      <a className="text-base font-normal text-gray-600 dark:text-gray-300">
        {title}
      </a>
    </button>

  </Link>
)

const ToggleButton = ({ onclick, mounted, theme }) => (
  <button
    aria-label="Toggle Light/Dark Mode"
    type="button"
    className="w-10 h-10 p-3 rounded focus:outline-none"
    onClick={onclick}
  >
    {mounted && (theme === "dark" ? (<DarkThemeIcon />) : <LightThemeIcon />)}
  </button>
)

const LightThemeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
)

const DarkThemeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

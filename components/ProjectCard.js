import React from "react";
import { AiOutlineGithub, AiFillEye } from "react-icons/ai";

export default function ProjectCard({ title, desc, link, imgUrl, tags }) {
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
                <p className="text-gray-700 text-base flex-wrap">
                    {desc}
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
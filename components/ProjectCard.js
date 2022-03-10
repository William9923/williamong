import React from "react";
import { AiOutlineGithub, AiFillEye } from "react-icons/ai";

export const ProjectCard = ({ title, desc, link, imgUrl, tags }) => {
    return (
        <div className="group mb-4 shadow-xl hover:shadow hover:scale-105 rounded-md shadow-custom border-2 border-[#212121]">
            <a href={link} target="_blank">
                {(imgUrl != "" && imgUrl != undefined) && (
                    <div className="relative overflow-hidden">
                        <img
                            className="object-fill transform group-hover:scale-125 group-hover:blur-sm transition duration-2000 ease-out object-cover h-full w-full"
                            src={imgUrl}
                            alt={title}
                            width={400}
                            height={400}
                        >
                        </img>
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
                        <button key={idx} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:scale-110">#{tag}</button>
                    ))}
                </div>
            </a>
        </div>
    )
}

export const ProjectCardHorizontal = ({ title, desc, link, imgUrl, tags }) => {
    return (
        <div className="group mb-4 shadow-xl w-3/4 hover:shadow hover:scale-105 rounded-md shadow-custom border-2 border-[#212121]">
            <a href={link} target="_blank" className="flex flex-col items-center md:flex-row">
                    {(imgUrl != "" && imgUrl != undefined) && (
                        <img
                            className="object-cover group-hover:blur-sm w-full md:h-auto md:w-64"
                            src={imgUrl}
                            alt={title}
                        >
                        </img>

                    )}

                <div className="flex flex-col justify-between p-4">
                    <div className="mb-4">
                        <div className="text-black font-bold text-xl mb-2">{title}</div>
                        <p className="text-grey-darker text-base">{desc}</p>
                    </div>
                    <div className="pt-4 pb-2">
                        {(tags != undefined && tags.length > 0) && tags.map((tag, idx) => (
                            <button key={idx} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:scale-110">#{tag}</button>
                        ))}
                    </div>
                </div>
            </a>
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
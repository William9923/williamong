import React from "react";

export default function HoverCard({ tags, title, description, href, children }) {
    return (
        <a
            className="mb-4 shadow-xl hover:shadow rounded-md shadow-custom border-2 border-[#212121]"
            href={href}
            aria-label={title}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded p-4">
                <div className="h-8 w-8 ml-2 mr-4">
                    <span className="sr-only">{title}</span>

                    <svg
                        className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                    </svg>
                </div>
                <div>
                    <>
                        <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
                            {title}
                        </h4>
                        <p className="leading-5 text-gray-700 dark:text-gray-300">
                            {description}
                        </p>
                        <div className="pt-2 flex md:flex-row space-x-2">
                            {tags?.map((tag, idx) => (
                                <p
                                    key={idx}
                                    className={`leading-5 dark:border text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50  `}
                                >
                                    {tag}
                                </p>
                            ))}
                        </div>
                    </>
                </div>
            </div>

        </a>
    )
}
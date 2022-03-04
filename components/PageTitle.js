import React from "react";

export default ({ title, quotes }) => (
    <>
        <h1 className=" text-5xl md:text-7xl font-bold md:py-15 sm:py-5 text-center">
            {title}
        </h1>

        <h2 className=" text-xl md:text-3xl text-gray-200 font-italic md:py-5 text-center">
            {quotes}
        </h2>
    </>

)


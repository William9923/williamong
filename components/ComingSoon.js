import React from 'react';

const gif = "gif/coming-soon.gif";

export default function ComingSoon() {
    return (
        <>
            <div className="py-5">
                <h2 className="text-xl md:text-3xl font-bold md:py-15 sm:py-5 text-center">
                    Coming Soon...
                </h2>
                <h3 className=" text-lg md:text-xl text-gray-400 font-italic md:pb-5 text-center">
                    We still working to complete this features...
                </h3>
            </div>
            <div className="flex justify-center">
                <img
                    src={gif}
                    alt={"Feature in Progress..."}
                    width={500}
                    height={400}
                />
            </div>


        </>

    )
}
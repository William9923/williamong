import React from "react";
import colors from "@constants/colors";
import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";

export default ({ pageKey, title, quotes }) => (
    <>
        <RoughNotationGroup show={true}>
            <h1 className=" text-5xl md:text-7xl font-bold md:py-15 sm:py-5 text-center">
                <RainbowHighlight color={colors[pageKey]}>
                    {title}
                </RainbowHighlight>
            </h1>
        </RoughNotationGroup>
        <h2 className=" text-xl md:text-3xl text-gray-400 font-italic md:py-5 text-center">
            {quotes}
        </h2>
    </>

)

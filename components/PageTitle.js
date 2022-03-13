import React, {useState, useEffect} from "react";
import { RoughNotationGroup } from "react-rough-notation";

import { RainbowHighlight } from "@components/ui/RainbowHighlight";
import colors from "@constants/colors";
export default function PageTitle({ title, quotes }) {
    const [mount, setMount] = useState(false);
    useEffect(() => {
        setMount(true);
    }, []);
    return (
        <>
            <RoughNotationGroup show={mount}>
                <h1 className=" text-5xl md:text-7xl font-bold py-5 md:py-10  text-center">
                    <RainbowHighlight color={getRandomColor(colors)}>
                        {title}
                    </RainbowHighlight>
                </h1>
            </RoughNotationGroup>
            <h2 className=" text-xl md:text-3xl text-gray-400 font-italic pt-5 md:py-5 text-center">
                {quotes}
            </h2>
        </>

    )
}

const getRandomColor = (colors) => colors[Math.floor(Math.random() * colors.length)]
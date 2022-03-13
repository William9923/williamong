import React, {useState, useEffect} from 'react';

import { RoughNotationGroup } from "react-rough-notation";
import { UnderlineHighlight } from './ui/UnderlineHighlight';
import colors from "@constants/colors";

export default function SectionTitle({ title }) {
    const [mount, setMount] = useState(false);
    useEffect(() => {
        setMount(true);
    }, []);
    return (
        <div className="flex justify-center">
            <RoughNotationGroup show={mount}>
                <UnderlineHighlight color={getRandomColor(colors)}>
                    <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black">
                        {title}
                    </h3>
                </UnderlineHighlight>

            </RoughNotationGroup>
        </div>
    )
}

const getRandomColor = (colors) => colors[Math.floor(Math.random() * colors.length)]
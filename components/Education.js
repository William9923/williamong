import React from 'react';

import Subtitle from "@components/ui/Subtitle";
import Step from "@components/ui/Step";
import { ThinDivider } from "@components/Divider";
import { HoverItemBlack } from './ui/HoverItem';
import SectionTitle from './SectionTitle';

export default function Education() {
    return (
        <>
            <SectionTitle title={"Education"} />
            <br></br>
            <Subtitle>Institut Teknologi Bandung</Subtitle>
            <ul>
                <Step title="Bachelor of Informatics (Computer Science) 🤘🏻">
                    Current GPA: 3.95/4.0
                    <br/>
                    Period: Aug 2018 - July 2022 (expected)
                    <br />
                    <HoverItemBlack><a href="/transcript.pdf" target="_blank">See Transcript →</a></HoverItemBlack> 
                </Step>
            </ul>
            <div className='pb-4 md:pb-8'></div>
        </>
    );


} 
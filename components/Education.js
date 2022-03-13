import React from 'react';

import Subtitle from "@components/ui/Subtitle";
import Step from "@components/ui/Step";
import { ThinDivider } from "@components/Divider";
import SectionTitle from './SectionTitle';

export default function Education() {
    return (
        <>
            <SectionTitle title={"Education"} />
            <ThinDivider />
            <Subtitle>Institut Teknologi Bandung</Subtitle>
            <ul>
                <Step title="Bachelor of Informatics (Computer Science) 🤘🏻">
                    Current GPA: 3.94/4.0 
                </Step>
            </ul>
            <div className='pb-4 md:pb-8'></div>
        </>
    );


} 
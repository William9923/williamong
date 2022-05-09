import React from 'react';

import Subtitle from "@components/ui/Subtitle";
import Step from "@components/ui/Step";
import { ThinDivider } from "@components/Divider";
import SectionTitle from '@components/SectionTitle';

export default function Achievement() {
    return (
        <>
            <SectionTitle title={"Achievement"} />
            <br></br>
            <Subtitle>National</Subtitle>
            <ul>
                <Step title="3rd rank, Gemastik Data Mining Competition (2019)">
                    Developed a deep learning model to identify
                    differences between leaves
                </Step>
                <Step title="Best Paper, National Data Summit (2019). ">
                    Developed a new way to handle and process waste with deep
                    learning.
                </Step>
                <Step title="Top 15, National Data Science Competition Shopee (2020).">
                    Matching payment using fuzzy search & Create apriori algorithm to calculate market basket confidence
                </Step>
            </ul>
            <div className='pb-4 md:pb-8'></div>
        </>
    );


} 
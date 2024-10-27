import React from "react";

import Subtitle from "@components/ui/Subtitle";
import Step from "@components/ui/Step";
import SectionTitle from "@components/SectionTitle";

export default function Achievement() {
  return (
    <>
      <SectionTitle title={"Award & Leadership"} />
      <br></br>
      <ul>
        <Step
          title="Value Star Awardee (2023)."
          certificate={"/certificate/value_star_awardee.pdf"}
        > Received award for examplifying company values, showing great ownership for the work given as an engineer
        </Step>
        <Step
          title="Head of Data Competition Events (2021)"
          certificate={"/certificate/arkavidia.pdf"}
        >
        Act as the head division on Datavidia, one of the data science competitions held by ITB during Arkavidia. 
        </Step>
        <Step
          title="3rd rank, Gemastik Data Mining Competition (2019)"
          certificate={"/certificate/gemastik.pdf"}
        >
        Build a deep learning model to separate different types of waste based on how they were processed using their image with Convolution Neural Network (CNN
        </Step>
        <Step title="Top 15, National Data Science Competition Shopee (2020).">
          Matching payment using fuzzy search & Create apriori algorithm to
          calculate market basket confidence
        </Step>
      </ul>
      <div className="pb-4 md:pb-8"></div>
    </>
  );
}

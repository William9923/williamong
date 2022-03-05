import React from "react";
import PageTitle from "@components/PageTitle";
import ComingSoon from "@components/ComingSoon";

const title = "Blogs"
const quotes = "Because learning from the past is the key to the future"
export default function Contact() {
  return (
    <section className="bg-white flex flex-col justify-center">
      <div className="max-w-6xl mx-auto h-48 bg-white">
        <PageTitle title={title} quotes={quotes} />
      </div>
      <div className="flex flex-col justify-center">
        <ComingSoon />
      </div>
    </section>
  );
}
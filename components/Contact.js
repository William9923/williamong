import React from "react";
import PageTitle from "@components/PageTitle";
import Divider from "@components/Divider";
import SectionTitle from "@components/SectionTitle";

const title = "Contact Me!";
const quotes = "Feel free to ask me about anything...";
export default function Contact({ email, phoneNumber }) {
  return (
    <div className="bg-white flex flex-col justify-start" id="contact">
      <div className="max-w-6xl mx-auto bg-white">
        <SectionTitle title={title} />
      </div>

      <div className="flex flex-col md:flex-row my-10">
        <div className="w-full md:w-1/2 text-center md:text-left py-2">
          <EmailContactInfo email={email} />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-right py-2">
          <WhatsAppContactInfo phoneNumber={phoneNumber} />
        </div>
      </div>
    </div>
  );
}

const WhatsAppContactInfo = ({ phoneNumber }) => (
  <div className="flex flex-col mx-5 px-5">
    <h5 className="text-lg md:text-xl font-bold text-gray-900">
      Want to personally add me as your contact? Let's chat.
    </h5>
    <p className="my-1 text-gray-800">
      Drop your message and let's discuss about anything.
    </p>
    <a
      href={`https://wa.me/${phoneNumber}?text=I want to hire/learn more about you!`}
      target="_blank"
      className="hover:scale-110 mt-4 px-4 text-center w-full font-bold h-8 bg-green-400 text-gray-900 py-1 rounded"
      type="submit"
    >
      Chat on WhatsApp 💬
    </a>
  </div>
);

const EmailContactInfo = ({ email }) => (
  <div className="flex flex-col mx-5 px-5">
    <h5 className="text-lg md:text-xl font-bold text-gray-900">
      Feel free to drop an email to me if you are interested to hire me!
    </h5>
    <p className="my-1 text-gray-800">
      We can discuss about my skills and whether it will help your
      company/project!.
    </p>
    <a
      href={`mailto:${email}?subject=I want to hire/learn more about you!`}
      target="_blank"
      className="hover:scale-110 mt-4 px-4 text-center w-full font-bold h-8 bg-blue-400 text-gray-900 py-1 rounded"
      type="submit"
    >
      Go to Email ✈️
    </a>
  </div>
);

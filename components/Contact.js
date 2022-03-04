import React from "react";
import PageTitle from "./PageTitle";

const pageKey = 3
const title = "Contact Me!"
const quotes = "Lets talk about anything! Or Hire Me!"

export default function Contact() {
  return (
    <section className="bg-white flex flex-col justify-center">
      <div className="max-w-6xl mx-auto h-48 bg-white">
        <PageTitle pageKey={pageKey} title={title} quotes={quotes} />
      </div>

      <div className="flex flex-row my-10">
        <div className="w-1/2 text-left">
          <EmailContactInfo email={"williamong1400@gmail.com"} />

        </div>

        <div className="w-1/2 text-right">
          <WhatsAppContactInfo phoneNumber={"6282112411431"} />

        </div>
      </div>

    </section>
  );
}

const WhatsAppContactInfo = ({ phoneNumber }) => (
  <div className="flex flex-col mx-5 px-5">
    <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
      Want to personally add me as your contact? Let's chat.
    </h5>
    <p className="my-1 text-gray-800 dark:text-gray-200">
      Drop your message and let's discuss about anything.
    </p>
    <a
      href={`https://wa.me/${phoneNumber}?text=I want to learn more about you!`}
      target="_blank"
      className="mt-4 px-4 text-center w-full font-bold h-8 bg-green-400 dark:bg-green-400 text-gray-900 py-1 dark:text-gray-900 rounded"
      type="submit"
    >
      Chat on WhatsApp 💬
    </a>
  </div>
)

const EmailContactInfo = ({ email }) => (
  <div className="flex flex-col mx-5 px-5">
    <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
      Feel free to drop an email to me if you are interested to hire me!
    </h5>
    <p className="my-1 text-gray-800 dark:text-gray-200">
      We can discuss about my skills and wether it will help your company/project!.
    </p>
    <a
      href={`mailto:${email}?subject=I want to hire/learn more about you!`}
      target="_blank"
      className="mt-4 px-4 text-center w-full font-bold h-8 bg-blue-400 dark:bg-blue-400 text-gray-900 py-1 dark:text-gray-900 rounded"
      type="submit"
    >
      Go to Email ✈️
    </a>
  </div>
)

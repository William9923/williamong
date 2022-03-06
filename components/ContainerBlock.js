import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const meta = {
  title: "William - Software Engineer",
  description: `I've been developing software system from 2020 and will keep learning. Get in touch with me to know more about my journey...`,
  image: "/avatar.jpg",
  type: "website",
  date: "2022"
}

export default function ContainerBlock({ children, misc, ...customMeta }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="William Home" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="w-full">
        <Navbar />
        <div>{children}</div>
        <Footer misc={misc} />
      </main>
    </div>
  );
}

import React from "react";
import { FiGithub, FiTwitter, FiSlack, FiLinkedin } from "react-icons/fi";

import PageTitle from "@components/PageTitle";

import SectionTitle from "@components/SectionTitle";

const title = "Projects."
const quotes = "Because learning is a lifetime process."

const featuredProjects = [
  {
    title: "Working Out",
    desc: "An android application that can motivate you to workout (running/cycling)",
    link: "https://github.com/William9923/WorkingOut",
    imgUrl: "https://github.com/William9923/WorkingOut/blob/master/docs/workout.gif?raw=true",
    tags: ["android", "kotlin", "workout"]
  },
  {
    title: "Working Out",
    desc: "An android application that can motivate you to workout (running/cycling)",
    link: "https://github.com/William9923/WorkingOut",
    imgUrl: "https://github.com/William9923/WorkingOut/blob/master/docs/workout.gif?raw=true",
    tags: ["android", "kotlin", "workout"]
  },
  {
    title: "Working Out",
    desc: "An android application that can motivate you to workout (running/cycling)",
    link: "https://github.com/William9923/WorkingOut",
    imgUrl: "https://github.com/William9923/WorkingOut/blob/master/docs/workout.gif?raw=true",
    tags: ["android", "kotlin", "workout"]
  },

]

const images = ['https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80', 'https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80']

// TODO: Handle Featured Projects & Only show featured project on small device...
const SmallCard = ({ title, desc, link, imgUrl, tags }) => {
  return (
    <a href={link} target="_blank">
      <div className="group shadow-xl hover:shadow hover:scale-105 rounded-md shadow-custom border-2 border-[#212121]">
        <div className="flex flex-col items-center md:flex-row">
          {(imgUrl != "" && imgUrl != undefined) && (
            <div className="relative">
              <img
                className="object-fill h-48 w-96 hidden group-hover:block group-hover:opacity-75 overflow-y-hidden"
                src={imgUrl}
                alt={title}
              />
              <div className="absolute hidden group-hover:block bottom-0 right-0 bg-blue-200 text-sm text-black hover:text-white p-2 rounded-full hover:bg-blue-500 m-2">
                <FiGithub size={25} />
              </div>
            </div>
          )}

          <div className="flex flex-col justify-between p-2 sm:p-4 block group-hover:hidden">

            <div className="mb-4">
              <div className="text-black font-bold text-xl mb-2">{title}</div>
              <p className="text-grey-darker text-base">{desc}</p>
            </div>
            <div className="pt-2 pb-1">
              {(tags != undefined && tags.length > 0) && tags.map((tag, idx) => (
                <button key={idx} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:scale-110">#{tag}</button>
              ))}
            </div>

          </div>

        </div>
      </div >
    </a>
  )
}


// TODO: Adjust with this..https://tailwind-elements.com/docs/standard/components/carousel/
const Carousel = () => {
  // We will start by storing the index of the current image in the state.
  const [currentImage, setCurrentImage] = React.useState(0);

  // We are using react ref to 'tag' each of the images. Below will create an array of
  // objects with numbered keys. We will use those numbers (i) later to access a ref of a
  // specific image in this array.
  const refs = images.reduce((acc, val, i) => {
    acc[i] = React.createRef();
    return acc;
  }, {});

  const scrollToImage = (i) => {
    // First let's set the index of the image we want to see next
    setCurrentImage(i);
    // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,
    // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into
    // your current view! To do so we pass an index of the image, which is then use to identify our current
    // image's ref in 'refs' array above.
    refs[i].current.scrollIntoView({
      //     Defines the transition animation.
      behavior: "smooth",
      //      Defines vertical alignment.
      block: "nearest",
      //      Defines horizontal alignment.
      inline: "start",
    });
  };

  // Some validation for checking the array length could be added if needed
  const totalImages = images.length;

  // Below functions will assure that after last image we'll scroll back to the start,
  // or another way round - first to last in previousImage method.
  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
  const arrowStyle =
    "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

  // Let's create dynamic buttons. It can be either left or right. Using
  // isLeft boolean we can determine which side we'll be rendering our button
  // as well as change its position and content.
  const sliderControl = (isLeft) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
      style={{ top: "40%" }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
        {isLeft ? "◀" : "▶"}
      </span>
    </button>
  );

  return (
    <div className="w-screen flex justify-center">
      <div className="p-12 flex justify-center w-screen md:w-1/2 items-center">
        <div className="relative w-full">
          <div className="carousel">
            {sliderControl(true)}
            {images.map((img, i) => (
              <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
                <img src={img} className="w-full object-contain" />
              </div>
            ))}
            {sliderControl()}
          </div>
        </div>
      </div>
    </div>
  );
};


export default function Projects({ data }) {
  const projects = data.projects.sort((x, y) => y.idx - x.idx)

  return (
    <div className="bg-white flex flex-col justify-center" id="projects">
      {/* Carousel for projects... */}
      <div className="max-w-6xl mx-auto bg-white">
        <PageTitle title={title} quotes={quotes} />
      </div>
      <Carousel />
      {/* Featured Projects */}
      <SectionTitle title={"Featured Projects"} />
      <div className="flex flex-col md:flex-row justify-between py-5 pb-10">
        {
          featuredProjects.map((proj) => (
            <div className="md:w-1/3 my-4 mx-2">
              <SmallCard
                title={proj.title}
                link={proj.link}
                desc={proj.desc}
                imgUrl={proj.imgUrl}
                key={proj.idx}
                tags={proj.tags}
              />
            </div>
          ))}
      </div>
    </div>
  )
}
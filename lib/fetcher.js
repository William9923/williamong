import achievements from "@data/achievement.js";
import contact from "@data/contact";
import experience from "@data/experience";
import projects from "@data/projects";
import user from "@data/user.js";

/* In Memory Cache */
let homePageData;
let experiencePageData;
let contactPageData;
let projectPageData;
let blogPageData;
let miscData;

export const fetchMiscData = () => {
  if (miscData != undefined && miscData != null) {
    return miscData;
  }

  try {
    const userData = user;
    const contactData = contact;

    const contacts = contactData.contacts;
    const name = userData.name;
    const url = userData.personalURL;
    const github = contacts.find((elem) => elem.name === "github")["value"];
    const linkedin = contacts.find((elem) => elem.name === "linkedin")["value"];
    const pn = contacts.find((elem) => elem.name === "wa")["value"];
    const data = {
      name: name,
      personalURL: url,
      ref: [
        {
          name: "github",
          value: github,
        },
        {
          name: "linkedin",
          value: linkedin,
        },
        {
          name: "wa",
          value: `https://wa.me/${pn}?text=Hi I want to talk to you!`,
        },
      ],
    };
    miscData = data;
    return miscData;
  } catch (err) {
    console.log(err);
    return {};
  }
};

export const fetchHomeData = () => {
  if (homePageData != undefined && homePageData != null) {
    return homePageData;
  }

  try {
    const userData = user;
    const data = {
      name: userData.name,
      profileDataUrl: {
        resumeUrl: userData.resumeURL,
        githubUrl: userData.githubURL,
      },
      avatar: userData.avatarURL,
      designation: userData.designation,
      description: userData.description,
      profileDetails: userData.profileDetails,
    };
    homePageData = data;
    return homePageData;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const fetchExperienceData = () => {
  if (experiencePageData != undefined && experiencePageData != null) {
    return experiencePageData;
  }

  try {
    const expData = experience;
    const data = expData;
    experiencePageData = data;
    return experiencePageData;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const fetchContactData = () => {
  if (contactPageData != undefined && contactPageData != null) {
    return contactPageData;
  }

  try {
    const contactData = contact;
    const contacts = contactData.contacts;

    const pn = contacts.find((elem) => elem.name === "wa")["value"];
    const email = contacts.find((elem) => elem.name === "email")["value"];

    const data = {
      pn: pn,
      email: email,
    };
    contactPageData = data;
    return contactPageData;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const fetchProjectsData = () => {
  if (projectPageData != undefined && projectPageData != null) {
    return projectPageData;
  }

  try {
    const projectData = projects;
    const data = projectData;
    projectPageData = data;
    return projectPageData;
  } catch (err) {
    console.log(err);
    return null;
  }
};

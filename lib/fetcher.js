import readFile from "@lib/readFile";
import filename from "@constants/filename";
import link from "next/link";

/* In Memory Cache */
let homePageData;
let experiencePageData;
let contactPageData;
let projectPageData;
let blogPageData;
let miscData;

const promiseFetchData = (filename) => readFile(filename);
const promiseFetchUserData = async () => promiseFetchData(filename["user"]);
const promiseFetchContactData = async () => promiseFetchData(filename["contact"]);
const promiseFetchExperienceData = async () => promiseFetchData(filename["experience"]);
const promiseFetchProjectsData = async () => promiseFetchData(filename["projects"]);

export const fetchMiscData = async () => {

    if (miscData != undefined && miscData != null) {
        return miscData
    }

    try {
        const [userData, contactData] = await Promise.all([promiseFetchUserData(), promiseFetchContactData()]);
        const parsedUserData = JSON.parse(userData)
        const parsedContactData = JSON.parse(contactData)
        const contacts = parsedContactData.contacts
        const name = parsedUserData.name
        const url = parsedUserData.personalURL
        const github = contacts.find((elem) => (elem.name === "github"))["value"]
        const linkedin = contacts.find((elem) => (elem.name === "linkedin"))["value"]
        const pn = contacts.find((elem) => (elem.name === "wa"))["value"]
        const data = {
            name: name,
            personalURL: url,
            ref: [
                {
                    name: "github",
                    value: github
                },
                {
                    name: "linkedin",
                    value: linkedin,
                },
                {
                    name: "wa",
                    value: `https://wa.me/${pn}?text=Hi I want to talk to you!`
                }
            ]
        }
        miscData = data;
        return miscData

    } catch (err) {
        console.log(err)
        return {}
    }
}

export const fetchHomeData = async () => {

    if (homePageData != undefined && homePageData != null) {
        return homePageData
    }

    try {
        const [userData, projectData] = await Promise.all([promiseFetchUserData(), promiseFetchProjectsData()])
        const parsedUserData = JSON.parse(userData)
        const parsedProjectData = JSON.parse(projectData)
        const data = {
            name: parsedUserData.name,
            profileDataUrl: {
                resumeUrl: parsedUserData.resumeURL,
                githubUrl: parsedUserData.githubURL,
            },
            avatar: parsedUserData.avatarURL,
            designation: parsedUserData.designation,
            description: parsedUserData.description,
            profileDetails: parsedUserData.profileDetails
        }
        homePageData = data
        return homePageData
    } catch (err) {
        console.log(err)
        return null
    }
}

export const fetchExperienceData = async () => {

    if (experiencePageData != undefined && experiencePageData != null) {
        return experiencePageData
    }

    try {
        const expData = await promiseFetchExperienceData()
        const parsedExpData = JSON.parse(expData)
        const data = parsedExpData
        experiencePageData = data
        return experiencePageData
    } catch (err) {
        console.log(err)
        return null
    }
}

export const fetchContactData = async () => {

    if (contactPageData != undefined && contactPageData != null) {
        return contactPageData
    }

    try {
        const contactData = await promiseFetchContactData()
        const parsedContactData = JSON.parse(contactData)
        const contacts = parsedContactData.contacts

        const pn = contacts.find((elem) => (elem.name === "wa"))["value"]
        const email = contacts.find((elem) => (elem.name === "email"))["value"]

        const data = {
            pn: pn,
            email: email
        }
        contactPageData = data
        return contactPageData
    } catch (err) {
        console.log(err)
        return null
    }
}

export const fetchProjectsData = async () => {
    if (projectPageData != undefined && projectPageData != null) {
        return projectPageData
    }

    try {
        const projectData = await promiseFetchProjectsData()
        const parsedProjectData = JSON.parse(projectData)
        const data = parsedProjectData
        projectPageData = data
        return projectPageData
    } catch (err) {
        console.log(err)
        return null
    }

}

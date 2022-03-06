import readFile from "@lib/readFile";
import filename from "@constants/filename";

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

    try {
        const [userData, contactData] = await Promise.all([promiseFetchUserData(), promiseFetchContactData()]);
        const parsedUserData = JSON.parse(userData)
        const parsedContactData = JSON.parse(contactData)
        const contacts = parsedContactData.contacts

        const url = parsedUserData.personalURL
        const github = contacts.find((elem) => (elem.name === "github" && elem.type === "url"))["value"]
        const linkedin = contacts.find((elem) => (elem.name === "linkedin" && elem.type === "url"))["value"]
        const pn = contacts.find((elem) => (elem.name === "wa" && elem.type === "text"))["value"]
        const data = {
            "personalURL": url,
            "githubURL": github,
            "linkedinURL": linkedin,
            "waURL": `https://wa.me/${pn}?text=Hi I want to talk to you!`
        }
        miscData = data;
        return miscData

    } catch (err) {
        console.log(err)
        return {}
    }
}

export const fetchHomeData = async () => {

    try {
        const [userData, projectData] = await Promise.all([promiseFetchUserData(), promiseFetchProjectsData()])
        const parsedUserData = JSON.parse(userData)
        const parsedProjectData = JSON.parse(projectData)
        const data = {
            "name": parsedUserData.name,
            "resume": parsedUserData.resumeURL,
            "avatar": parsedUserData.avatarURL,
            "designation": parsedUserData.designation,
            "description": parsedUserData.description,
            "profileDetails": parsedUserData.profileDetails
        }
        homePageData = data
        return homePageData
    } catch (err) {
        console.log(err)
        return {}
    }
}

export const 

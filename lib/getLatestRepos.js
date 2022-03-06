import axios from "axios";

const getLatestRepos = async (data, token) => {
  try {
    const username = data.githubUsername;

    // let token = `token ${process.env.GITHUB_AUTH_TOKEN}`;
    // console.log("TOKEN", token);

    let headers = {}
    if (token) {
      headers = {
        Authorization: `token ${token}`,
      }
    }

    const res = await axios.get(
      `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
      {
        headers: headers,
      }
    );
    let repos = res.data.items;
    let latestSixRepos = repos.splice(0, 6);

    return latestSixRepos;
  } catch (err) {
    console.log(err);
  }
};

export default getLatestRepos;

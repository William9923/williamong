import fs from "fs";
const fsPromises = fs.promises;

const readFile = (path) => fsPromises.readFile(path, "utf8");

export default readFile;
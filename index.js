
let generateMarkdown = require("./generateMarkdown.js")
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// function writeToFile(fileName, data) {

//   const md = inquirer.prompt(data);
//   return writeFileAsync("readme.md", md)

// }

// writeToFile();



async function init() {
  try { 

    const md = await generateMarkdown.functionTwo();

    await writeFileAsync("readme.md", md)

  } catch (err) {
    console.log(err);
  }

}

init();


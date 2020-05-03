const inquirer = require("inquirer");
import { generateMarkdown } from './generateMarkdown';
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function userQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
      },
      {
        type: "input",
        message: "What is your project name?",
        name: "title"
      },
      {
        type: "input",
        message: "Write a short description of your project.",
        name: "description"
      },
      {
        type: "checkbox",
        message: "What kind of license should your project have?",
        name: "license",
        choices: [
          "MIT",
          "APACHE 2.0",
          "GPL 3.0",
          "BSD 3",
          "None"
        ]
      },
      {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "dependencies"
      },
      {
        type: "input",
        message: "Please provide the instructions on usage of the application",
        name: "usage"
      },
      {
        type: "input",
        message: "What command should be run to run tests?",
        name: "test"
      },
      {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "project"
      }
    ])
}

function writeToFile(fileName, data) {

  const md = inquirer.prompt(answers);
  return writeFileAsync("readme.md", md)

}

writeToFile();

async function init() {
  try {
    const answers = await userQuestions();

    const md = await generateMarkdown(answers);

    await writeToFileAsync("readme.md", md)

  } catch (err) {
    console.log(err);
  }

}

init();


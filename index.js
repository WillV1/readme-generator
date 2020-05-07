const inquirer = require("inquirer");
let api = require("./api.js");
let generateMarkdown = require("./generateMarkdown.js")
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);


function promptUser() {

  return inquirer.prompt([
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username"
    },
    {
      type: "input",
      message: "What is your GitHub email?",
      name: "email"
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
      message: "Please provide the instructions on usage of the application.",
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


function init() {

  promptUser()

    .then(function (data) {
      api.apiCall(data.username)
        .then(function (avatar) {
          const url = (avatar.data.avatar_url)
          console.log(data)
          return writeFileAsync("README.md", generateMarkdown(data, url));
        })

    })

}

init();


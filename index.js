var inquirer = require("inquirer");
var api = require("./api.js");
var fs = require("fs");
var path = require("path");

const questions = [
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
    ]),
];

// function writeToFile(fileName, data) {
//     fs.writeFileSync(path.join(__dirname, fileName), data)

// }

// function init() {
// inquirer.prompt(questions)
// .then(data => {
//     console.log(data.username);
//     var imageURL = ''
//     api.getUser(data.username).then(data => { imageURL = (data.data.avatar_url)});

// writeToFile("readme.md", "GitHub")

// }) 

// }

// init();


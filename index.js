var inquirer = require("inquirer");
var fs = require("fs");
var path = require("path");

const questions = [
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
      },
    //   {
    //     type: "input",
    //     message: "What is your GitHub e-mail address?",
    //     name: "email"
    //   }
];

function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(__dirname, fileName), data)

}

function init() {
inquirer.prompt(questions)
.then(data => {
    console.log(data)
writeToFile("readme.md", "GitHub")

}) 

}

init();

module.exports = questions;
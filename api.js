const inquirer = require("inquirer");
const axios = require("axios");

function apiCall() {

    inquirer.prompt([
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        }
    ])
    
        .then(function (data) {
            axios.get('https://api.github.com/users/' + data.username)
                .then(response => {
                    console.log(response.data.avatar_url);
                })
                .catch(error => {
                    console.error(error);
                });


        }
        )}

        apiCall();

        module.exports = apiCall;
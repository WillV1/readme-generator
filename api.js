const inquirer = require("inquirer");
const axios = require("axios");

function apiCall(username) {
    
        .then(function (data) {
            axios.get('https://api.github.com/users/' + data.username)
                .then(response => {
                    console.log(response.data.avatar_url);
                    console.log(response.data.email);
                })
                .catch(error => {
                    console.error(error);
                });


        }
        )}

        module.exports = apiCall;
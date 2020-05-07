const inquirer = require("inquirer");
const axios = require("axios");

const api = {


    apiCall(username) {
        return axios.get('https://api.github.com/users/' + username)
            .catch(error => {
                console.error(error);
            });
    }
}



module.exports = api;
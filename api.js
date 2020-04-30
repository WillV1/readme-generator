var axios = require("axios");
var questions = require("./index.js");

const api = {
  getUser(username) {

async function getEmail () {
  try {
    var email = await axios.get('https://api.github.com/users/' + username + '/events/public')
      console.log(response.email);
      var image = await axios.get('https://api.github.com/users/' + username + '/events/public')
      console.log(response.avatar_url);
  } catch (error) {
    console.error(error)
  }
}

getEmail()    
    
  }
};

module.exports = api;

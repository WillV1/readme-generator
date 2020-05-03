var axios = require("axios");


const api = {
    getUser(username) {

        function getInfo() {

            axios.get('https://api.github.com/users/' + username)
                .then(response => {
                    console.log(response.data.avatar_url);
                    console.log(response.data.email);
                })

                .catch(error => {
                    console.error(error);
                });




        };
        getInfo();
    }

}

module.exports = api;

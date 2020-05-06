let api = require("./api.js");

let apiAnswers = api.apiCall();


  function generateMarkdown(data) {

    return `
  # ${data.title}

  ## Description
  
  ${data.description}

  ## Table of Contents

  * [Installation]

  * [Usage]
  
  * [License]

  * [Contributing]

  * [Tests]

  * [Questions]

  ## Installation 

  To install necessary dependencies, run the following command: 

  ```

      `${data.dependencies}

  ```

      `## Usage

  ${data.usage}

  ## License

  This project is licensed under the ${data.license} license.

  ## Contributing 

  ${data.project}

  ## Tests 

  To run tests, run the following command:

  ```

      `${data.test}

  ```

      `Questions

  ${response.data.avatar_url}

  If you have any questions about the repo, open an issue or contact ${data.username} directly at ${response.data.email}.

  `;
  }


 module.exports = generateMarkdown;
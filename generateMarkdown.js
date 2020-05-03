var api = require("./api.js");

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

  ${data.avatar_url}

  If you have any questions about the repo, open an issue or contact ${username} directly at ${data.email}.

  `;
  }

  export {generateMarkdown};
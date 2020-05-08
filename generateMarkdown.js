function generateMarkdown(data, url) {
    console.log(data);
    return `
# ${data.title}

[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})

## Description
  
${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
  
* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation 

To install necessary dependencies, run the following command: 

\`\`\`

${data.dependencies}

\`\`\`

## Usage

${data.usage}

## License

This project is licensed under the ${data.license} license.

## Contributing 

${data.project}

## Tests 

To run tests, run the following command:

\`\`\`

${data.test}

\`\`\`

## Questions

<img src ="${url}" alt="Github profile image" width="50px" height="50px" />

If you have any questions about the repo, open an issue or contact ${data.username} directly at ${data.email}.

`;
}




module.exports = generateMarkdown;
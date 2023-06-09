// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if (license === 'GPLv2') {
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  }
  if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'BSD 3-clause') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } 
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return ''
  } else {
    return '* [Lincense](#lincense)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if( license === 'none' ){
    return ''
  } else {
    return `### Lincese
    ${renderLicenseBadge(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ### Description
  ${data.description}

  ## Table of contents

  * [Installantion](#installation)

  * [Usage](#usage)

  * [Credits](#credits)
  ${renderLicenseLink(data.license)}
  * [Github](#github)
  
  * [Email](#email)



  ### Installation
  ${data.installation}

  ### Usage
  ${data.usage}

  #### Credits
  ${data.credits}

  ${renderLicenseSection(data.license)}

  #### Github
  ${data.github}

  #### Email
  ${data.email}
`;
}

module.exports = generateMarkdown;

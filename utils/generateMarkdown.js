// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `https://img.shields.io/badge/license-${license}-blue`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink;

  switch(license) {
    case 'MIT':
      licenseLink = 'https://www.mit.edu/~amini/LICENSE.md';
      break;

    case 'CPOL':
      licenseLink = 'https://www.codeproject.com/info/cpol10.aspx';
      break;

    case 'CDDL':
      licenseLink = 'https://opensource.org/licenses/CDDL-1.0';
      break;

    case 'Ms-PL':
      licenseLink = 'https://opensource.org/licenses/MS-PL';
      break;

    case 'MPL':
      licenseLink = 'https://www.mozilla.org/en-US/MPL/1.1/';
      break;

    case 'CPL':
      licenseLink = 'https://opensource.org/licenses/cpl1.0.php';
      break;

    case 'Eclipse':
      licenseLink = 'https://www.eclipse.org/legal/epl-v10.html';
      break;

    case 'Apache':
      licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0';
      break;

    default:
      licenseLink = 'Cannot detect link!';
  }

  return `[${license}](${licenseLink})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `![](${renderLicenseBadge(license)})
  ![](${renderLicenseLink(license)})
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `  
# ${response.title}
${renderLicenseSection(response.license)}

## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Lisence](#Lisence)
* [Contributors](#Contributors)
* [Test](#Test)
* [Questions](#Questions)

## Description
${response.description}

## Installation
${response.installation}

## Usage
${response.usage}

## License
${response.licensename}

## Contributors
${response.contribution}

## Tests
${response.test}

## Questions
For any questions about this project, contact me at:
- Github:[${response.github}](https://github.com/myly-2306)
- Email:[${response.email}]
`;
}

module.exports = generateMarkdown;

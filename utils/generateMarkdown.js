// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `https://img.shields.io/badge/License-${license}-yellow.svg`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
     ${data.username}

## description
${data.description}

## installation instructions
${data.installation}

## usage information
${data.usage}

## contribution guidelines
${data.contributions}

## test instructions
${data.test}

#### License
${data.licenses}

`;
}

module.exports = generateMarkdown;

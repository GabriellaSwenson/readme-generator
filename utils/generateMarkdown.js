// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  "None",
    "Apache",
    "GNU",
    "MIT",
    "BSD 2",
    "BSD 3",
    "BSL",
    "CCZ",
    "EPL",
    "GNU A",
    "GNU G",
    "GNU L",
    "MPL",
    "Unlicense";
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

`;
}

module.exports = generateMarkdown;

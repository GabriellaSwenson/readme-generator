// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the TITLE of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is your USERNAME?",
    name: "username",
  },
  {
    type: "input",
    message: "What is the DESCRIPTION?",
    name: "description",
  },
  {
    type: "input",
    message: "How do you properly INSTALL it?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is the USAGE INFORMATION?",
    name: "usage",
  },
  {
    type: "input",
    message: "What are the CONTRIBUTION GUIDELINES?",
    name: "contributions",
  },
  {
    type: "input",
    message: "What are the TEST INSTRUCTIONS?",
    name: "test",
  },
  {
    type: "checkbox",
    message: "What license are you using?",
    name: "licenses",
    choices: [
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
      "Unlicense",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  //console.log(fileName, data);
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    //console.log(response)
    const createPage = generateMarkdown(data);
    //console.log(createPage);
    writeToFile("./readmes/README.md", createPage);
  });
}

// Function call to initialize app
init();

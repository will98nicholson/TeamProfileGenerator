const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML')
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of this project?"
    },

    {
        type: "input",
        name: "Description",
        message: "Please provide a description of your project."
    },
    {
        type: "input",
        name: "Installation",
        message: "Please provide instructions for how this application is to be installed."
    },
    {
        type: "input",
        name: "Usage",
        message: "Please provide information on how users should be using this application."
    },

];




function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            const markDown = generateMarkdown(response);


            writeToFile('README.md', markDown)

        })

}


init();
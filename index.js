const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML')
const intern = require('./employeeclasses/intern')
const Engineer = require('./employeeclasses/engineer')
const Intern = require('./employeeclasses/intern')
const team = [];
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },

    {
        type: "input",
        name: "ID",
        message: "Please input your employee ID"
    },
    {
        type: "input",
        name: "Email",
        message: "Please provide your email."
    },
    {
        type: "input",
        name: "officenumber",
        message: "Please provide your office number."
    },

];
const questionsEmployee = [
    {
        type: "list",
        name: "title",
        message: "What type of employee would you like to add?",
        choices: ["intern", "engineer", "generate HTML"]
    },

];

function askEmployee() {
    inquirer.prompt(questionsEmployee)
        .then((response) => {
            switch (response.type) {
                case "intern":
                    inquierer.prompt.then((response) => {
                        const intern = new Intern(response.name, response.ID, response.Email, response.school)
                        console.log(intern);
                        team.push(intern);
                        askEmployee();
                    })
                    break
                case "engineer":
                    inquierer.prompt.then((response) => {
                        const engineer = new Engineer(response.name, response.ID, response.Email, response.github)
                        console.log(engineer);
                        team.push(engineer);
                        askEmployee();
                    })
                    break
                case "generate HTML":
                    console.log(team)
                    writeToFile('team.html', generateHTML(team))


            }
        })
}


function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            //const markDown = generateMarkdown(response);
            const intern = new intern(response.name, response.ID, response.Email, response.officenumber)
            console.log(intern);
            team.push(intern);
            askEmployee();



            writeToFile('README.md', markDown)

        })

}


init();
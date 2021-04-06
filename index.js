const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML')
const Manager = require('./employeeclasses/manager')
const Engineer = require('./employeeclasses/engineer')
const Intern = require('./employeeclasses/intern')
const team = [];
//initial manager questions, assumes first employee input is for the manager
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
const questionsEngineer = [


    {
        type: "input",
        name: "name",
        message: "What is the name?"
    },

    {
        type: "input",
        name: "ID",
        message: "Please input the employee ID"
    },
    {
        type: "input",
        name: "Email",
        message: "Please provide the email."
    },
    {
        type: "input",
        name: "githubID",
        message: "Please provide the github ID of the engineer."
    },


]

questionsIntern = [
    {
        type: "input",
        name: "name",
        message: "What is the name?"
    },

    {
        type: "input",
        name: "ID",
        message: "Please input the employee ID"
    },
    {
        type: "input",
        name: "Email",
        message: "Please provide the email."
    },
    {
        type: "input",
        name: "school",
        message: "Please provide the school of the intern."
    },
]

function askEmployee() {
    inquirer.prompt(questionsEmployee)
        .then((response) => {
            switch (response.title) {
                case "intern":
                    inquirer.prompt(questionsIntern).then((response) => {
                        const intern = new Intern(response.name, response.ID, response.Email, response.school)
                        console.log(intern);
                        team.push(intern);
                        askEmployee();
                    })
                    break
                case "engineer":
                    inquirer.prompt(questionsEngineer).then((response) => {
                        const engineer = new Engineer(response.name, response.ID, response.Email, response.githubID)
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
            const manager = new Manager(response.name, response.ID, response.Email, response.officenumber)
            console.log(manager);
            team.push(manager);
            askEmployee();





        })

}


init();
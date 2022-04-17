// TODO: Include packages needed for this application
// const thisPackage = require('./package.json');
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = ['What is the title of this project?',
                    'write a description of this project', 
                    'write installation information and instructions',
                    'write about the usage of this project',
                    'insert license here',
                    'Include contributors for this project',
                    'write how you can test the fuctionality of this project',
                    'Enter Github Username',
                    'Enter email address'];

const choices = ['MIT', 'APACHE', 'GPL', 'BSD', 'None'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readmeContent = generateMarkdown(data)
    fs.writeFile(fileName, readmeContent, (err) => {
        if (err) {
            console.log(err)
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0],
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1],
            },
            {
                type: 'input',
                name: 'installation',
                message: questions[2],
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[3],
            },
            {
                type: 'checkbox',
                name: 'license',
                message: questions[4],
                choices: choices
            },
            {
                type: 'input',
                name: 'contributing',
                message: questions[5],
            },
            {
                type: 'input',
                name: 'tests',
                message: questions[6],
            },
            {
                type: 'input',
                name: 'questions',
                message: questions[7],
            },
            {
                type: 'input',
                name: 'email',
                message: questions[8],
            },
        ])
        .then((response) => { 
            writeToFile('README.md', response)
            console.log("Successfully generated Readme file")           
});
}
// Function call to initialize app
init()
 
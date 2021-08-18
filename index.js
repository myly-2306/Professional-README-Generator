// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const axios = require('axios');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project called?',
        name: 'title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project'  
    },
    {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions'  
    },
    {
    type: 'input',
    name: 'usage',
    message: 'How is the usage of your app?'  
    },
    {
    type: 'list',
    name: 'license',
    message: 'Choose a lisence for your project?', 
    choices: [
            "MIT",
            "CPOL",
            "CDDL",
            "Ms-PL",
            "MPL",
            "CPL",
            "Eclipse",
            "Apache",
        ]
    },
    {
    type: 'list',
    name: 'licensename',
    message: 'What is the full name of the license you chose?', 
    choices: [
            "MIT License",
            "Code Project Open License (CPOL)",
            "Common Development and Distribution License (CDDL)",
            "Microsoft Public License (Ms-PL)",
            "Mozilla Public License 1.1 (MPL)",
            "Common Public License Version 1.0 (CPL)",
            "Eclipse Public License 1.0",
            "Apache License, Version 2.0",
        ]
    },
    {
    type: 'input',
    name: 'contribution',
    message: 'How do you want future users to contribute to your project?'  
    },
    {
    type: 'input',
    name: 'test',
    message: 'Enter test instructions for your project?'  
    },
    {
    type: 'input',
    name: 'github',
    message: 'What is your Github username?'  
    },
    {
    type: 'input',
    name: 'email',
    message: 'What is your email?'  
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log('README was successfully created!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const response = generateMarkdown(answers);
        console.log(answers);

        writeToFile('README.md', response);
    })
}

// Function call to initialize app
init();

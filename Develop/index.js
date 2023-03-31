// TODO: Include packages needed for this application
// requiered packgaes
const inquirer = require('inquirer');
const fs = require('fs')
//README Markdown
const generateMarkdown = require('./utils/generateMarkdown')

console.log('... README generator');

// TODO: Create an array of questions for user input

const questions = [
    // Questions
    {
        name: 'title',
        message: 'What is the name of the Project?',
        type: 'input',
        validate: promterInput => {
            if (promterInput) {
                return true;
            } else {
                console.log('Most type title to continue!');
                return false
            }

        },
    },
    {
        name: 'Description',
        message: 'Description',
        type: 'input',


    },
    {
        name: 'Installation',
        message: 'Installation',
        type: 'input'

    },
    {
        name: 'Usage',
        message: 'Usage',
        type: 'input'

    },
    {
        name: 'Credits',
        message: 'Credits or contributing?',
        type: 'input'

    },
    {
        name: 'license',
        message: 'Choose your license',
        type: 'list',
        choices: ['MIT', 'GPLv2', 'Apache', 'BSD 3-clause','none'],
        validate: promterInput => {
            if (promterInput) {
                return true;
            } else {
                console.log('Most choose type of license to continue!');
                return false
            }

        },

    },
    {
        name: 'Github',
        message: 'Enter GitHub username',
        type: 'input'

    },
    {
        name: 'Email',
        message: 'Enter email address',
        type: 'input'

    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
    }
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (userInfo) {
        console.log(userInfo)
        writeToFile('README.md', generateMarkdown(userInfo));
    })
}

// Function call to initialize app
init();

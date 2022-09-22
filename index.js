const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown');



inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'Title',
        },
        {
            type: 'input',
            message: 'Provide a short description explaining the what, why, and how of your project.',
            name: 'Description',
        },
        {
            type: 'input',
            message: 'Enter Table of Contents.',
            name: 'Table of Contents',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'Installation',
        },
        {
            type: 'input',
            message: 'Provide instructions and examples for use.',
            name: 'Usage',
        },
        {
            type: 'list',
            message: 'Enter license.',
            name: 'License',
            choices: [
                "Apache License 2.0 [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
                "MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
                "BSD 2-Clause [![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
                "BSD 3-Clause [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
                "Boost Software License 1.0 [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"],
        },
        {
            type: 'input',
            message: 'Provide guidelines for contributing.',
            name: 'Contributing',
        },
        {
            type: 'input',
            message: 'Provide examples on how to run tests if any created.',
            name: 'Tests',
        },
        {
            type: 'input',
            message: 'Provide your Github link.',
            name: 'Github',
        },
        {
            type: 'input',
            message: 'Provide your email address.',
            name: 'Email',
        },
    ])
    .then((answers) =>
        fs.writeFile('SampleREADME.md', generateMarkdown(answers), (err) =>
            err ? console.log(err) : console.log("Sucess!")
        )
    );
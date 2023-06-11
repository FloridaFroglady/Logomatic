//require node packages
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)
const fs = require('fs');

//use async/await to handle the inquirer input
async function promptUser(){
    return await inquirer
    .prompt([
       { 
        type: 'maxlength-input',
        message: 'Enter up to 3 letters for your logo.',
        name: 'text',
        maxLength: '3',
       },
       {
        type: 'input',
        message: 'How would you like to enter your text color(name or hexcode).',
        name: 'textColorChoice',
       },
       { 
        type: 'input',
        message: 'Please input the hexcode of the desired text color.', 
        name: 'textHexcode',
        when: (answers) => answers.textColorChoice === 'hexcode',
       },
       {
        type: 'input',
        message: 'Please give the color name for the desired text color.',
        name: 'textColorname',
        when: (answers) => answers.textColorChoice === 'name',
       },
       {
        type: 'list',
        message: 'Choose a shape from the list using the arrow keys, enter to choose.',
        name: 'shapeName',
        choices: ['Square', 'Circle', 'Triangle'],
       },
       {
        type: 'input',
        message: 'How would you like to enter your shape color(name or hexcode).',
        name: 'shapeColorChoice',
       },
       { 
        type: 'input',
        message: 'Please input the hexcode of the desired shape color.', 
        name: 'shapeHexcode',
        when: (answers) => answers.shapeColorChoice === 'hexcode',
       },
       {
        type: 'input',
        message: 'Please give the color name for the desired shape color.',
        name: 'shapeColorname',
        when: (answers) => answers.shapeColorChoice === 'name',
       },
    ])
}
promptUser().then(answers => {
console.log(answers);
Shape.setColor();
})
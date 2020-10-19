// const fs = require('fs');

// // fs.writeFileSync('notes.txt', 'Hello world ');

// fs.appendFileSync('notes.txt', 'This is a message to be appended')

// Validator npm package helps validate things(emails, urls etc)

// const validator = require('validator')
// console.log(validator.isURL('https://mail.ru'))

const getNotes = require('./notes.js')
// const notes = getNotes()

// Chalk npm package helps colorifying text output in terminal:

const chalk = require('chalk');

// console.log(chalk.bold.inverse.blue('Success'))

// Yargs npm package helps building command line tools:

const yargs = require('yargs')

const command = process.argv[2] //.argv passes argument from command line
// console.log(process.argv)
//Customize yargs version

// yargs.version('1.1.0')

//Create add command:
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, //Makes title to be required to run, wont work, only works with such command: node app.js --title='Shoppinglist'; if it's just --title , the value would be = true
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
    }
})
yargs.parse() //makes a call to yargs and applies all the changes above
//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title'
        }
    },
    handler: function (argv) {
        console.log('Removing the note', argv)
    }
})

//Create a 'list' command
yargs.command({
    command: 'list',
    describe: 'List of all the notes',
    handler: function() {
        console.log('Here is the list')
    }
})

// Create a read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading notes')
    }
})
console.log(yargs.argv)
//Passing parameters from command line:

// if(command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }


//(node app.js add --title="This is new title")<- Goes into terminal
const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
    return 'Your notes..';
}

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.inverse.green('New note added!'));
    } else {
        console.log(chalk.inverse.red('Note title taken'));
    }
}

const removeNote = function (title) {
    const notes = loadNotes();
    const notesLeft = notes.filter(function (note) {
        return note.title != title
    })
    if(notesLeft.length < notes.length ) {
        saveNotes(notesLeft);
        console.log(chalk.inverse.green('Note removed!'))
    } else {
        console.log(chalk.inverse.red('No such title found!'))
    }
}

const saveNotes = function (notes) {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson)
    
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
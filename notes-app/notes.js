const fs = require('fs');
const chalk = require('chalk');

const getNotes =  () => {
    return 'Your notes..';
}

const addNote =  (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter( (note) =>
    //     note.title === title
    // )
    const duplicateNote = notes.find((note) => note.title === title);
    if (!duplicateNote) {
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

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('not found'));
    }
}

const removeNote =  (title) => {
    const notes = loadNotes();
    const notesLeft = notes.filter((note) => note.title != title);

    if(notesLeft.length < notes.length ) {
        saveNotes(notesLeft);
        console.log(chalk.inverse.green('Note removed!'));
    } else {
        console.log(chalk.inverse.red('No such title found!'));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes: '));
    notes.forEach((note) => console.log(note.title));
}

const saveNotes =  (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    
    } catch (e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}

//how to debug: put word 'debugger' in code after statement you want to inspect and type 'node --inspect-brk appname.js add --title='blabla'' in terminal, then 'restart'
//chrome://inspect
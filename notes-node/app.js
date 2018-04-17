console.log("Starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

var argv = yargs.argv;
var command = yargs.argv._[0];

console.log('Command: ', command);
console.log('Yargs', argv);

// add arguement
if (command === 'add') {

    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log(`Note added: ${note.title}`)
        notes.logNote(note);
    } else
        console.log(`Duplicate title: ${argv.title}`);

} else if  (command === 'list') {
    notes.getAll();
} else if  (command === 'read') {
    var note = notes.readNote(argv.title);

    if (note) {
        console.log(`Note found: ${note.title}`)
        notes.logNote(note);
    } else
        console.log(`Note not found: ${argv.title}`);
        
} else if  (command === 'remove') {
    noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? `Note removed: ${argv.title}` : `Note not found:  ${argv.title}`;
    console.log(message);
} else {
    console.log("Command not recognized");
}
    
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

//command options
const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
};

var argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
var command = yargs.argv._[0];

// add arguement
if (command === 'add') {

    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log(`Note added: ${note.title}`)
        notes.logNote(note);
    } else
        console.log(`Duplicate title: ${argv.title}`);

} else if  (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((e) => notes.logNote(e));
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
    
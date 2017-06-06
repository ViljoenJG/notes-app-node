const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const { addNote, removeNote, getNote, getAllNotes } = require('./notes');

const argv = yargs.argv;
const command = argv._[0];
console.log(`Command: ${ command }`);
console.log('Yargs', argv);

if (command === 'add') {
    let note = addNote(argv.title, argv.body);

    if (note) {
        console.log('Note Created.');
        console.log('----');
        console.log(`Title: ${ note.title }`);
        console.log(`body: ${ note.body }`);
    }

} else if (command === 'list') {
    getAllNotes();

} else if (command === 'read') {
    getNote(argv.title);

} else if (command === 'remove') {
    if (removeNote(argv.title)) {
        console.log('Note removed');
    } else {
        console.log('Note not found');
    }

} else {
    console.error('Command not recognised');
}
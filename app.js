const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const { addNote, removeNote, getNote, getAllNotes } = require('./notes');

const argv = yargs.argv;
const command = argv._[0];
console.log(`Command: ${ command }`);
console.log('Yargs', argv);

if (command === 'add') {
    addNote(argv.title, argv.body);
} else if (command === 'list') {
    getAllNotes();
} else if (command === 'read') {
    getNote(argv.title);
} else if (command === 'remove') {
    removeNote(argv.title);
} else {
    console.error('Command not recognised');
}
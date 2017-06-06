const fs = require('fs');
const _ = require('lodash');

const { errHandler, capitalise, add } = require('./handlers.js');
const { addNote } = require('./notes');

const command = process.argv[2];
console.log(`Command: ${ command }`);

if (command === 'add') {
    console.log('adding new note');
} else if (command === 'list') {
    console.log('Listing notes');
} else if (command === 'read') {
    console.log('Reading Notes');
} else if (command === 'remove') {
    console.log('Removing note');
} else {
    console.error('Command not recognised');
}
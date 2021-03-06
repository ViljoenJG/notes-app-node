#!/usr/bin/env node
const fs = require('fs');
const _ = require('lodash');

const { addNote, removeNote, getNote, getAllNotes, logNote } = require('./notes');
const { command, argv } = require('./argumentHandling');

if (command === 'add') {
    let note = addNote(argv.title, argv.body);

    if (note) {
        logNote('Note Created', note);
    }

} else if (command === 'list') {
    let notes = getAllNotes();

    if (notes) {
        notes.forEach((note, idx) => logNote(`Note ${ idx + 1} `, note));
    } else {
        console.log('No notes found');
    }

} else if (command === 'read') {
    const note = getNote(argv.title);

    if (note) {
        logNote('Note found', note);
    } else {
        console.log('Note not found');
    }

} else if (command === 'remove') {
    if (removeNote(argv.title)) {
        console.log('Note removed');
    } else {
        console.log('Note not found');
    }

} else {
    console.error('Command not recognised. Use --help for more information.');
}

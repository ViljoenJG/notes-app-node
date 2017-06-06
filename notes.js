const fs = require('fs');

const addNote = (title, body) => {
    let notes = [];

    try {
        notes = JSON.parse(fs.readFileSync('data/notes-data.json'));
    } catch (e) {
        console.log('Data file does not exist. A new data file will be created.')
    }

    const note = {
        title,
        body
    };

    notes.push(note);
    fs.writeFileSync('data/notes-data.json', JSON.stringify(notes));
};

const getAllNotes = () => {
    console.log('Getting all notes');
};

const getNote = title => {
    console.log('Getting note', title);
};

const removeNote = title => {
    console.log('Removing note', title);
};

module.exports = {
    addNote,
    getAllNotes,
    getNote,
    removeNote
};
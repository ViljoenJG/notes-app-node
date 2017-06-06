const fs = require('fs');

const addNote = (title, body) => {
    let notes = [];

    try {
        notes = JSON.parse(fs.readFileSync('data/notes-data.json'));
    } catch (e) {
        console.log('Data file does not exist. A new data file will be created.')
    }

    if (!noteExists(notes, title)) {
        const note = {
            title,
            body
        };

        notes.push(note);
        fs.writeFileSync('data/notes-data.json', JSON.stringify(notes));
    } else {
        console.log('A note with that title already exists. Note not added.');
    }
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

function noteExists(notes, title) {
    for (let a =0; a < notes.length; a++) {
        if (notes[a].title === title) {
            return true;
        }
    }

    return false;
}
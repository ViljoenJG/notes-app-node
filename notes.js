const fs = require('fs');

const addNote = (title, body) => {
    let notes = fetchNotes();

    if (!noteExists(notes, title)) {
        const note = {
            title,
            body
        };

        notes.push(note);
        saveNotes(notes);
        return note;
    } else {
        console.log('A note with that title already exists. Note not added.');
        return null;
    }
};

const getAllNotes = () => {
    return fetchNotes();
};

const getNote = title => {
    console.log('Getting note', title);
};

const removeNote = (title) => {
    let notes = fetchNotes();
    let before = notes.length;

    notes = notes.filter(note => note.title !== title);
    saveNotes(notes);

    return notes.length !== before;
};

module.exports = {
    addNote,
    getAllNotes,
    getNote,
    removeNote
};

function fetchNotes() {
    try {
        let notes = JSON.parse(fs.readFileSync('data/notes-data.json'));
        return (notes.constructor === Array) ? notes : []
    } catch (e) {
        return [];
    }
}

function saveNotes(notes) {
    fs.writeFileSync('data/notes-data.json', JSON.stringify(notes));
}

function noteExists(notes, title) {
    for (let a =0; a < notes.length; a++) {
        if (notes[a].title === title) {
            return true;
        }
    }

    return false;
}
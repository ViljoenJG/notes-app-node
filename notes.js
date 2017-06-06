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

const getNote = (title) => {
    let notes = fetchNotes();
    notes = notes.filter(note => note.title === title);
    return notes[0]
};

const removeNote = (title) => {
    let notes = fetchNotes();
    let before = notes.length;

    notes = notes.filter(note => note.title !== title);
    saveNotes(notes);

    return notes.length !== before;
};

const logNote = (message, note) => {
    console.log(message || 'Note');
    console.log('-----');
    console.log(`Title: ${note.title}\nBody: ${note.body}`);
};

module.exports = {
    addNote,
    getAllNotes,
    getNote,
    removeNote,
    logNote
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
    return notes.some(note => note.title === title);
}
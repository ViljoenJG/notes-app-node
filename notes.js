const fs = require('fs');

// Takes note title and body as input.
    // Checks if title exists before saving the note.
module.exports.addNote = (title, body) => {
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

module.exports.getAllNotes = () => {
    return fetchNotes();
};

// Returns note with matching title.
    // Returns undefined if note is not found.
module.exports.getNote = (title) => {
    let notes = fetchNotes();
    notes = notes.filter(note => note.title === title);
    return notes[0]
};

// Takes title as input and removes note with matching title.
    // Returns Boolean to indicate if note was removed.
module.exports.removeNote = (title) => {
    let notes = fetchNotes();
    let before = notes.length;

    notes = notes.filter(note => note.title !== title);

    if (notes.length !== before) {
        saveNotes(notes);
    }

    return notes.length !== before;
};

// Logs note details to the console.
module.exports.logNote = (message, note) => {
    console.log(message || 'Note');
    console.log('-----');
    console.log(`Title: ${note.title}\nBody: ${note.body}`);
};


/***********************
* Private methods
* *********************/

// Reads JSON data file, if it exists.
    // If JSON is not an array, an empty array is returned.
    // If file does not exist an empty array is returned.
function fetchNotes() {
    try {
        let notes = JSON.parse(fs.readFileSync('data/notes-data.json'));
        return (notes.constructor === Array) ? notes : []
    } catch (e) {
        return [];
    }
}

// Takes notes array as input. Saves as JSON to file.
function saveNotes(notes) {
    fs.writeFileSync('data/notes-data.json', JSON.stringify(notes));
}

// Returns notes array and title as inputs.
    // Returns Boolean to indicate if a note by that title exists in the array.
function noteExists(notes, title) {
    return notes.some(note => note.title === title);
}
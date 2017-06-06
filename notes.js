const addNote = (title, body) => {
    console.log('Adding Note', title, body);
    // return `Title: ${ title }. Body: ${ body }`
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
const title = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const body = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
};

const addOptions = {
    title,
    body
};

const readOptions = {
    title
};

const removeOptions = {
    title
};

const add = ['add', 'Add a new note', addOptions];
const read = ['read', 'Get a single note', readOptions];
const remove = ['remove', 'Remove a note', removeOptions];
const list = ['list', 'List all notes'];

module.exports = {
    add,
    list,
    read,
    remove
};
const yargs = require('yargs');

const usage = 'Usage: $0 <command> [options]. \nUse: $0 <command> --help for available options.';
const demandMessage = 'ERROR: You need to specify a command to perform (add, list, read or remove).';

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

const argv = getArgs();
const command = argv._[0];

module.exports = {
    argv,
    command
};

/******************
* Build yargs options.
* *****************/

function getArgs() {
    return yargs
        .usage(usage)
        .demand(1, demandMessage)
        .command('add', 'Add a new note', addOptions)
        .command('list', 'List all notes')
        .command('read', 'Get a single note', readOptions)
        .command('remove', 'Remove a note', removeOptions)
        .help('help')
        .alias('help', 'h')
        .argv;
}
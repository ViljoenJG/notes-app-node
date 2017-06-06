const fs = require('fs');
const _ = require('lodash');

const { errHandler, capitalise, add } = require('./handlers.js');
const { addNote } = require('./notes');

console.log(addNote());
const { errHandler, capitalise, add } = require('./handlers.js');
const fs = require('fs');
const os = require('os');
const _ = require('lodash');


let arr = [7, 8, 7, 9, 5, 9, 7, 3];

console.log(_.uniq(arr));


// console.log(_.isString(true));
// console.log(_.isString('Kobus'));
// console.log(_.isString(7));


// console.log(add(7, 8));
// let user = os.userInfo();
// fs.appendFile('greetings.txt', `Hello ${ capitalise(user.username) }!\n`, errHandler);

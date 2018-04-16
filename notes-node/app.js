console.log("Starting app.js");
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes')

var filteredAray = _.uniq(["Jaini", 1, "Jaini", 1, 2, 3, 4, 5]);

// var res = notes.add(9,9);
// console.log("Result:" + res);
console.log(_.isString(true));
console.log(_.isString("Jaini"));
console.log(filteredAray);

// var user = os.userInfo();

// fs.appendFile("greetings.txt",`Hello ${user.username}! You are ${notes.age}.`, function(err) {
//     if (err) {
//         console.log("unable to write file");
//     }
// });
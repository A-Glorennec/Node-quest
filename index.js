const importedUser = require("./informations");

const cowsay = require("cowsay");

const message = `My name is ${importedUser.name} my campus is ${importedUser.campus}`;

console.log(cowsay.say({ text: message }));
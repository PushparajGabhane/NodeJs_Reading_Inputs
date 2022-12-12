const readline = require("readline");

var rl = readline.createInterface(
    process.stdin, process.stdout);

rl.question('Please enter your name: ', (Name) => {
    console.log('Hello', Name);
    rl.close();
});
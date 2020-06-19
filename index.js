const readline = require('readline');
const fs = require('fs')
const Counter = require("./Counter.js")

const readInputUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const DEFAULT_FILE_NAME = "data.txt";

var file_name = DEFAULT_FILE_NAME;
var text_content = "";


function getContent() {
    return fs.readFileSync(file_name, 'utf8')
}

function error(decription) {
    console.error(decription);
    process.exit()
}


function init() {
    var text_length = text_content.length;
    console.info("Your text have " + text_length + " characters")
    $counter=new Counter(text_content, true);
    console.log($counter)
}
//First step get file of the text
readInputUser.question("File name (" + DEFAULT_FILE_NAME + "):", function(name) {
    if (name.length != 0) {
        file_name = name;
    }
    if (fs.existsSync(file_name)) {
        text_content = getContent();
        init();
    } else {
        error("This file doesn't exist");
    }
    readInputUser.close()
});
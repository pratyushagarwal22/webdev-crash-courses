// File System module(fs)

const fs = require('fs');
const path = require('path');;


// Create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function(err) { // you can also use arrow function
//     if(err) throw err;
//     console.log('Folder Created...');
// });

// example of above with arrow function
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if(err) throw err;
//     console.log('Folder Created...');
// });





// Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World this is a file through nodejs', err => {
//     if(err) throw err;
//     console.log('File Written to...');

//     // File Append
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love nodejs', err => {
//         if(err) throw err;
//         console.log('File Appended to...');
//     });
// });





// Read from a file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });




// Rename a file
// fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
//     if(err) throw err;
//     console.log('File Renamed...');
// });


































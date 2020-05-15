const path = require('path');

// Base file name - basename()
console.log(__filename);
console.log(path.basename(__filename));

// Directory name - dirname() // __dirname gives the same thing
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create obect with different parts of the path
console.log(path.parse(__filename));

// Concatenate paths - join()
// ../test/hello.html

console.log(path.join(__dirname, 'test', 'hello.html'));






















// const Person = require('./person'); // Common JS Method

// const person1 = new Person('John Doe', 51);
// person1.greeting();

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if(req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if(err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content);
    //     });
        
    // }

    // if(req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if(err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content);
    //     });
        
    // }

    // if(req.url === '/api/users') {
    //     const users = [
    //         {name: 'Bob Smith', age: 40 },
    //         {name: 'John Doe', age: 30 }
    //     ];
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify(users));
    // } // Not as efficient as every page needs to be loaded independently using if() statements and css files also need to be handled which is difficult

    // Build file path dynamically
    let filePath = path.join(__dirname, 'public', req.url === '/' ?'index.html' : req.url);

    // console.log(filePath);
    // res.end();

    // Get Extension of the file

    let extname = path.extname(filePath);

    //Initial Content type
    let contentType = 'text/html';
    
    // Check ext and then set content Type
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }


    //Read File
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' }); 
                    res.end(content, 'utf8');
                });
            }
            else {
                // Some Server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        }
        else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));



/* Main thing to remember while deployment is that

1) PORT you must use process.env.PORT
2) in package.json - have your start script

*/






























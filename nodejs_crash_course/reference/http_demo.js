const http = require('http');

// Create a Server Object
http.createServer((req, res) => {
    // Write Response
    res.write('Hello This is my server created through NodeJS');
    res.end();
}).listen(5000, () => console.log('Server Running...'));






























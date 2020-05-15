const EventEmitter = require('events');
const uuid = require('uuid'); // creates a random universal format of an id

class logger extends EventEmitter {
    log(msg) {
        // Call Event / Raise an Event
        this.emit('message', {id: uuid.v4(), msg});
    }
}

module.exports = logger;

// To run it in the same file. remove the above exports statement and the below require statement


// To access logger file - was written in another file
// const Logger = require('./logger');

// To instantiate logger
// const logger = new Logger();
// logger.on('message', (data) => console.log('Called Listener', data));
// logger.log('Hello World');
// logger.log('Hello');
// logger.log('Hi');

// Can also have fs module in logger class and use it to log data to a file etc




















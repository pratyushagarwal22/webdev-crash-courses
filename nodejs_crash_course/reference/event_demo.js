const EventEmitter = require('events');

// Create Emitter Class
class MyEmitter extends EventEmitter {

}

// Init Object
const myEmitter = new MyEmitter();

// Event Listener
myEmitter.on('event', () => console.log('Event Fired!'));

// Init Event
myEmitter.emit('event');

// for practical understanding refer to file logger.js in the main node crash course folder, before the reference folder(in the root folder)


















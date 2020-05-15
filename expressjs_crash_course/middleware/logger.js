const moment = require('moment');

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl} : ${moment().format()}`);
    next();
}; // logger can be saved to a file using the fs module

module.exports = logger;
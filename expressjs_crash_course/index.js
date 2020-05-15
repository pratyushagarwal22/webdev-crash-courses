const express = require('express');
const path = require('path');
// const moment = require('moment');
const logger = require('./middleware/logger');
const exphbs = require('express-handlebars');
const members = require('./members');

const app = express();



// Express has the option to make a particular folder static(to load only html css images etc)

// Init middleware
// app.use(logger);

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Homepage Route - rendering
app.get('/', (req,res) => {
    res.render('index', {
        title: 'Member App',
        members
    });
});

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORt || 5000;
app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));



























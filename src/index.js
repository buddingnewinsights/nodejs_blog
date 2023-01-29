const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');

const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// Connect to the database
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// XMLHttpRequest, fetch, axios, and others

// HTTP logger
// app.use(morgan("combined"));

// template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');

require('./db');
const { auth } = require('./routes');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/', auth);

app.listen(process.env.PORT);

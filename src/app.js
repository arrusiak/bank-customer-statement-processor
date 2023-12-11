import {handleError} from './helpers/error';

const express = require('express');
const routes = require('./routes/index');

const app = express();

app.use('/', routes);

// should be at the end of app stack
app.use(handleError);

module.exports = app;

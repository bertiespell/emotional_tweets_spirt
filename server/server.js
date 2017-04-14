if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';

const path = require('path');
const express = require('express');
const app = express();
const config = require('../config');
const PORT = config.PORT[process.env.NODE_ENV];
const apiRoutes = require('./Routers/api');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/api', apiRoutes);

app.use(express.static(path.join(__dirname, '..', '/public')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
const express = require('express');

const router = require('./router');

const middleware = require('./middleware');

const server = express();

middleware(server);

server.use('/api', router);

module.exports = server;
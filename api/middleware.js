const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const dbConn = require('../data/db-config');


const sessionConfig = {
    secret: process.env.SESSION_SECRET || 'is it secret, is it safe?',
    cookie: {
        maxAge: 1000 * 60 * 10,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: true,
    store: new KnexSessionStore({
        knex: dbConn,
        tablename: 'sessions',
        sidfilename: 'sid',
        createtable: true,
        clearInterval: 600000
    })
};

module.exports = server => {
    server.use(helmet());
    server.use(session(sessionConfig))
    server.use(express.json());
    server.use(cors());
};
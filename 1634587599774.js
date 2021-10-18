const express = require('express');
const HelloWorld = require('./controllers/HelloWorld');

const routes = express.Router();

routes.post('/', HelloWorld.kasino);

module.exports = routes;
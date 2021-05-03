const express = require('express');

const User = require('./controllers/UserController');

const routes = express.Router();

routes.get('/api/users', User.index);

routes.post('/api/users', User.register);

routes.post('/api/authenticate', User.authenticate);

routes.put('/api/users/:id', User.update);

routes.delete('/api/users/:id', User.delete);

module.exports = routes;

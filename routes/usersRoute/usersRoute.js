const usersRoute = require('express').Router();
const { createUser, getUsers } = require('../../handlers/usersHandler/usersHandler');

usersRoute.post('/users/createUser', createUser);
usersRoute.get('/users/getUsers', getUsers);

module.exports = usersRoute;
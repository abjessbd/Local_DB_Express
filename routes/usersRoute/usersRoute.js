const usersRoute = require('express').Router();
const { createUser, getUsers, findOneUser, updateUserByPatch } = require('../../handlers/usersHandler/usersHandler');

usersRoute.post('/users/createUser', createUser);
usersRoute.get('/users/getUsers', getUsers);
usersRoute.get('/users/:id', findOneUser);
usersRoute.patch('/users/:id', updateUserByPatch);

module.exports = usersRoute;
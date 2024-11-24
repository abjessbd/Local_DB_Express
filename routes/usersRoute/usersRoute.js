const usersRoute = require('express').Router();
const { createUser, getUsers, findOneUser, updateUserByPatch, updateUserByPut, deleteUser } = require('../../handlers/usersHandler/usersHandler');

usersRoute.post('/users/createUser', createUser);
usersRoute.get('/users/getUsers', getUsers);
usersRoute.get('/users/:id', findOneUser);
usersRoute.patch('/users/:id', updateUserByPatch);
usersRoute.put('/users/:id', updateUserByPut);
usersRoute.delete('/users/:id', deleteUser);

module.exports = usersRoute;